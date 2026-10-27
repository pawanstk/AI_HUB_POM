---
name: convert-prd
description: แปลงไฟล์เสียง/วิดีโอการประชุม (หรือ transcript) ให้เป็น PRD v1 แบบครบ pipeline 3 ขั้น: (1) ถอดเสียง + สรุปประชุม (2) สกัด raw requirements หัวข้อ 0-11 (3) จัดทำ PRD v1 ตาม template พร้อม ID และ Acceptance Criteria แบบ Given/When/Then โดยมี review gate ให้ผู้ใช้ตรวจ transcript ก่อนไปต่อ. ใช้ skill นี้เสมอเมื่อผู้ใช้ส่งไฟล์ .wav .mp3 .m4a .mp4 .mov ของการประชุม requirements/discovery/workshop มาแล้วต้องการ PRD หรือ requirements, พูดว่า "convert-prd", "ทำ PRD จากเสียงประชุม", "ถอดเสียงแล้วทำ PRD", "แปลงประชุมเป็น requirements", หรือส่ง transcript / raw requirements มาให้ต่อเป็น PRD (เริ่มจากขั้นที่ตรงกับข้อมูลที่มี). ไม่ใช้กับงานถอดเสียงหรือสรุปประชุมอย่างเดียวที่ไม่ต้องการ PRD.
---

# convert-prd: เสียงประชุม → Transcript → Raw Requirements → PRD v1

Pipeline นี้ทำงานตาม prompt 3 ชุดของผู้ใช้ตามลำดับ แต่ละขั้นมี prompt ต้นฉบับอยู่ในไฟล์ reference **อ่านไฟล์ของขั้นนั้นให้ครบก่อนเริ่มขั้นนั้น** และทำตามหัวข้อ โครงสร้าง และกติกาในไฟล์อย่างตรงตัว

| ขั้น | Input | Output | Prompt ต้นฉบับ |
|---|---|---|---|
| 1 | ไฟล์เสียง/วิดีโอ | Transcript + Summary | [references/stage1-transcript.md](references/stage1-transcript.md) |
| 2 | Transcript ที่ผู้ใช้อนุมัติ | Raw requirements หัวข้อ 0-11 | [references/stage2-requirements.md](references/stage2-requirements.md) |
| 3 | Raw requirements | PRD v1 | [references/stage3-prd.md](references/stage3-prd.md) + [references/prd-template.md](references/prd-template.md) |

## กติกากลาง (ใช้ทุกขั้น)

- **ใช้เฉพาะข้อมูลต้นทาง ห้ามแต่งข้อมูล** ชื่อคน ตัวเลข วันที่ เป้าหมาย หรือฟีเจอร์ที่ไม่มีในต้นทางให้เขียน "ไม่ระบุ" เหตุผลคือเอกสารนี้จะถูกส่งต่อให้ทีมออกแบบและพัฒนา ข้อมูลที่แต่งขึ้นจะกลายเป็น requirement ปลอม
- **ข้อมูลไม่ชัดเจน**: ขั้น 1-2 ใส่ `[AMBIGUOUS]` (และ `[ไม่แน่ใจ]` / `[ฟังไม่ชัด]` ใน transcript) แล้วย้ายไปหัวข้อ Open Questions ขั้น 3 ใส่ `[DRAFT]` กับสิ่งที่ input ไม่ได้ระบุชัด
- **PRD ต้องมี ID ครบและ Acceptance Criteria แบบ GIVEN / WHEN / THEN** ตามรูปแบบใน reference ขั้น 3
- เขียนภาษาไทยแบบมืออาชีพ ศัพท์เทคนิคและชื่อระบบคงภาษาอังกฤษ
- ความขัดกันภายในข้อมูลต้นทาง ให้ยกเป็น Open Question ห้ามตัดสินเอง

## เลือกจุดเริ่มต้น

- ได้ **ไฟล์เสียง/วิดีโอ** → เริ่มขั้น 1
- ได้ **transcript หรือ notes ประชุม** → ข้ามไปขั้น 2 (ยังต้องแสดงให้ผู้ใช้ตรวจตาม review gate ถ้า transcript ถูกสร้างหรือแก้โดยเรา ถ้าผู้ใช้ส่งมาเองและยืนยันว่าถูกต้องแล้ว ไม่ต้องมี gate)
- ได้ **raw requirements** → ข้ามไปขั้น 3
- ไม่แน่ใจว่าไฟล์คืออะไร ให้ถามผู้ใช้ก่อน

