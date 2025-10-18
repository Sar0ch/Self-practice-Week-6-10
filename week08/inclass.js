//1.display all child nodes under <ul id="appetizer">
//? 1st Solution
// console.log(document.getElementById("appetizer"))
// └──เป็นการหา object ที่มี id ตรงกัน ถ้าไม่เจอคืน null

//? 2nd Solution
// query Selector จะ return first element ที่ตรงกับ css selector
// └── css selector # แทน id 
// └── css selector . แทน class
const child = document.querySelector("#appetizer")
console.log(child)

const meatEL = document.querySelector(".meat")
console.log(meatEL) // Chicken Wings เพราะเป็นอันแรกที่เจอ

const meat = document.querySelectorAll(".meat")
console.log(meat) 
// return เป็น nodelist (array like คือ หน้าตาเหมือน arr แต่ใช้คำสั่ง arr ไม่ได้)

//get child node, return node list(array-like with implement forEach)
const appetizerChildnode = child.childNodes;
appetizerChildnode.forEach((ele) => console.log(ele));
//จะได้ทุกอย่างที่เป็น child node ของ appetizer รวมเว้นขึ้นบรรทัดใหม่ด้วย
//#text
//li.vegan
//#text
//#comment
//#text
//li.meat
//#text
//li.meat
//#text

//2. find meat element that a text value contains 'soup'
const meatsoup = document.querySelectorAll(".meat");
const result = []
meatsoup.forEach((MS) => { 
  if (MS.textContent.toLowerCase().includes('soup')) {
    result.push(MS.textContent);
  }    
});
console.log(result)

//3. Goto the first child element node under <ul id="soup"> and display all sibling nodes
//output  : 
/*
<li class="meat">Spicy Bacon-Corn Soup</li>
<li class="vegan">Vegetable Soup</li>
<li class="meat">Beef Soup</li>
<li class="vegan">Coconut Soup</li>
*/

const fchild = document.querySelector('#soup')
let current = fchild.firstElementChild

while(current !== null){
    console.log(current.textContent)
    current = current.nextElementSibling
}

//1. getElementsByName(), return NodeList(array-like) data type, implement forEach
const fnameElement = document.getElementsByName('fname')
console.log(fnameElement.length) //2
fnameElement.forEach((ele) => console.log(ele.textContent))

//2. getElementsByTagName(), return HTMLCollection (array-like) data type
const inputElements = document.getElementsByTagName("input")
Array.from(inputElements).forEach((ele) => console.log(ele.textContent))

//3. getElementsByClassName(), return HTMLCollection (array-like) data type
const vaganElements =document.getElementsByClassName("vagan")
Array.from(vaganElements).forEach((ele) => console.log(ele.textContent))

//4. Find the first element of document that has an ID values "appetizer" or "soup"
const appEle = document.querySelector("#appetizer , #soup")
console.log(appEle.textContent)

//5. find all class 'meat' elements under <ul id="appetizer"> or <ul id="soup">
const allmeat = document.querySelectorAll('#appetizer .meat, #soup .meat') 
Array.from(allmeat).forEach((allm) => console.log(allm.textContent))

//!---------------------------------------------------------------------------
/*
<ul id="soup">
    <li class="meat">Spicy Bacon-Corn Soup</li>
    <!-- 2. remove Vegetable Soup -->
    <li class="vegan">Vegetable Soup</li>
    <!-- 1. <li class="vegan">Cabbage Soup</li> -->
    <li class="meat">Beef Soup</li>
    <!-- 3.replace Beef Soup with Pork Soup -->
    <li class="vegan">Coconut Soup</li>
</ul>
 */

// 1. insertBefore <!--  <li class="vegan">Cabbage Soup</li> -->
// 1.1 get its parent
const soupUlElement = document.getElementById('soup')
// 1.2 get reference node <li class="meat">Beef Soup</li>
let refnode = null;
Array.from(soupUlElement.children).forEach((element) => { 
  if (element.textContent.trim().includes('Beef Soup')) {
    refnode = element;
  }
});
//1.3 create <li class="vegan">Cabbage Soup</li> -->
const newnode = document.createElement("li")
newnode.textContent = "Cabbage Soup"
newnode.setAttribute("class" , "vegan")
//1.4 insertBefore(newnode, refnode)
soupUlElement.insertBefore(newnode,refnode)

//!---------------------------------------------------------------------------

// 2. remove Vegetable Soup
// 2.1 get its parent
const soupUlElement2 = document.getElementById('soup')
// 2.2 get ref node <li class="vegan">Vegetable Soup</li>
let refNode2 = null 
Array.from(soupUlElement2.children).forEach((element) => {
  if (element.textContent.trim() === "Vegetable Soup") 
    refNode2 = element
})
// 2.3 remove
soupUlElement2.removeChild(refNode2)

//!---------------------------------------------------------------------------

// 3. replace Beef Soup with Pork Soup
// 3.1 get its parent
const soupUlElement3 = document.getElementById('soup')
// 3.2 get ref node <li class="vegan">Coconut Soup</li>
const refNode3 = Array.from(soupUlElement3.children).find(li =>
  li.textContent.includes("Beef Soup")
);
// 3.3 create new
const newSoup = document.createElement("li")
newSoup.textContent = ('Pork Soup')
newSoup.setAttribute('class', 'vegan')
// 3.4 replace
soupUlElement3.replaceChild(newSoup,refNode3)
