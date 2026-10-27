#!/usr/bin/env python3
"""Transcribe an audio/video file with faster-whisper into timestamped segments.

Usage:
    python transcribe.py INPUT OUTPUT [--model large-v3] [--language th]

Writes one line per segment, e.g. "[01:23] ข้อความ" (or "[H:MM:SS]" past one hour),
and prints the same lines to stdout followed by a final "DONE" line, so a caller can
watch the log for DONE or a Traceback. Speaker separation is NOT done here: the
caller assigns Speaker labels from turn-taking and context.

Requires: pip install faster-whisper (ffmpeg is not needed for common formats because
faster-whisper decodes with PyAV; convert exotic containers with ffmpeg first).
"""
import argparse


def stamp(seconds: float) -> str:
    s = int(seconds)
    h, rem = divmod(s, 3600)
    m, sec = divmod(rem, 60)
    return f"[{h}:{m:02d}:{sec:02d}]" if h else f"[{m:02d}:{sec:02d}]"


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("input")
    p.add_argument("output")
    p.add_argument("--model", default="large-v3")
    p.add_argument("--language", default="th", help='ISO code, or "auto" to detect')
    p.add_argument("--compute-type", default="int8")
    p.add_argument("--device", default="cpu")
    a = p.parse_args()

    from faster_whisper import WhisperModel

    model = WhisperModel(a.model, device=a.device, compute_type=a.compute_type)
    segments, info = model.transcribe(
        a.input,
        language=None if a.language == "auto" else a.language,
        vad_filter=True,  # skips silence, which is where Whisper tends to invent text
        beam_size=5,
        condition_on_previous_text=False,  # avoids repetition loops across segments
    )
    with open(a.output, "w", encoding="utf-8") as f:
        for seg in segments:
            line = f"{stamp(seg.start)} {seg.text.strip()}"
            f.write(line + "\n")
            f.flush()
            print(line, flush=True)
    print(f"DONE language={info.language} duration={info.duration:.1f}s", flush=True)


if __name__ == "__main__":
    main()
