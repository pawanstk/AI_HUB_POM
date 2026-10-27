# PRD: Landing Page ของ AI Hub (PRD-ID: PRD-AIHUB-001)

- เวอร์ชัน: 1.0
- สถานะ: Draft
- Owner: ไม่ระบุ
- อัปเดตล่าสุด: 2026-10-19

## 1. Product Context

- **ฟีเจอร์/โปรดักต์นี้คืออะไร?**
  - Landing Page ของ **AI Hub** ซึ่งเป็นแพลตฟอร์มที่รวม AI Models และ AI Agents จากหลาย Provider ไว้ในที่เดียว ผู้ใช้เลือกโมเดล เปรียบเทียบราคา ทดลองใช้งาน และเชื่อมต่อ API ผ่านจุดเชื่อมต่อเดียว (ถอดเสียงเป็น "End Price" [ไม่แน่ใจ: อาจเป็น Endpoint])
  - แนวคิดคล้าย OpenRouter แต่เพิ่ม Marketplace สำหรับ AI Agents และ Workflow
- **ทำไมต้องทำตอนนี้?**
  - ลูกค้าส่วนใหญ่เข้าเว็บไซต์แล้วไม่เข้าใจว่า Product ทำอะไร และต้องคุยกับทีมขายก่อนจึงเริ่มใช้งานได้ ทำให้เสีย Conversion และเสียเวลา
  - ต้องการให้เว็บไซต์อธิบาย Product ได้เอง
  - หมายเหตุ: ไม่ได้ระบุกำหนดการเปิดตัวหรือเหตุการณ์ทางธุรกิจที่ทำให้ต้องทำ "ช่วงเวลานี้" เป็นพิเศษ (ดู OQ-022)

## 2. Problem Statement

**เรากำลังแก้ปัญหาอะไร / ใครมีปัญหา**

| ID | ปัญหา | ใครเจอปัญหา |
|---|---|---|
| P-001 | เข้าเว็บไซต์แล้วไม่เข้าใจว่า Product ทำอะไร | ลูกค้าส่วนใหญ่ |
| P-002 | ต้องคุยกับทีมขายก่อนจึงเริ่มใช้งานได้ ทำให้เสีย Conversion และเสียเวลา | ลูกค้า และทีม Sales |
| P-003 | ลูกค้าออกจากเว็บไซต์เร็ว ไม่เข้าใจ Value ของ Product และไม่เริ่มทดลองใช้ (ผลที่เกิดขึ้นหากไม่มี Landing Page) | ลูกค้า / ธุรกิจ |
| P-004 | ต้องสมัครหลายแพลตฟอร์ม | Developer, AI Engineer และกลุ่มรอง |
| P-005 | มี API หลายชุด | Developer, AI Engineer และกลุ่มรอง |
| P-006 | เปรียบเทียบโมเดลยาก | Developer, AI Engineer และกลุ่มรอง |
| P-007 | Documentation กระจัดกระจาย | Developer, AI Engineer และกลุ่มรอง |

## 3. Goals & Non-goals

**Goals**

*เป้าหมายทางธุรกิจ*
- เพิ่มจำนวนผู้สมัคร
- เพิ่มการใช้งาน API
- สร้างความน่าเชื่อถือของ Product
- ลดภาระทีม Sales

*เป้าหมายของผลิตภัณฑ์ / Outcomes*
- เว็บไซต์อธิบาย Product ได้เอง โดยไม่ต้องคุยกับทีมขายก่อน
- ผู้ใช้เข้าใจ Product ภายในไม่กี่วินาที
- ผู้ใช้ดูราคา เปรียบเทียบโมเดล และกดสมัครได้ทันที

*การวัดผล:* ตัวชี้วัดระบุไว้ในหัวข้อ 13 โดยไม่มีตัวเลขเป้าหมาย (ดู OQ-018)

**Non-goals** (ไม่ทำในเวอร์ชันแรก)
- Blog
- Community
- Dashboard (ตัวระบบเต็ม)
- Search แบบละเอียด
- User Login
- Live Playground

## 4. Target Users / Personas

- **Persona 1: Developer / AI Engineer (กลุ่มหลัก)**
  - ความต้องการหลัก: รวมการสมัครและ API ไว้ที่เดียว, เปรียบเทียบโมเดลได้ง่าย, เข้าถึง Documentation ที่รวมศูนย์
- **Persona 2: Startup Founder (กลุ่มรอง)**
  - ต้องการทดลอง AI; เข้าใจ Product และดูราคาได้เร็ว
