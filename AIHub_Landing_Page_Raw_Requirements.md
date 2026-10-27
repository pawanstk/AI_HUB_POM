# Raw Requirements: Landing Page ของ AI Hub

## 0. บริบทการประชุม

- **วันที่:** ไม่ระบุ
- **ผู้เข้าร่วม:**
  - ผู้เก็บ Requirements (Speaker 1): เป็นผู้ถามและเป็นผู้จัดทำ PRD กับเอกสารต่อเนื่อง
  - ตัวแทนฝั่ง Product/ธุรกิจ (Speaker 2): เป็นผู้ตอบ ไม่มีการระบุตำแหน่งหรือชื่อไว้โดยตรง สรุปจากเนื้อหาที่ตอบ
- **วัตถุประสงค์หลัก:** เก็บ Requirements สำหรับสร้าง Landing Page ของ AI Hub เพื่อนำไปจัดทำ PRD, UX Flow, UI Design และส่งต่อทีมพัฒนา

## 1. ปัญหา

| Pain Point | ใครเจอปัญหา |
|---|---|
| เข้าเว็บไซต์แล้วไม่เข้าใจว่า Product ทำอะไร | ลูกค้าส่วนใหญ่ |
| ต้องคุยกับทีมขายก่อนจึงเริ่มใช้งานได้ ทำให้เสีย Conversion และเสียเวลา | ลูกค้า และทีม Sales |
| ลูกค้าออกจากเว็บไซต์เร็ว ไม่เข้าใจ Value และไม่เริ่มทดลองใช้ (ผลที่คาดว่าจะเกิดหากไม่มี Landing Page) | ลูกค้า / ธุรกิจ |
| ต้องสมัครหลายแพลตฟอร์ม | Developer, AI Engineer และกลุ่มรอง |
| มี API หลายชุด | Developer, AI Engineer และกลุ่มรอง |
| เปรียบเทียบโมเดลยาก | Developer, AI Engineer และกลุ่มรอง |
| Documentation กระจัดกระจาย | Developer, AI Engineer และกลุ่มรอง |

## 2. เป้าหมาย

**เป้าหมายทางธุรกิจ**
- เพิ่มจำนวนผู้สมัคร
- เพิ่มการใช้งาน API
- สร้างความน่าเชื่อถือของ Product
- ลดภาระทีม Sales

**เป้าหมายของผลิตภัณฑ์ / Outcomes**
- ให้เว็บไซต์อธิบาย Product ได้เอง โดยไม่ต้องคุยกับทีมขายก่อน
- ผู้ใช้เข้าใจ Product ภายในไม่กี่วินาที
- ผู้ใช้ดูราคา เปรียบเทียบโมเดล และกดสมัครได้ทันที

**ตัวชี้วัดความสำเร็จ (ไม่มีตัวเลขเป้าหมาย)**
- Conversion Rate สูงขึ้น
- จำนวน Sign Up เพิ่มขึ้น [AMBIGUOUS: ระบบถอดเสียงเป็น "Site Up"]
- CTA ถูกกดมากขึ้น
- ผู้ใช้ใช้เวลาอยู่ในเว็บไซต์นานขึ้น

## 3. ผู้ใช้ / Personas

| กลุ่ม | ระดับ | ความต้องการสำคัญ |
|---|---|---|
| Developer / AI Engineer | หลัก | รวมการสมัครและ API ไว้ที่เดียว; เปรียบเทียบโมเดลได้ง่าย; เข้าถึง Documentation ที่รวมศูนย์ |
| Startup Founder | รอง | ทดลอง AI ได้ง่าย; เข้าใจ Product และดูราคาได้เร็ว |
| Product Manager | รอง | ทดลอง AI ได้ง่าย; เข้าใจ Product และดูราคาได้เร็ว |
| UX Designer | รอง | ทดลอง AI ได้ง่าย; เข้าใจ Product และดูราคาได้เร็ว |

หมายเหตุ: ความต้องการของกลุ่มรองมาจากคำตอบรวมเรื่อง Pain Point และความคาดหวังต่อเว็บไซต์ ไม่ได้แยกรายกลุ่มในการประชุม

## 4. Use Cases / Jobs To Be Done