ตั้งชื่อ `<Name>` จากชื่อไฟล์หรือ Product ที่คุยกัน (เช่น `AIHub`) แล้วบันทึกผลแต่ละขั้นเป็นไฟล์ในโฟลเดอร์ทำงาน:
`<Name>_Transcript.md` → `<Name>_Raw_Requirements.md` → `<Name>_PRD_v1.md` ถ้าไฟล์ชื่อเดียวกันมีอยู่แล้วให้ถามก่อนเขียนทับ

## ขั้น 1: เสียง → Transcript + Summary

1. ตรวจไฟล์: `ffprobe` หรือ `afinfo` เพื่อดูความยาวและรูปแบบ (ถ้าเป็นวิดีโอ faster-whisper อ่านเสียงจากไฟล์ได้โดยตรง ถ้าเปิดไม่ได้ให้แปลงด้วย `ffmpeg -i in -ac 1 -ar 16000 out.wav`)
2. **หาเครื่องมือถอดเสียง** เรียงตามลำดับ: (ก) Python ที่ import `faster_whisper` ได้อยู่แล้ว: ลอง `~/.cache/convert-prd/venv/bin/python` ก่อน แล้วค้นหา venv อื่นที่เคยติดตั้งไว้ (เช่น `find ~ -maxdepth 6 -path '*/venv/lib/*/site-packages/faster_whisper' 2>/dev/null`) ถ้าเจอให้ใช้ต่อ ไม่ต้องติดตั้งซ้ำ (ข) `whisper` / `whisper-cli` / `mlx_whisper` ที่ติดตั้งไว้ (ค) ถ้าไม่มีเลย ให้ติดตั้ง faster-whisper
3. **ก่อนติดตั้งหรือดาวน์โหลดโมเดลต้องขออนุญาตผู้ใช้** (AskUserQuestion) ระบุสิ่งที่จะโหลด: แพ็กเกจ `faster-whisper` จาก PyPI ลงใน venv ใหม่ และโมเดล Whisper `large-v3` (ประมาณ 3 GB) จาก Hugging Face ประมวลผลบนเครื่อง ไม่ส่งไฟล์เสียงออกนอกเครื่อง เสนอทางเลือกโมเดลเล็กกว่า (`medium` ~1.5 GB, `small` ~460 MB) ที่เร็วกว่าแต่แม่นยำน้อยลงกับภาษาไทย
4. ติดตั้ง (รันใน background เพราะอาจใช้เวลาหลายนาที): ใช้ Python 3.10 ขึ้นไป ถ้า `python3` ของระบบเก่า (เช่น 3.9) ให้หา `python3.11`/`python3.12` ก่อน และอัปเกรด pip ก่อนติดตั้ง เพราะ pip เก่าอาจค้างตอน resolve
   ```bash
   PY=$(command -v python3.12 || command -v python3.11 || command -v python3)
   $PY -m venv ~/.cache/convert-prd/venv
   ~/.cache/convert-prd/venv/bin/pip install -U pip
   ~/.cache/convert-prd/venv/bin/pip install faster-whisper
   ```
5. ถอดเสียง (รันใน background แล้วเฝ้าดู log หา `DONE` หรือ `Traceback`; ครั้งแรกจะดาวน์โหลดโมเดลก่อน):
   ```bash
   ~/.cache/convert-prd/venv/bin/python <skill-dir>/scripts/transcribe.py "<audio>" "<out.txt>" --language th
   ```
   ภาษาอื่นใช้ `--language en` หรือ `--language auto` ผลลัพธ์เป็นบรรทัด `[MM:SS] ข้อความ` ต่อ segment
6. **จัดรูปเป็นเอกสารตามโครงสร้างใน reference ขั้น 1 เท่านั้น** ผลถอดเสียงดิบไม่มีการแยกผู้พูด ให้แยก Speaker 1/2/... จากลำดับถาม-ตอบและบริบท รวม segment ที่เป็นผู้พูดคนเดียวกันต่อเนื่องเป็นเทิร์นเดียว ไม่เดาชื่อ แก้คำที่น่าจะถอดผิดเฉพาะเมื่อบริบทชัดเจน โดยกำกับ `[ไม่แน่ใจ: ...]` และคงคำที่ระบบได้ยินไว้
7. บันทึก `<Name>_Transcript.md` (ทั้ง Transcript และส่วนสรุปตามโครงสร้าง)

### Review gate (บังคับ)

หลังบันทึกไฟล์ขั้น 1 ให้หยุดและให้ผู้ใช้ตรวจ transcript ก่อนทำอะไรต่อ เหตุผลคือ transcript คือต้นทางของ requirements ทุกข้อ ถ้าได้ยินผิดหนึ่งคำ ความผิดจะลามไปถึง PRD