- **Persona 3: Product Manager (กลุ่มรอง)**
  - ต้องการทดลอง AI; เข้าใจ Product และดูราคาได้เร็ว
- **Persona 4: UX Designer (กลุ่มรอง)**
  - ต้องการทดลอง AI; เข้าใจ Product และดูราคาได้เร็ว

หมายเหตุ: ความต้องการของกลุ่มรองมาจากคำตอบรวมเรื่อง Pain Point และความคาดหวังต่อเว็บไซต์ ไม่ได้แยกรายกลุ่มในการประชุม

## 5. Use Cases / Jobs To Be Done

- **UC-001:** ในฐานะผู้เข้าชมเว็บไซต์ ฉันต้องการเข้าใจว่า AI Hub คืออะไรภายในไม่กี่วินาที เพื่อให้ตัดสินใจได้ว่าจะใช้ต่อหรือไม่
- **UC-002:** ในฐานะผู้ใช้ (Developer/AI Engineer) ฉันต้องการดูรายการ AI Models และเปรียบเทียบโมเดล เพื่อให้เลือกโมเดลที่เหมาะสมได้ง่าย
- **UC-003:** ในฐานะผู้ใช้ ฉันต้องการดูราคา เพื่อให้ประเมินค่าใช้จ่ายก่อนตัดสินใจสมัคร
- **UC-004:** ในฐานะผู้ใช้ ฉันต้องการกดสมัครได้ทันทีจากหน้าเว็บ เพื่อให้เริ่มใช้งานได้โดยไม่ต้องผ่านทีมขาย
- **UC-005:** ในฐานะผู้ใช้ ฉันต้องการเข้าถึง Documentation ได้โดยไม่ต้องล็อกอิน เพื่อให้ศึกษาการเชื่อมต่อ API ได้ก่อนสมัคร
- **UC-006:** ในฐานะผู้ใช้ ฉันต้องการอ่าน FAQ เพื่อให้ได้คำตอบก่อนตัดสินใจสมัคร
- **UC-007:** ในฐานะผู้ใช้ ฉันต้องการเห็นตัวอย่าง AI Agents Marketplace และ Dashboard เพื่อให้เข้าใจขอบเขตของ Product

## 6. Assumptions / Constraints / Dependencies

**Assumptions**
- **A-001:** รหัสโปรเจกต์ที่ใช้ใน ID ทั้งหมดคือ `AIHUB` (เช่น PRD-AIHUB-001, FR-AIHUB-001) เนื่องจาก input ไม่ได้ระบุรหัสโปรเจกต์
- **A-002:** รหัส P-001 ถึง P-007 เป็น ID ที่กำหนดเพิ่มในเอกสารนี้ เพื่อใช้อ้างอิงปัญหาจากหัวข้อ 2 การจับคู่ FR กับ Problem เป็นการเชื่อมโยงของผู้จัดทำ PRD ไม่ได้ระบุไว้ตรง ๆ ในการประชุม
- **A-003:** ถือว่า Speaker 2 เป็นตัวแทนฝั่ง Product/ธุรกิจ และคำตอบของ Speaker 2 เป็นความต้องการของเจ้าของ Product
- **A-004:** ตีความคำที่ระบบถอดเสียงไม่แน่ใจ ดังนี้ (ทั้งหมดรอยืนยันใน Open Questions): "Site Up" = Sign Up, "สายอัพ" = หน้า Sign-up, "Lashboard" = Dashboard, "Features Models" = รายการ AI Models
- **A-005:** "Preview ของ Dashboard" และ "AI Agents Marketplace Preview" เป็นส่วนแสดงตัวอย่างบน Landing Page เท่านั้น ไม่ใช่การสร้างระบบ Dashboard หรือ Marketplace เต็มรูปแบบ
- **A-006:** ส่วน Documentation ในสโคปเวอร์ชันแรกหมายถึงทางเข้าถึงเอกสารจาก Landing Page ที่ไม่ต้องล็อกอิน ยังไม่รู้ว่าเนื้อหาอยู่บนหน้านี้หรือลิงก์ไปที่อื่น (ดู OQ-014)

**Constraints**
- ใช้ Next.js
- Deploy บน Vercel
- Responsive ทุก Device
- SEO Friendly
- Accessibility ระดับ AA
- โหลดหน้าแรกไม่เกิน 2 วินาที

