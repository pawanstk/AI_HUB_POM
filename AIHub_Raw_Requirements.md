# Raw Requirements: Landing Page ของ AI Hub

> แหล่งข้อมูล: `AIHub_Transcript.md` (ส่วน Transcript ที่ผู้ใช้อนุมัติแล้ว) จากไฟล์เสียง `Req_AIHub (1).wav`

## 0. บริบทการประชุม

- **วันที่:** ไม่ระบุ
- **ผู้เข้าร่วม** (role ที่อนุมานจากบทสนทนา ไม่ได้ระบุไว้ตรง ๆ):
  - ผู้เก็บ Requirements (Speaker 1): ผู้ถามคำถามเป็นหัวข้อ และแจ้งว่าจะนำข้อมูลไปจัดทำ PRD, Epic, User Stories, UX Flow, Wireframe และ High Fidelity Design
  - ตัวแทนฝั่ง Product/ธุรกิจ (Speaker 2): ผู้ตอบคำถามเกี่ยวกับ AI Hub
- **วัตถุประสงค์หลัก:** เก็บ Requirements สำหรับสร้าง Landing Page ของ AI Hub เพื่อนำไปจัดทำ PRD, UX Flow, UI Design และส่งต่อทีมพัฒนา

## 1. ปัญหา

| Pain Point | ใครเจอปัญหา |
|---|---|
| เข้าเว็บไซต์แล้วไม่เข้าใจว่า Product ทำอะไร | ลูกค้าส่วนใหญ่ |
| ต้องคุยกับทีมขายก่อนจึงเริ่มใช้งานได้ ทำให้เสีย Conversion และเสียเวลา | ลูกค้า (ผู้พูดไม่ได้ระบุผู้ได้รับผลกระทบอื่นตรง ๆ แต่ระบุเป้าหมาย "ลดภาระทีม Sales" ดูหัวข้อ 2) |
| ลูกค้าออกจากเว็บไซต์เร็ว ไม่เข้าใจ Value ของ Product และไม่เริ่มทดลองใช้ (ผลที่เกิดขึ้นหากไม่มี Landing Page) | ลูกค้า |
| ต้องสมัครหลายแพลตฟอร์ม | กลุ่มผู้ใช้ (Developer, AI Engineer และกลุ่มรอง) [AMBIGUOUS: ผู้พูดตอบรวมเป็น Pain Point ของ "กลุ่มนี้" ไม่ได้แยกรายกลุ่ม] |
| มี API หลายชุด | เช่นเดียวกับข้างบน |
| เปรียบเทียบโมเดลยาก | เช่นเดียวกับข้างบน |
| Documentation กระจัดกระจาย | เช่นเดียวกับข้างบน |

## 2. เป้าหมาย

**เป้าหมายทางธุรกิจ**
- เพิ่มจำนวนผู้สมัคร
- เพิ่มการใช้งาน API
- สร้างความน่าเชื่อถือของ Product
- ลดภาระทีม Sales

**เป้าหมายของผลิตภัณฑ์ / Outcomes**
- ให้เว็บไซต์อธิบาย Product ได้เอง
- ผู้ใช้เข้าใจ Product ภายในไม่กี่วินาที
- ผู้ใช้ดูราคา เปรียบเทียบโมเดล และกดสมัครได้ทันที

**ตัวชี้วัดความสำเร็จ** (ผู้พูดไม่ได้ระบุตัวเลขเป้าหมาย)
- Conversion Rate สูงขึ้น
- จำนวน Sign Up เพิ่มขึ้น [AMBIGUOUS: ระบบได้ยิน "Site Up"]
- CTA ถูกกดมากขึ้น
- ผู้ใช้ใช้เวลาอยู่ในเว็บไซต์นานขึ้น

## 3. ผู้ใช้ / Personas