- **UC-001:** ในฐานะผู้เข้าชมเว็บไซต์ ฉันต้องการเข้าใจว่า AI Hub คืออะไรภายในไม่กี่วินาที เพื่อให้ตัดสินใจได้ว่าจะใช้ต่อหรือไม่
- **UC-002:** ในฐานะผู้ใช้ (Developer/AI Engineer) ฉันต้องการดูรายการ AI Models และเปรียบเทียบโมเดล เพื่อให้เลือกโมเดลที่เหมาะสมได้ง่าย
- **UC-003:** ในฐานะผู้ใช้ ฉันต้องการดูราคา เพื่อให้ประเมินค่าใช้จ่ายก่อนตัดสินใจสมัคร
- **UC-004:** ในฐานะผู้ใช้ ฉันต้องการกดสมัครได้ทันทีจากหน้าเว็บ เพื่อให้เริ่มใช้งานได้โดยไม่ต้องผ่านทีมขาย
- **UC-005:** ในฐานะผู้ใช้ ฉันต้องการเข้าถึง Documentation ได้โดยไม่ต้องล็อกอิน เพื่อให้ศึกษาการเชื่อมต่อ API ได้ก่อนสมัคร
- **UC-006:** ในฐานะผู้ใช้ ฉันต้องการอ่าน FAQ เพื่อให้ได้คำตอบก่อนตัดสินใจสมัคร
- **UC-007:** ในฐานะผู้ใช้ ฉันต้องการเห็นตัวอย่าง AI Agents Marketplace และ Dashboard เพื่อให้เข้าใจขอบเขตของ Product

**User Journey หลักที่กล่าวถึง:** เข้าเว็บไซต์ → อ่าน Hero → เลื่อนดู Features → ดู AI Models → ดู Pricing → อ่าน FAQ → กด Get Started → ไปหน้า Sign-up

## 5. Functional Requirements (Raw)

- **FR-R-001:** ระบบต้องแสดง Hero Section พร้อมข้อความหลัก
- **FR-R-002:** ระบบต้องแสดง AI Models ล่าสุดใน Hero
- **FR-R-003:** ระบบต้องแสดงรายการ AI Models โดยเรียงตาม Popularity [AMBIGUOUS: ถอดเสียงเป็น "Features Models"]
- **FR-R-004:** ระบบต้องแสดง Feature Overview ในรูปแบบ Feature Cards
- **FR-R-005:** ระบบต้องแสดง AI Agents Marketplace Preview
- **FR-R-006:** ระบบต้องแสดง Pricing โดยดึงข้อมูลจากระบบกลาง [AMBIGUOUS: รูปแบบ Pricing ยังไม่สรุป]
- **FR-R-007:** ระบบต้องแสดง Preview ของ Dashboard
- **FR-R-008:** ระบบต้องแสดง FAQ
- **FR-R-009:** ระบบต้องมีส่วน Documentation ที่เปิดได้โดยไม่ต้องล็อกอิน
- **FR-R-010:** ระบบต้องแสดง CTA หลายตำแหน่ง โดย CTA หลักคือ Get Started, Explore Models และ View Documentation
- **FR-R-011:** CTA ทุกตัวต้องนำไปยังหน้า Sign-up [AMBIGUOUS: ถอดเสียงเป็น "สายอัพ"]
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
- **Compatibility / Graceful Degradation:** เมื่อเบราว์เซอร์ไม่รองรับ Animation ให้แสดงแบบ Static (ดู FR-R-022)
- **Reliability:** มี Fallback เมื่อ AI Models, Pricing API หรือรูปภาพโหลดไม่ได้ (ดู FR-R-019 ถึง FR-R-021)
- **Security:** ไม่ได้มีการพูดถึง
- **UX Quality อื่น ๆ:** นอกจากที่ระบุข้างต้น ไม่ได้มีการพูดถึง

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
- Pricing API (ปรากฏในกรณี Error)
- แหล่งข้อมูล AI Models สำหรับ Hero และรายการโมเดล รวมถึง Cache
- หน้า Sign-up ซึ่งเป็นปลายทางของ CTA ทุกตัว [AMBIGUOUS: ไม่ระบุว่าอยู่ในสโคปงานนี้หรือไม่]