**Dependencies**
- ระบบกลางสำหรับดึง Pricing (ไม่ระบุว่าคือระบบใด) และ Pricing API
- แหล่งข้อมูล AI Models สำหรับ Hero และรายการโมเดล รวมถึง Cache
- หน้า Sign-up ซึ่งเป็นปลายทางของ CTA (ไม่ระบุว่าอยู่ในสโคปงานนี้หรือไม่)

## 7. Functional Requirements

### FR-AIHUB-001: Hero Section

- **คำอธิบาย:** ระบบต้องแสดง Hero Section พร้อมข้อความหลัก และแสดง AI Models ล่าสุดใน Hero
- **Use cases ที่เกี่ยวข้อง:** [UC-001] | **Problems:** [P-001, P-003]
- **ผู้ใช้งานหลัก / actor หลัก:** ผู้เข้าชมเว็บไซต์
- **Triggers / inputs:** ผู้ใช้เปิดหน้า Landing Page; ข้อมูล AI Models ล่าสุด
- **ผลลัพธ์ที่คาดหวัง:** ผู้ใช้เห็นข้อความหลักและ AI Models ล่าสุดทันทีที่เข้าหน้าเว็บ

### FR-AIHUB-002: Feature Overview (Feature Cards)

- **คำอธิบาย:** ระบบต้องแสดง Feature Overview ในรูปแบบ Feature Cards
- **Use cases ที่เกี่ยวข้อง:** [UC-001] | **Problems:** [P-001]
- **ผู้ใช้งานหลัก / actor หลัก:** ผู้เข้าชมเว็บไซต์
- **Triggers / inputs:** ผู้ใช้เลื่อนดูหน้าเว็บ
- **ผลลัพธ์ที่คาดหวัง:** ผู้ใช้เข้าใจความสามารถของ Product จาก Feature Cards

### FR-AIHUB-003: รายการ AI Models

- **คำอธิบาย:** ระบบต้องแสดงรายการ AI Models โดยเรียงตาม Popularity
- **Use cases ที่เกี่ยวข้อง:** [UC-002] | **Problems:** [P-006]
- **ผู้ใช้งานหลัก / actor หลัก:** Developer / AI Engineer
- **Triggers / inputs:** ผู้ใช้เลื่อนถึงส่วน AI Models; ข้อมูลโมเดลและค่า Popularity
- **ผลลัพธ์ที่คาดหวัง:** ผู้ใช้เห็นโมเดลที่นิยมที่สุดก่อน และใช้เลือก/เปรียบเทียบโมเดลได้ (ขอบเขตของ "เปรียบเทียบ" ดู OQ-013)

### FR-AIHUB-004: AI Agents Marketplace Preview

- **คำอธิบาย:** ระบบต้องแสดงตัวอย่าง (Preview) ของ AI Agents Marketplace
- **Use cases ที่เกี่ยวข้อง:** [UC-007] | **Problems:** [P-001]
- **ผู้ใช้งานหลัก / actor หลัก:** ผู้เข้าชมเว็บไซต์
- **Triggers / inputs:** ผู้ใช้เลื่อนถึงส่วน Marketplace Preview
- **ผลลัพธ์ที่คาดหวัง:** ผู้ใช้รับรู้ว่า AI Hub มี Marketplace สำหรับ AI Agents (ช่วงเวลาเปิดตัวจริงยังไม่สรุป ดู OQ-004)

### FR-AIHUB-005: Pricing

- **คำอธิบาย:** ระบบต้องแสดง Pricing โดยดึงข้อมูลจากระบบกลาง
- **Use cases ที่เกี่ยวข้อง:** [UC-003] | **Problems:** [P-002, P-003]
- **ผู้ใช้งานหลัก / actor หลัก:** ผู้เข้าชมเว็บไซต์ / Developer
- **Triggers / inputs:** ผู้ใช้เลื่อนถึงส่วน Pricing; ข้อมูลราคาจากระบบกลางผ่าน Pricing API
- **ผลลัพธ์ที่คาดหวัง:** ผู้ใช้เห็นราคาที่ตรงกับระบบกลาง (รูปแบบ Pricing ยังไม่สรุป ดู OQ-003)

### FR-AIHUB-006: Dashboard Preview

- **คำอธิบาย:** ระบบต้องแสดง Preview ของ Dashboard บน Landing Page
- **Use cases ที่เกี่ยวข้อง:** [UC-007] | **Problems:** [P-001]
- **ผู้ใช้งานหลัก / actor หลัก:** ผู้เข้าชมเว็บไซต์
- **Triggers / inputs:** ผู้ใช้เลื่อนถึงส่วน Dashboard Preview
- **ผลลัพธ์ที่คาดหวัง:** ผู้ใช้เห็นตัวอย่างหน้าตาของ Dashboard (รูปแบบของ Preview ดู OQ-010)