| กลุ่ม | ระดับ | ความต้องการสำคัญ (ตามที่ผู้พูดกล่าว) |
|---|---|---|
| Developer / AI Engineer | หลัก | ไม่ต้องสมัครหลายแพลตฟอร์ม/ถือ API หลายชุด; เปรียบเทียบโมเดลได้ง่าย; Documentation รวมศูนย์ |
| Startup Founder | รอง | อยากทดลอง AI; เข้าใจ Product และดูราคาได้เร็ว |
| Product Manager | รอง | อยากทดลอง AI; เข้าใจ Product และดูราคาได้เร็ว |
| UX Designer | รอง | อยากทดลอง AI; เข้าใจ Product และดูราคาได้เร็ว |

หมายเหตุ: ความต้องการด้านบนมาจากคำตอบเรื่อง Pain Point และความคาดหวังต่อเว็บไซต์ซึ่งตอบรวมทุกกลุ่ม ไม่ได้แยกรายกลุ่ม [AMBIGUOUS]

## 4. Use Cases / Jobs To Be Done

- **UC-001:** ในฐานะผู้เข้าชมเว็บไซต์ ฉันต้องการเข้าใจว่า AI Hub คืออะไรภายในไม่กี่วินาที เพื่อให้ตัดสินใจได้ว่าจะใช้ต่อหรือไม่
- **UC-002:** ในฐานะผู้ใช้ (Developer/AI Engineer) ฉันต้องการดูรายการ AI Models และเปรียบเทียบโมเดล เพื่อให้เลือกโมเดลที่เหมาะสมได้ง่าย
- **UC-003:** ในฐานะผู้ใช้ ฉันต้องการดูราคา เพื่อให้ประเมินค่าใช้จ่ายก่อนตัดสินใจสมัคร
- **UC-004:** ในฐานะผู้ใช้ ฉันต้องการกดสมัครได้ทันทีจากหน้าเว็บ เพื่อให้เริ่มใช้งานได้โดยไม่ต้องผ่านทีมขาย
- **UC-005:** ในฐานะผู้ใช้ ฉันต้องการเข้าถึง Documentation ได้โดยไม่ต้องล็อกอิน เพื่อให้ศึกษาการเชื่อมต่อ API ได้ก่อนสมัคร
- **UC-006:** ในฐานะผู้ใช้ ฉันต้องการอ่าน FAQ เพื่อให้ได้คำตอบก่อนตัดสินใจสมัคร
- **UC-007:** ในฐานะผู้ใช้ ฉันต้องการเห็นตัวอย่าง AI Agents Marketplace และ Dashboard เพื่อให้เข้าใจขอบเขตของ Product

หมายเหตุ: UC-005 ถึง UC-007 สรุปจากสโคปและ Functional Requirements ที่ผู้พูดกล่าว ผู้พูดไม่ได้เล่าเป็นรูปแบบ "ในฐานะ... ฉันต้องการ... เพื่อให้..." เอง

**User Journey หลักที่กล่าวถึง:** เข้าเว็บไซต์ → อ่าน Hero → เลื่อนดู Features → ดู AI Models → ดู Pricing → อ่าน FAQ → กด Get Started → ไปหน้า Sign-up [AMBIGUOUS: ระบบได้ยิน "สายอัพ"]

## 5. Functional Requirements (Raw)