**Risks**
- ไม่ได้มีการพูดถึงความเสี่ยงโดยตรงในการประชุม
- ข้อสังเกตจากการเทียบข้อกำหนด (ไม่ได้ถูกพูดถึงในที่ประชุม): Animation หลายแบบ (หรือ Video Hero หากเลือก) อาจกระทบเป้าโหลดหน้าแรกไม่เกิน 2 วินาที
- ข้อสังเกตเช่นเดียวกัน: รูปแบบ Pricing ที่ยังไม่สรุปกระทบการออกแบบส่วน Pricing และ Default Pricing

## 8. Business Rules (Raw)

- **BR-R-001:** Pricing ต้องดึงจากระบบกลาง
- **BR-R-002:** Documentation ต้องเปิดได้โดยไม่ต้องล็อกอิน
- **BR-R-003:** CTA ทุกตัวต้องไปหน้า Sign-up
- **BR-R-004:** Hero ต้องแสดง AI Models ล่าสุด
- **BR-R-005:** รายการ AI Models ต้องจัดเรียงตาม Popularity [AMBIGUOUS: ถอดเสียงเป็น "Features Models"]
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
- Dashboard (ตัวระบบเต็ม) [AMBIGUOUS: Preview ของ Dashboard อยู่ในสโคป]
- Search แบบละเอียด
- User Login
- Live Playground

## 11. Open Questions / Ambiguities

**ประเด็นที่ที่ประชุมระบุเองว่ายังไม่ตัดสินใจ**
1. Hero จะใช้ Video หรือ Illustration
2. จะมี AI Chat Assistant บนหน้าเว็บหรือไม่
3. รูปแบบ Pricing (ยังไม่สรุป)
4. จะเปิด AI Agents Marketplace ตั้งแต่เวอร์ชันแรกหรือเวอร์ชันถัดไป (สโคปเวอร์ชันแรกมีเฉพาะ Marketplace Preview)

**[AMBIGUOUS] จากคำถอดเสียงที่ไม่แน่ใจ**
5. "End Price" ที่เชื่อมต่อ API: อาจเป็น Endpoint ต้องยืนยัน
6. "Site Up": อาจเป็น Sign Up ต้องยืนยัน
7. "สายอัพ": อาจเป็น Sign-up ต้องยืนยัน
8. "Features Models" ในกฎการเรียงตาม Popularity: หมายถึงรายการ AI Models หรืออย่างอื่น
9. "Lashboard": อาจเป็น Dashboard ต้องยืนยัน

**[AMBIGUOUS] ข้อมูลที่ไม่ครบหรือขัดกันเล็กน้อย**
10. Dashboard อยู่ใน Out-of-scope แต่ต้องแสดง Preview ของ Dashboard: ขอบเขตของ Preview (ภาพนิ่ง, Mockup หรืออื่น ๆ) ไม่ชัดเจน
11. "ระบบกลาง" ที่ให้ดึง Pricing คือระบบอะไร, ใครเป็นเจ้าของ, API รูปแบบใด
12. หน้า Sign-up อยู่ในสโคปงานนี้หรือเป็นระบบที่มีอยู่แล้ว (User Login อยู่นอกสโคป)
13. ผู้ใช้คาดหวัง "เปรียบเทียบโมเดล" แต่สโคปไม่ระบุฟีเจอร์เปรียบเทียบโดยตรง ต้องยืนยันว่าเป็นส่วนใดของหน้า (เช่น รายการ AI Models หรือ Pricing)
14. Documentation เป็นส่วนบน Landing Page หรือลิงก์ไปเว็บ Documentation แยก
15. ข้อความหลักของ Hero (Headline/Sub-headline) ไม่ได้ระบุ
16. Number Counter แสดงตัวเลขอะไร
17. เกณฑ์ "Popularity" และนิยามของ "AI Models ล่าสุด" (ที่มาของข้อมูล, ช่วงเวลา)
18. ตัวเลขเป้าหมายของ Conversion Rate, Sign Up, CTA Click และ Time on Site: ไม่ระบุ
19. เงื่อนไขการวัด "โหลดหน้าแรกไม่เกิน 2 วินาที" (อุปกรณ์, เครือข่าย, ตัวชี้วัด)
20. มาตรฐาน Accessibility "ระดับ AA": ไม่ได้ระบุว่าอิงมาตรฐานใด
21. อายุของ Cache และเนื้อหาของ Default Pricing
22. กำหนดการเปิดตัว, ผู้รับผิดชอบ และงบประมาณ: ไม่ระบุ
23. ชื่อและตำแหน่งของผู้เข้าร่วมประชุม: ไม่ระบุ