### FR-AIHUB-007: FAQ

- **คำอธิบาย:** ระบบต้องแสดงส่วน FAQ
- **Use cases ที่เกี่ยวข้อง:** [UC-006] | **Problems:** [P-001, P-003]
- **ผู้ใช้งานหลัก / actor หลัก:** ผู้เข้าชมเว็บไซต์
- **Triggers / inputs:** ผู้ใช้เลื่อนถึงส่วน FAQ
- **ผลลัพธ์ที่คาดหวัง:** ผู้ใช้อ่านคำตอบก่อนตัดสินใจสมัครได้ (เนื้อหา FAQ ไม่ได้ระบุ ดู OQ-024)

### FR-AIHUB-008: Documentation (เข้าถึงได้โดยไม่ต้องล็อกอิน)

- **คำอธิบาย:** ระบบต้องมีส่วน Documentation ที่ผู้ใช้เปิดดูได้โดยไม่ต้องล็อกอิน
- **Use cases ที่เกี่ยวข้อง:** [UC-005] | **Problems:** [P-007]
- **ผู้ใช้งานหลัก / actor หลัก:** Developer / AI Engineer
- **Triggers / inputs:** ผู้ใช้เลื่อนถึงส่วน Documentation หรือกด View Documentation
- **ผลลัพธ์ที่คาดหวัง:** ผู้ใช้เข้าถึง Documentation ได้ทันทีโดยไม่ต้องมีบัญชี

### FR-AIHUB-009: Call to Action (CTA)

- **คำอธิบาย:** ระบบต้องแสดง CTA หลายตำแหน่งบนหน้า โดย CTA หลักคือ Get Started, Explore Models และ View Documentation และ CTA ทุกตัวต้องนำไปยังหน้า Sign-up
- **Use cases ที่เกี่ยวข้อง:** [UC-004] | **Problems:** [P-002, P-004]
- **ผู้ใช้งานหลัก / actor หลัก:** ผู้เข้าชมเว็บไซต์
- **Triggers / inputs:** ผู้ใช้กด CTA
- **ผลลัพธ์ที่คาดหวัง:** ผู้ใช้ไปถึงหน้า Sign-up ได้ทันทีโดยไม่ต้องผ่านทีมขาย (ข้อขัดแย้งกับ FR-AIHUB-008 ดู OQ-025)

### FR-AIHUB-010: Footer

- **คำอธิบาย:** ระบบต้องมี Footer
- **Use cases ที่เกี่ยวข้อง:** ไม่มี UC ที่ระบุโดยตรง | **Problems:** ไม่ระบุ
- **ผู้ใช้งานหลัก / actor หลัก:** ผู้เข้าชมเว็บไซต์
- **Triggers / inputs:** ผู้ใช้เลื่อนถึงท้ายหน้า
- **ผลลัพธ์ที่คาดหวัง:** หน้าเว็บมี Footer (เนื้อหาใน Footer ไม่ได้ระบุ ดู OQ-024)

### FR-AIHUB-011: Animation และ Interaction

- **คำอธิบาย:** ระบบต้องมี Scroll Animation, Card Hover, Number Counter, Gradient Background Animation และ Smooth Transition
- **Use cases ที่เกี่ยวข้อง:** ไม่มี UC ที่ระบุโดยตรง | **Problems:** ไม่ระบุ
- **ผู้ใช้งานหลัก / actor หลัก:** ผู้เข้าชมเว็บไซต์
- **Triggers / inputs:** การเลื่อนหน้า, การ Hover บน Card, การเข้าถึงส่วนที่มี Number Counter
- **ผลลัพธ์ที่คาดหวัง:** หน้าเว็บมีการตอบสนองและแอนิเมชันตามรายการข้างต้น (Number Counter แสดงตัวเลขอะไร ดู OQ-016)

### FR-AIHUB-012: Dark Mode เป็นค่า Default

- **คำอธิบาย:** ระบบต้องแสดงผล Landing Page ใน Dark Mode เป็นค่า Default
- **Use cases ที่เกี่ยวข้อง:** ไม่มี UC ที่ระบุโดยตรง | **Problems:** ไม่ระบุ
- **ผู้ใช้งานหลัก / actor หลัก:** ผู้เข้าชมเว็บไซต์
- **Triggers / inputs:** ผู้ใช้เปิดหน้าเว็บครั้งแรก
- **ผลลัพธ์ที่คาดหวัง:** หน้าเว็บแสดงเป็น Dark Mode โดยไม่ต้องตั้งค่า (ไม่ได้ระบุว่าต้องมีตัวสลับโหมด ดู OQ-026)