- **FR-R-001:** ระบบต้องแสดง Hero Section พร้อมข้อความหลัก
- **FR-R-002:** ระบบต้องแสดง AI Models ล่าสุดใน Hero
- **FR-R-003:** ระบบต้องแสดงรายการ AI Models โดยเรียงตาม Popularity [AMBIGUOUS: ระบบได้ยิน "Features Models"]
- **FR-R-004:** ระบบต้องแสดง Feature Overview ในรูปแบบ Feature Cards
- **FR-R-005:** ระบบต้องแสดง AI Agents Marketplace Preview
- **FR-R-006:** ระบบต้องแสดง Pricing โดยดึงข้อมูลจากระบบกลาง [AMBIGUOUS: รูปแบบ Pricing ยังไม่สรุป]
- **FR-R-007:** ระบบต้องแสดง Preview ของ Dashboard
- **FR-R-008:** ระบบต้องแสดง FAQ
- **FR-R-009:** ระบบต้องมีส่วน Documentation ที่เปิดได้โดยไม่ต้องล็อกอิน
- **FR-R-010:** ระบบต้องแสดง CTA หลายตำแหน่ง โดย CTA หลักคือ Get Started, Explore Models และ View Documentation
- **FR-R-011:** CTA ทุกตัวต้องนำไปยังหน้า Sign-up [AMBIGUOUS: ดู OQ-025]
- **FR-R-012:** ระบบต้องมี Footer
- **FR-R-013:** ระบบต้องมี Scroll Animation
- **FR-R-014:** ระบบต้องมี Card Hover
- **FR-R-015:** ระบบต้องมี Number Counter
- **FR-R-016:** ระบบต้องมี Gradient Background Animation
- **FR-R-017:** ระบบต้องมี Smooth Transition
- **FR-R-018:** ระบบต้องแสดงผลแบบ Dark Mode เป็นค่า Default
- **FR-R-019:** เมื่อโหลด AI Models ไม่ได้ ระบบต้องใช้ข้อมูล Cache
- **FR-R-020:** เมื่อ Pricing API ล่ม ระบบต้องแสดง Default Pricing
- **FR-R-021:** เมื่อรูปไม่โหลด ระบบต้องใช้ Placeholder
- **FR-R-022:** เมื่อเบราว์เซอร์ไม่รองรับ Animation ระบบต้องแสดงแบบ Static

## 6. Non-functional Requirements (Raw)

- **Performance:** โหลดหน้าแรกไม่เกิน 2 วินาที
- **Responsive:** รองรับทุก Device
- **SEO:** ต้อง SEO Friendly
- **Accessibility:** รองรับระดับ AA
- **Reliability / Graceful Degradation:** มี Fallback เมื่อ AI Models, Pricing API หรือรูปภาพโหลดไม่ได้ และเมื่อเบราว์เซอร์ไม่รองรับ Animation (ดู FR-R-019 ถึง FR-R-022)
- **Security:** ไม่ได้มีการพูดถึง
- **คุณภาพ UX อื่น ๆ:** นอกจากที่ระบุข้างต้น ไม่ได้มีการพูดถึง

## 7. Constraints / Dependencies / Risks

**Constraints**
- ใช้ Next.js
- Deploy บน Vercel
- Responsive ทุก Device
- SEO Friendly
- Accessibility ระดับ AA
- โหลดหน้าแรกไม่เกิน 2 วินาที

**Dependencies**
- ระบบกลางสำหรับดึง Pricing [AMBIGUOUS: ไม่ระบุว่าคือระบบใด]
- Pricing API
- แหล่งข้อมูล AI Models สำหรับ Hero และรายการโมเดล รวมถึง Cache
- หน้า Sign-up ซึ่งเป็นปลายทางของ CTA [AMBIGUOUS: ไม่ระบุว่าอยู่ในสโคปงานนี้หรือไม่]

**Risks**
- ไม่ได้มีการพูดถึงความเสี่ยงในที่ประชุม

## 8. Business Rules (Raw)

- **BR-R-001:** Pricing ต้องดึงจากระบบกลาง
- **BR-R-002:** Documentation ต้องเปิดได้โดยไม่ต้องล็อกอิน
- **BR-R-003:** CTA ทุกตัวต้องไปหน้า Sign-up [AMBIGUOUS: ดู OQ-025]
- **BR-R-004:** Hero ต้องแสดง AI Models ล่าสุด
- **BR-R-005:** รายการ AI Models ต้องจัดเรียงตาม Popularity [AMBIGUOUS: ระบบได้ยิน "Features Models"]
- **BR-R-006:** Dark Mode เป็นค่า Default

## 9. Edge Cases / Special Scenarios

| สถานการณ์ | พฤติกรรมที่ต้องการ |
|---|---|
| โหลด AI Models ไม่ได้ | ใช้ข้อมูล Cache |
| Pricing API ล่ม | แสดง Default Pricing |
| รูปภาพไม่โหลด | ใช้ Placeholder |
| เบราว์เซอร์ไม่รองรับ Animation | แสดงแบบ Static |

## 10. Out-of-scope

เวอร์ชันแรกไม่รวม
- Blog
- Community
- Dashboard [AMBIGUOUS: ระบบได้ยิน "Lashboard"; ดู OQ-010 เรื่อง Preview ของ Dashboard ที่อยู่ในสโคป]
- Search แบบละเอียด
- User Login
- Live Playground