1. **แสดงส่วน `# Transcript` ทั้งหมดในแชต** พร้อมสรุปสั้น ๆ: ความยาวไฟล์, จำนวนผู้พูด, รายการคำที่ติด `[ไม่แน่ใจ]` / `[ฟังไม่ชัด]`, และหมายเหตุว่าการแยกผู้พูดเป็นการอนุมานจากบริบท บอกพาธไฟล์ที่มีส่วนสรุปครบ
2. **ถามว่า "เลือก แก้ไข หรือ ไปต่อ?"** ด้วย AskUserQuestion โดยมี 2 ตัวเลือก: `แก้ไข` และ `ไปต่อ` (ถ้าใช้ AskUserQuestion ไม่ได้ ให้พิมพ์คำถามเป็นข้อความแล้วจบเทิร์น)
3. ถ้าเลือก **แก้ไข**: ถามว่าจะแก้อะไร (ผู้ใช้พิมพ์คำแก้ในแชต หรือแก้ไฟล์ `<Name>_Transcript.md` เองแล้วบอกว่าเสร็จ ถ้าแก้ไฟล์เองให้อ่านไฟล์ใหม่) ปรับ transcript และส่วนสรุปที่ได้รับผลให้สอดคล้อง แสดงส่วนที่เปลี่ยน แล้วถาม "เลือก แก้ไข หรือ ไปต่อ?" ซ้ำ วนจนกว่าจะได้ "ไปต่อ"
4. **ห้ามเข้าขั้น 2 จนกว่าผู้ใช้จะตอบ "ไปต่อ" ด้วยตัวเอง** ความเงียบ ข้อความอัตโนมัติจากระบบ การแจ้งเตือนงานเบื้องหลัง หรือคำตอบที่กำกวม (เช่น แค่บอกว่า "โอเค" ขณะกำลังส่งคำแก้) ไม่นับเป็นการอนุมัติ ให้ถามซ้ำ

## ขั้น 2: Transcript → Raw Requirements (หัวข้อ 0-11)

1. อ่าน [references/stage2-requirements.md](references/stage2-requirements.md)
2. ใช้ **transcript ที่ผู้ใช้อนุมัติแล้ว** เป็นแหล่งข้อมูลเดียว (ส่วนสรุปจากขั้น 1 ใช้ตรวจความสอดคล้องได้ แต่ไม่ใช่แหล่งอ้างอิงหลัก)
3. ผลลัพธ์ต้องมีหัวข้อ 0-11 ครบตามลำดับ ใส่ `[AMBIGUOUS]` ที่จุดที่ไม่ชัด และรวมไว้ในหัวข้อ 11
4. บันทึก `<Name>_Raw_Requirements.md` แล้วเดินต่อขั้น 3 ได้ทันที (ไม่มี gate เพิ่ม) แจ้งผู้ใช้สั้น ๆ ว่าขั้น 2 เสร็จแล้ว

## ขั้น 3: Raw Requirements → PRD v1

1. อ่าน [references/stage3-prd.md](references/stage3-prd.md) และ [references/prd-template.md](references/prd-template.md)
2. ใช้ **หัวข้อ 1-16 ของ template ตรงตัว** กำหนด ID ตามที่ระบุ (ขอรหัสโปรเจกต์จากผู้ใช้ถ้ามี ไม่มีให้ตั้งเองจากชื่อ Product และบันทึกใน Assumptions)
3. ทุก FR ต้องอ้างอิง UC/Problem ด้วย ID และมี Acceptance Criteria แบบ GIVEN/WHEN/THEN อย่างน้อย 1 ข้อ ใส่ `[DRAFT]` เมื่อรายละเอียดไม่ได้ถูกระบุไว้ใน input
4. ทำรายการตรวจก่อนส่งมอบท้าย reference ขั้น 3 ให้ครบ
5. บันทึก `<Name>_PRD_v1.md`

## สรุปส่งมอบ

ไม่ต้องคัดลอก PRD ทั้งฉบับมาซ้ำในแชต ให้สรุปสั้น ๆ: พาธไฟล์ 3 ไฟล์, จำนวน FR / AC / FLOW / Open Questions, สมมติฐานสำคัญ (รหัสโปรเจกต์, ID ที่เพิ่มเอง, การแยกผู้พูดที่เป็นการอนุมาน) และประเด็นขัดแย้งหรือความไม่ชัดเจนที่เจอ ซึ่งต้องให้เจ้าของ Product ตัดสินใจก่อนส่งต่อ