### FR-AIHUB-013: Fallback เมื่อข้อมูลหรือรูปภาพโหลดไม่ได้

- **คำอธิบาย:** เมื่อโหลด AI Models ไม่ได้ ระบบต้องใช้ข้อมูล Cache; เมื่อ Pricing API ล่ม ระบบต้องแสดง Default Pricing; เมื่อรูปไม่โหลด ระบบต้องใช้ Placeholder
- **Use cases ที่เกี่ยวข้อง:** [UC-002, UC-003] | **Problems:** [P-003]
- **ผู้ใช้งานหลัก / actor หลัก:** ผู้เข้าชมเว็บไซต์
- **Triggers / inputs:** การโหลด AI Models, Pricing API หรือรูปภาพล้มเหลว
- **ผลลัพธ์ที่คาดหวัง:** หน้าเว็บยังแสดงผลต่อได้โดยใช้ข้อมูลสำรองที่กำหนด

### FR-AIHUB-014: Fallback เมื่อเบราว์เซอร์ไม่รองรับ Animation

- **คำอธิบาย:** เมื่อเบราว์เซอร์ไม่รองรับ Animation ระบบต้องแสดงเนื้อหาแบบ Static
- **Use cases ที่เกี่ยวข้อง:** ไม่มี UC ที่ระบุโดยตรง | **Problems:** ไม่ระบุ
- **ผู้ใช้งานหลัก / actor หลัก:** ผู้เข้าชมเว็บไซต์
- **Triggers / inputs:** เบราว์เซอร์ไม่รองรับ Animation
- **ผลลัพธ์ที่คาดหวัง:** ผู้ใช้เห็นเนื้อหาครบถ้วนในรูปแบบ Static

## 8. Non-functional Requirements

- **Performance:** โหลดหน้าแรกไม่เกิน 2 วินาที (เงื่อนไขการวัดไม่ได้ระบุ ดู OQ-019)
- **Reliability:** มี Fallback เมื่อ AI Models, Pricing API หรือรูปภาพโหลดไม่ได้ (FR-AIHUB-013) และเมื่อเบราว์เซอร์ไม่รองรับ Animation (FR-AIHUB-014)
- **Security / privacy:** ไม่ได้มีการพูดถึง
- **UX / accessibility:**
  - Responsive ทุก Device
  - รองรับ Accessibility ระดับ AA (ไม่ได้ระบุมาตรฐานที่ใช้ ดู OQ-020)
  - SEO Friendly

## 9. Business Rules

- **BR-AIHUB-001:** Pricing ต้องดึงจากระบบกลาง
- **BR-AIHUB-002:** Documentation ต้องเปิดได้โดยไม่ต้องล็อกอิน
- **BR-AIHUB-003:** CTA ทุกตัวต้องไปหน้า Sign-up
- **BR-AIHUB-004:** Hero ต้องแสดง AI Models ล่าสุด
- **BR-AIHUB-005:** รายการ AI Models ต้องจัดเรียงตาม Popularity
- **BR-AIHUB-006:** Dark Mode เป็นค่า Default

## 10. User Flows (High-level)

- **FLOW-AIHUB-001: User Journey หลัก (จากการเข้าเว็บไซต์ถึงการสมัคร)**
  1. ผู้ใช้เข้าเว็บไซต์
  2. อ่าน Hero
  3. เลื่อนดู Features
  4. ดู AI Models
  5. ดู Pricing
  6. อ่าน FAQ
  7. กด Get Started
  8. ไปหน้า Sign-up

## 11. Edge Cases & Error Scenarios

| สถานการณ์ | พฤติกรรมที่ต้องการ | FR ที่เกี่ยวข้อง |
|---|---|---|
| โหลด AI Models ไม่ได้ | ใช้ข้อมูล Cache | FR-AIHUB-013 |
| Pricing API ล่ม | แสดง Default Pricing | FR-AIHUB-013 |
| รูปภาพไม่โหลด | ใช้ Placeholder | FR-AIHUB-013 |
| เบราว์เซอร์ไม่รองรับ Animation | แสดงแบบ Static | FR-AIHUB-014 |

## 12. Out-of-scope

เวอร์ชันแรกไม่รวม
- Blog
- Community
- Dashboard (ตัวระบบเต็ม) — Preview ของ Dashboard อยู่ในสโคป (FR-AIHUB-006)
- Search แบบละเอียด
- User Login
- Live Playground

