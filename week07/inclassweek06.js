/*
DOM (Document Object Model)เป็นการ modeling เอกสารขึ้นมา โดยการอ่านเอกสารทั้งไฟล์ แล้วมา build tree
what is DOM 
- ตัวแทนของหน้า HTML ในรูปแบบที่โปรแกรมสามารถเปลี่ยน โครงสร้าง (structure), สไตล์ (style), และเนื้อหา (content) ได้
- มองเอกสารเป็น ต้นไม้แบบลำดับชั้น (hierarchical tree of nodes) นักพัฒนาสามารถเลือก, เพิ่ม, ลบ หรือแก้ไขแต่ละ node ได้
- DOM ใช้ได้กับหลายภาษาและหลายแพลตฟอร์ม
- DOM ไม่ใช่ภาษาโปรแกรม แต่เป็นโมเดลสำคัญที่ทำให้ JavaScript และภาษาอื่น ๆ สามารถเข้าถึงและจัดการหน้าเว็บ

<p style = "colorsrcd" id = '123' > sample Test </p>
Element Node
    - <p>
Attribute Node (ของ <p>)
    - style="colorsrcd"
    - id="123"

Text Node
    -"sample Test"

Document   ← Root Node
└── html   ← Root Element
    ├── head
    └── body

- เวลาอ้างถึง DOM ในแง่ โครงสร้างข้อมูล → root node = Document
- เวลาอ้างถึง โครงสร้าง HTML → root element = <html>

01.30.00
*/

