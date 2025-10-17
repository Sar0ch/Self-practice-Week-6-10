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

Document   ← Root Node ต้องสร้าง logical node ขึ้นมาถ้ามี Root Element หลายอัน
└── html   ← Root Element
    ├── head
    └── body
!ถ้ามีlevel เดียวกัน อีก เช่น 
└── comment text
└── !Doctype
!จะทำให้ไม่มี Root Element

*Root Element ≠ Root Node
ถ้าเป็น html doc Root Element คือ node hlml

!ลองสร้าง tree 
<html>
<head> DOM Document </head> 
<body> 
    <div id = '123'>
        <p>#1</p>   
        <p>#2</p>  

    </div>
    <div>
        <p>#3</p>  
    </div>
</body>
</html>

!ตอบ

    html ← root element                     
    └── head
        └── "DOM Document"
    └── body
        └── div ← owner id = '123'
            └── p
                └── #1 ← leave 
            └── p 
                └── #2 ← leave
        └── div 
            └── p 
                └── 3 ← leave

!โค้ดดิ้งดึ๋งๆ
<!DOCTYPE html> 
<!--sample comment #1-->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="123">
    <p>#1</p>
    <!--sample comment #2-->
    <p>#2</p>
  </div>
  <div>
    <p>#3</p>
  </div>
  <script src="main.js"></script>
</body>
</html>
<!--sample comment #3-->

!ทอดสบ
console.log(window.document) //root node
console.log(document) //root node

console.log(document.getElementById('123')) //getElementById เป็นการ query ผ่านค่า id มันจะไปหา node ที่มีค่า id ตามที่เรากำหนด id ต้องเป็น unique ทั้งไฟล์
const htmlElement = document.documentElement
console.log(htmlElement)

console.log(htmlElement.parentElement) //null 
console.log(htmlElement.parentNode) //root node

if (htmlElement.parentNode === document){
    console.log("Yes, parent of html is a root node") //Yes sir
}

!กลุ่มคำสั่ง
console.log(document.firstChild) //<!Doctype html>
console.log(document.firstChild.nextSibling) //<!--sample comment #1-->
console.log(document.firstChild.previousSiblingSibling) //null
console.log(document.firstElementChild) //<html>
console.log(document.firstElementChild.previousSibling) //<!--sample comment #1-->
console.log(document.lastChild) //<!--sample comment #3-->
console.log(document.lastElementChild) //<html>               

* 1.get all chaild nodes under <div id = '123'>
const divElement = document.getElementById('123')

* 2.get all node type children (return (static) NodeList, can use forEach)
const divChildNodes = divElement.childNodes //childNodes ได้ลูกอะไรก็ได้
console.log(divChildNodes.length) //7
divChildNodes.forEach((child) => console.log(child))

* 3. get onty Element node type children (return (dynamic) HTMLCollection, cannot use forEach)
const divChildren = divElement.children //children ได้ลูกที่เป็น element type
console.log(divChildren.length) //2
 for (let i = 0; i < divChildren.length; i++){
 console.lof(divChildren[i])
}

Array.from(divChildren).forEach((child)=> console.log(child))

!กลุ่มคำสั่งที่ใช้เข้าถึง attributes 
const divElement = document.getElementById('123')
* get all attributes on < div id = '123'>
const divAttrs = divElement.attributes
console.log(divAttrs.length)//2

for (let i = 0; i<divAttrs.length;i++){
    const attrName = divAttrs[i].name //*get attributes name
    const attrValue = divAttrs[i].value //*get attributes value
    console.log(`attribute name: ${attrName}, attribute value: ${attrValue}`)  //*attribute name: style, attribute value: color: red;
    console.log(divAttrs[i].ownerElement) //*<div id="123" style="color: red;">
}

console.log(divElement.getAttribute("id")) //*find attribute value
console.log(divElement.getAttribute("style")) //*find attribute value

!ฝึก
* 1.What is the type of first child of root node
console.log(document.firstChild.nodeName)
console.log(document.firstChild.nodeType)
console.log(document.firstChild.nodeValue)
* 2. if node type is an element node, display Hello , HTML node , otherwise, display "Hello, any node"

if(document.firstChild.nodeType === Node.ELEMENT_NODE){
    console.log("Hello , HTML node")
}
else{
    console.log("Hello, any node")
}
!test rabob
const divElement = document.getElementById('123')
console.log(divElement.nodeName) //DIV
console.log(divElement.nodeType) //1
console.log(divElement.nodeValue) //null

const pText = divElement.childNodes[1].childNodes[0]
console.log(pText) //"#1"
console.log(pText.nodeName)//#text
console.log(pText.nodeType)//3
console.log(pText.nodeValue)//#1

!วิธีการ create node ที่มันไม่เคยมีมาก่อนหลังจาก render แล้ว
        └── div ← owner id = 'p5'
            └── p
                └── #5
!สูตรแบบเต็ม
? 1. create <p></p>
const pElement = document.createElement('p') //<p></p>
? 2. create id = "p5"
const idAttr = document.createAttribute('id')
idAttr.value = "p5"
? 3. binding id="p5" to <p>
pElement.setAttributeNode(idAttr) //<p id="p5"></p>
? 4. create text value '#5'
const pText = document.createTextNode("#5")
? 5. binding '#5' to <p> 
pElement.appendChild(pText) //<p id = "p5">#5</p>
? 6. binding <p id = "p5">#5</p> to <body>
const body = document.body
body.appendChild(pElement) //<body> ... <p id = "p5">#5</p></body>

! shortcut ส้ั้นกว่า เพราะเอา binding ไปรวมกันแล้ว
? 1. create <p></p>
const pElement = document.createElement('p') //<p></p>
? 2. create id = "p5"
pElement.setAttribute("id", "p5")
? 4. create text value '#5'
pElement.textContent = "#5"
? 6. binding <p id = "p5">#5</p> to <body>
const body = document.body
body.appendChild(pElement) //<body> ... <p id = "p5">#5</p></body>
*/