## 13. Success Metrics

| ตัวชี้วัด | เป้าหมาย |
|---|---|
| Conversion Rate สูงขึ้น | ไม่ระบุ |
| จำนวน Sign Up เพิ่มขึ้น | ไม่ระบุ |
| CTA ถูกกดมากขึ้น | ไม่ระบุ |
| ผู้ใช้ใช้เวลาอยู่ในเว็บไซต์นานขึ้น | ไม่ระบุ |

ไม่ได้ระบุค่า Baseline, ตัวเลขเป้าหมาย หรือช่วงเวลาวัดผล (ดู OQ-018)

## 14. Acceptance Criteria (แยกตาม FR)

หมายเหตุ: เกณฑ์ทั้งหมดเป็นข้อเสนอของผู้จัดทำ PRD [DRAFT] ที่เขียนจากพฤติกรรมที่ระบุใน input รายละเอียดที่ input ไม่ได้ระบุไว้ชัดเจนจะมีเครื่องหมาย [DRAFT] กำกับ

### AC-AIHUB-001 (สำหรับ FR-AIHUB-001)

GIVEN ผู้ใช้เปิดหน้า Landing Page
WHEN หน้าโหลดเสร็จ
THEN ระบบแสดง Hero Section พร้อมข้อความหลัก

### AC-AIHUB-002 (สำหรับ FR-AIHUB-001)

GIVEN ระบบมีข้อมูล AI Models
WHEN Hero Section แสดงผล
THEN Hero แสดง AI Models ล่าสุด [DRAFT: นิยาม "ล่าสุด" ยังไม่ชัดเจน ดู OQ-017]

### AC-AIHUB-003 (สำหรับ FR-AIHUB-002)

GIVEN ผู้ใช้เลื่อนหน้าเว็บ
WHEN ถึงส่วน Feature Overview
THEN ระบบแสดงฟีเจอร์ในรูปแบบ Feature Cards

### AC-AIHUB-004 (สำหรับ FR-AIHUB-003)

GIVEN ระบบมีข้อมูลรายการ AI Models และค่า Popularity
WHEN ผู้ใช้เลื่อนถึงส่วน AI Models
THEN ระบบแสดงรายการโมเดลโดยเรียงจาก Popularity

### AC-AIHUB-005 (สำหรับ FR-AIHUB-003)

GIVEN ผู้ใช้อยู่ในส่วน AI Models
WHEN ผู้ใช้ต้องการเลือกหรือเปรียบเทียบโมเดล
THEN ผู้ใช้เห็นข้อมูลโมเดลเพียงพอสำหรับเลือก [DRAFT: ข้อมูลที่ต้องแสดงต่อโมเดล และรูปแบบการเปรียบเทียบไม่ได้ระบุ ดู OQ-013]

### AC-AIHUB-006 (สำหรับ FR-AIHUB-004)

GIVEN ผู้ใช้เลื่อนหน้าเว็บ
WHEN ถึงส่วน AI Agents Marketplace Preview
THEN ระบบแสดงตัวอย่างของ AI Agents Marketplace [DRAFT: รูปแบบและเนื้อหา Preview ไม่ได้ระบุ]

### AC-AIHUB-007 (สำหรับ FR-AIHUB-005)

GIVEN Pricing API ทำงานปกติ
WHEN ผู้ใช้เลื่อนถึงส่วน Pricing
THEN ระบบแสดงราคาที่ดึงจากระบบกลาง

### AC-AIHUB-008 (สำหรับ FR-AIHUB-005)

GIVEN ผู้ใช้เปิดหน้า Landing Page
WHEN ผู้ใช้ดูส่วน Pricing
THEN ส่วน Pricing แสดงตามรูปแบบที่ตกลงกัน [DRAFT: รูปแบบ Pricing ยังไม่สรุป ดู OQ-003]

### AC-AIHUB-009 (สำหรับ FR-AIHUB-006)

GIVEN ผู้ใช้เลื่อนหน้าเว็บ
WHEN ถึงส่วน Dashboard Preview
THEN ระบบแสดง Preview ของ Dashboard [DRAFT: รูปแบบของ Preview ไม่ได้ระบุ ดู OQ-010]

### AC-AIHUB-010 (สำหรับ FR-AIHUB-007)

GIVEN ผู้ใช้เลื่อนหน้าเว็บ
WHEN ถึงส่วน FAQ
THEN ระบบแสดงคำถามและคำตอบที่พบบ่อย [DRAFT: เนื้อหาและรูปแบบการแสดงผลไม่ได้ระบุ]