## 11. Open Questions / Ambiguities

**ประเด็นที่ที่ประชุมระบุเองว่ายังไม่ตัดสินใจ**
1. Hero จะใช้ Video หรือ Illustration
2. จะมี AI Chat Assistant บนหน้าเว็บหรือไม่
3. รูปแบบ Pricing
4. จะเปิด AI Agents Marketplace ตั้งแต่เวอร์ชันแรกหรือเวอร์ชันถัดไป (สโคปเวอร์ชันแรกมีเฉพาะ Marketplace Preview)

**[AMBIGUOUS] จากคำถอดเสียงที่ไม่แน่ใจ**
5. "End Price" ที่เชื่อมต่อ API: อาจเป็น Endpoint ต้องยืนยัน
6. "Site Up": อาจเป็น Sign Up ต้องยืนยัน
7. "สายอัพ" (2 จุด): อาจเป็นหน้า Sign-up ต้องยืนยัน
8. "Features Models" ในกฎการเรียงตาม Popularity: หมายถึงรายการ AI Models หรืออย่างอื่น
9. "Lashboard": อาจเป็น Dashboard ต้องยืนยัน

**[AMBIGUOUS] ข้อมูลที่ไม่ครบหรือขัดกัน**
10. Dashboard อยู่ใน Out-of-scope แต่ต้องแสดง Preview ของ Dashboard: ขอบเขตของ Preview (ภาพนิ่ง, Mockup หรืออื่น ๆ) ไม่ชัดเจน
11. "ระบบกลาง" ที่ให้ดึง Pricing คือระบบอะไร ใครเป็นเจ้าของ API รูปแบบใด
12. หน้า Sign-up อยู่ในสโคปงานนี้หรือเป็นระบบที่มีอยู่แล้ว (User Login อยู่นอกสโคป)
13. ผู้ใช้คาดหวัง "เปรียบเทียบโมเดล" แต่สโคปไม่ระบุฟีเจอร์เปรียบเทียบโดยตรง ต้องยืนยันว่าเป็นส่วนใดของหน้า (เช่น รายการ AI Models หรือ Pricing)
14. Documentation เป็นส่วนบน Landing Page หรือลิงก์ไปเว็บ Documentation แยก
15. ข้อความหลักของ Hero (Headline/Sub-headline) ไม่ได้ระบุ
16. Number Counter แสดงตัวเลขอะไร
17. เกณฑ์ "Popularity" และนิยามของ "AI Models ล่าสุด" (ที่มาของข้อมูล, ช่วงเวลา)
18. ตัวเลขเป้าหมายของ Conversion Rate, Sign Up, CTA Click และ Time on Site: ไม่ระบุ
19. เงื่อนไขการวัด "โหลดหน้าแรกไม่เกิน 2 วินาที" (อุปกรณ์, เครือข่าย, ตัวชี้วัด)
20. มาตรฐาน Accessibility "ระดับ AA" อิงมาตรฐานใด
21. อายุของ Cache และเนื้อหาของ Default Pricing
22. กำหนดการเปิดตัว, ผู้รับผิดชอบ และงบประมาณ: ไม่ระบุ ผู้พูดไม่ได้อธิบายว่าเหตุใดจึงต้องทำ "ช่วงเวลานี้" นอกจากปัญหาปัจจุบันของลูกค้า
23. ชื่อและตำแหน่งของผู้เข้าร่วมประชุม: ไม่ระบุ
24. เนื้อหาของ FAQ และ Footer ไม่ได้ระบุ
25. กฎ "CTA ทุกตัวต้องไปหน้า Sign-up" ขัดกับการที่ View Documentation และ Explore Models เป็น CTA หลัก ขณะที่ Documentation ต้องเปิดได้โดยไม่ต้องล็อกอิน ต้องยืนยันปลายทางของ CTA แต่ละตัว
26. Dark Mode เป็นค่า Default: ไม่ได้ระบุว่าต้องมีตัวสลับเป็น Light Mode หรือไม่
