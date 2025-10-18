//! ฝึกทำเอง ใช้ chatgpt สร้างโจทย์ให้
//1. แสดง ชื่ออาหารถัดจาก “Chicken Wings”
// Expected Output: Tuna Sandwich
const chickwing = document.querySelector('#appetizer .meat')
const nextchick = chickwing.nextElementSibling
console.log(nextchick.textContent)

//2.แสดง ชื่ออาหารก่อนหน้า “Tuna Sandwich”
// Expected Output: Chicken Wings
const Tuna = document.querySelector("#appetizer li:last-child")
const beforeTuna = Tuna.previousElementSibling
console.log(beforeTuna.textContent)

//3. Traverse all siblings หลัง “Spicy Bacon-Corn Soup”
// Expected Output:
// Vegetable Soup  
// Beef Soup  
// Coconut Soup
let spicy = document.querySelector('#soup li:first-child'); 
while (spicy.nextElementSibling) {
  spicy = spicy.nextElementSibling;
  console.log(spicy.textContent);
}