### AC-AIHUB-011 (สำหรับ FR-AIHUB-008)

GIVEN ผู้ใช้ยังไม่ได้ล็อกอิน
WHEN ผู้ใช้เปิด Documentation
THEN ระบบแสดง Documentation ได้โดยไม่บังคับให้ล็อกอิน

### AC-AIHUB-012 (สำหรับ FR-AIHUB-008)

GIVEN ผู้ใช้อยู่บน Landing Page
WHEN ผู้ใช้กด View Documentation หรือเลือกส่วน Documentation
THEN ผู้ใช้ไปถึง Documentation [DRAFT: ปลายทางของ View Documentation ขัดกับ BR-AIHUB-003 ดู OQ-025]

### AC-AIHUB-013 (สำหรับ FR-AIHUB-009)

GIVEN ผู้ใช้อยู่บน Landing Page
WHEN ผู้ใช้เลื่อนดูทั้งหน้า
THEN ระบบแสดง CTA หลายตำแหน่ง รวมถึง Get Started, Explore Models และ View Documentation [DRAFT: ตำแหน่งที่แน่นอนของ CTA ไม่ได้ระบุ]

### AC-AIHUB-014 (สำหรับ FR-AIHUB-009)

GIVEN ผู้ใช้อยู่บน Landing Page
WHEN ผู้ใช้กด CTA ใด ๆ
THEN ระบบนำผู้ใช้ไปยังหน้า Sign-up

### AC-AIHUB-015 (สำหรับ FR-AIHUB-009)

GIVEN ผู้ใช้อ่านเนื้อหาครบตาม FLOW-AIHUB-001
WHEN ผู้ใช้กด Get Started
THEN ผู้ใช้ไปถึงหน้า Sign-up โดยไม่ต้องคุยกับทีมขายก่อน

### AC-AIHUB-016 (สำหรับ FR-AIHUB-010)

GIVEN ผู้ใช้เลื่อนถึงท้ายหน้า
WHEN หน้าแสดงส่วนท้าย
THEN ระบบแสดง Footer [DRAFT: เนื้อหาใน Footer ไม่ได้ระบุ]

### AC-AIHUB-017 (สำหรับ FR-AIHUB-011)

GIVEN เบราว์เซอร์ของผู้ใช้รองรับ Animation
WHEN ผู้ใช้เลื่อนหน้า, Hover บน Card หรือเข้าถึงส่วนที่มี Number Counter
THEN ระบบแสดง Scroll Animation, Card Hover, Number Counter, Gradient Background Animation และ Smooth Transition [DRAFT: รายละเอียดแต่ละ Animation ไม่ได้ระบุ]

### AC-AIHUB-018 (สำหรับ FR-AIHUB-012)

GIVEN ผู้ใช้เปิดหน้า Landing Page ครั้งแรก
WHEN หน้าแสดงผล
THEN ระบบแสดงผลใน Dark Mode

### AC-AIHUB-019 (สำหรับ FR-AIHUB-013)

GIVEN ระบบโหลด AI Models ไม่ได้
WHEN หน้าแสดงส่วนที่ใช้ AI Models
THEN ระบบใช้ข้อมูล Cache แทน [DRAFT: อายุของ Cache ไม่ได้ระบุ ดู OQ-021]

### AC-AIHUB-020 (สำหรับ FR-AIHUB-013)

GIVEN Pricing API ล่ม
WHEN ผู้ใช้ดูส่วน Pricing
THEN ระบบแสดง Default Pricing [DRAFT: เนื้อหา Default Pricing ไม่ได้ระบุ ดู OQ-021]

### AC-AIHUB-021 (สำหรับ FR-AIHUB-013)

GIVEN รูปภาพโหลดไม่สำเร็จ
WHEN หน้าแสดงตำแหน่งของรูปนั้น
THEN ระบบแสดง Placeholder แทน

### AC-AIHUB-022 (สำหรับ FR-AIHUB-014)

GIVEN เบราว์เซอร์ไม่รองรับ Animation
WHEN ผู้ใช้เปิดหน้า Landing Page
THEN ระบบแสดงเนื้อหาแบบ Static

## 15. Open Questions

**ประเด็นที่ที่ประชุมระบุว่ายังไม่ตัดสินใจ**
- **OQ-001:** Hero จะใช้ Video หรือ Illustration (FR-AIHUB-001)
- **OQ-002:** จะมี AI Chat Assistant บนหน้าเว็บหรือไม่ (ปัจจุบันไม่อยู่ในรายการสโคป)
- **OQ-003:** รูปแบบ Pricing (FR-AIHUB-005)
- **OQ-004:** จะเปิด AI Agents Marketplace ตั้งแต่เวอร์ชันแรกหรือเวอร์ชันถัดไป (สโคปเวอร์ชันแรกมีเฉพาะ Preview; FR-AIHUB-004)

**คำถอดเสียงที่ไม่แน่ใจ (ต้องยืนยัน)**
- **OQ-005:** "End Price" ที่เชื่อมต่อ API: อาจเป็น Endpoint
- **OQ-006:** "Site Up": อาจเป็น Sign Up (Success Metrics)
- **OQ-007:** "สายอัพ": อาจเป็นหน้า Sign-up (BR-AIHUB-003)
- **OQ-008:** "Features Models" ในกฎการเรียงตาม Popularity: หมายถึงรายการ AI Models หรืออย่างอื่น (BR-AIHUB-005)
- **OQ-009:** "Lashboard": อาจเป็น Dashboard (Out-of-scope)

**ข้อมูลที่ไม่ครบหรือไม่ชัดเจน**
- **OQ-010:** Dashboard อยู่ใน Out-of-scope แต่ต้องมี Preview: Preview เป็นภาพนิ่ง, Mockup หรืออื่น ๆ (FR-AIHUB-006)
- **OQ-011:** "ระบบกลาง" ที่ให้ดึง Pricing คือระบบอะไร, ใครเป็นเจ้าของ, API รูปแบบใด (FR-AIHUB-005)
- **OQ-012:** หน้า Sign-up อยู่ในสโคปงานนี้หรือเป็นระบบที่มีอยู่แล้ว (เนื่องจาก User Login อยู่นอกสโคป)
- **OQ-013:** ผู้ใช้คาดหวัง "เปรียบเทียบโมเดล" แต่สโคปไม่ระบุฟีเจอร์เปรียบเทียบโดยตรง ต้องยืนยันว่าเป็นส่วนใดของหน้า (FR-AIHUB-003)
- **OQ-014:** Documentation เป็นส่วนบน Landing Page หรือลิงก์ไปเว็บ Documentation แยก (FR-AIHUB-008)
- **OQ-015:** ข้อความหลักของ Hero (Headline/Sub-headline) (FR-AIHUB-001)
- **OQ-016:** Number Counter แสดงตัวเลขอะไร (FR-AIHUB-011)
- **OQ-017:** เกณฑ์ "Popularity" และนิยามของ "AI Models ล่าสุด" (ที่มาของข้อมูล, ช่วงเวลา) (FR-AIHUB-001, FR-AIHUB-003)
- **OQ-018:** ตัวเลขเป้าหมาย, Baseline และช่วงเวลาวัดผลของ Conversion Rate, Sign Up, CTA Click และ Time on Site
- **OQ-019:** เงื่อนไขการวัด "โหลดหน้าแรกไม่เกิน 2 วินาที" (อุปกรณ์, เครือข่าย, ตัวชี้วัด)
- **OQ-020:** มาตรฐาน Accessibility "ระดับ AA" อิงมาตรฐานใด
- **OQ-021:** อายุของ Cache และเนื้อหาของ Default Pricing (FR-AIHUB-013)
- **OQ-022:** กำหนดการเปิดตัว, Owner/ผู้รับผิดชอบ และงบประมาณ
- **OQ-023:** ชื่อและตำแหน่งของผู้เข้าร่วมประชุม

**ประเด็นเพิ่มเติมที่พบระหว่างจัดทำ PRD**
- **OQ-024:** เนื้อหาของ FAQ และ Footer ไม่ได้ระบุ (FR-AIHUB-007, FR-AIHUB-010)
- **OQ-025:** BR-AIHUB-003 ระบุว่า CTA ทุกตัวต้องไปหน้า Sign-up แต่ View Documentation และ Explore Models เป็น CTA หลักเช่นกัน ขณะที่ Documentation ต้องเปิดได้โดยไม่ต้องล็อกอิน (BR-AIHUB-002) ต้องยืนยันปลายทางของ CTA แต่ละตัว (FR-AIHUB-008, FR-AIHUB-009)
- **OQ-026:** Dark Mode เป็นค่า Default: ต้องมีตัวสลับเป็น Light Mode หรือไม่ ไม่ได้ระบุ (FR-AIHUB-012)

## 16. Changelog

- v1.0 - ดราฟต์แรกจาก discovery meeting
