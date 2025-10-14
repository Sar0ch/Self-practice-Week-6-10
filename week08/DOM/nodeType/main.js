// const meatElement = document.querySelector(".meat")
 //<li class="meat">Chicken Wings</li>
// console.log(meatElement) // <li class="meat">Chicken Wings</li>

// const meatAllElements = document.querySelectorAll(".meat") //return NodeList (array-like)

// meatAllElements.forEach((ele) => console.log(ele)) //4 meat elements
// console.log(meatAllElements)

//2. find meat element that a text value contains "soup"
// const meatsoupElement = document.querySelectorAll(".meat")
// meatsoupElement.forEach((ele) =>{
//     if (ele.textContent.toLowerCase().includes("soup")) {
//         console.log(ele)
//     }
// });

//3.goto the first element node under < ul id = "soup"> and display all sibling nodes 
//output : 
/*
      <ul id="soup">
        <li class="meat">Spicy Bacon-Corn Soup</li>
        <li class="vegan">Vegetable Soup</li>
        <li class="meat">Beef Soup</li>
        <li class="vegan">Coconut Soup</li>
      </ul>
 */
// const firstSoupElement = document.querySelector("#soup").firstElementChild;
 
// let sibling = firstSoupElement;
// while (sibling) {
//   console.log(sibling);
//   sibling = sibling.nextElementSibling;
// }
 
//1. getElementsByName(), return NodeList (array-like) data type, implement forEach
const fnameElements = document.getElementsByName("fname")
console.log(fnameElements.length) //2
fnameElements.forEach((ele) => console.log(ele))

//2. getElementsByTagName(), return HTMLCollection (array-like) data type
const inputElements = document.getElementsByTagName("input")
Array.from(inputElements).forEach((ele) => console.log(ele))

//3. getElementsByClassName(), return HTMLCollection (array-like)  data type
const veganElements = document.getElementsByClassName("vegan")
Array.from(veganElements).forEach((ele) => console.log(ele))

//4. find the first element of document that has an ID values "appetizer" or "soup"
const firstElement = document.querySelector("#appetizer, #soup")
console.log(firstElement)
//5. find all class "meat" elements under <ul id="appetizer"> or <ul id="soup"> only

// find all class "meat" elemet under <ul id = "appetizer"> or <ul id="soup"> only
const meatElemet = document.querySelectorAll("#appetizer .meat, #soup .meat")
meatElemet.forEach((ele) => console.log(ele))
 