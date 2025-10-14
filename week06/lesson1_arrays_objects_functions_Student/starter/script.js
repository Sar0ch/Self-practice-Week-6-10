// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  quotes.push(quote)
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
 const index = quotes.findIndex(q => q.id === id)
  if (index !== -1) {
    quotes.splice(index, 1)
  }}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
const quote = quotes.find(q => q.id === id)
  if (quote) {
    if (updatedQuote.content) quote.content = updatedQuote.content
    if (updatedQuote.author) quote.author = updatedQuote.author
  }}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  return quotes
}

// 6. Test your functions below
addQuote({ id: 1, content: "ข้าวหน้าเป็ด", author: "ร้านอาม่า" })
addQuote({ id: 2, content: "ไข่เจียวปู", author: "เจ๊ไฝ" })
addQuote({ id: 3, content: "ชาบูหมาล่า", author: "hotpotman" })


deleteQuote(2)

updateQuote(3, { content: "หมูกระทะรวมมิตร" })

console.log("🍴 รายการอาหารทั้งหมดในร้าน 🍴")
console.log(getAllQuotes())