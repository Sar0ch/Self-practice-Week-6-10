// Lesson 1: Arrays, Objects, and Functions
 
// 1. Create an empty array to hold the quotes
const quotes = []
 
/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  let { id, content, author } = quote;
  if (
    typeof quote !== 'object' ||
    typeof id !== 'number' ||
    typeof content !== 'string' ||
    typeof author !== 'string'
  ) {
    return false;
  }
  quotes.push(quote);
  return true;
}
 
 
/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  const initialLength = quotes.length;
  const filteredQuotes = quotes.filter(quote => quote.id !== id);
 
  if (initialLength === filteredQuotes.length) {
    return false;
  }
 
  quotes.length = 0;
  quotes.push(...filteredQuotes);
  return true;
}
 
 
/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  const quote = quotes.find(q => q.id === id);
  if (!quote) {
    return false;
  }
 
  if (updatedQuote.content && typeof updatedQuote.content === 'string') {
    quote.content = updatedQuote.content;
  }
  if (updatedQuote.author && typeof updatedQuote.author === 'string') {
    quote.author = updatedQuote.author;
  }
 
  return true;
 
}
 
/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes;
 
}
 
// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({ id: 1, content: "The only limit is the one you set yourself.", author: "Anonymous" });
addQuote({ id: 2, content: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" });
addQuote({ id: 3, content: "Simplicity is the soul of efficiency.", author: "Austin Freeman" });
// TODO: Delete 1 quote using deleteQuote()
deleteQuote(2);
// TODO: Update 1 quote using updateQuote()
updateQuote(3, { content: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" });
// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes());