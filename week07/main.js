// let el = document.getElementById("demo")
// console.log(el.innerHTML)
// console.log(el.innerText)
// console.log(el.textContent)

//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
//1.5 add format='italic' attribute to <p>
//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
//2.2  add <i>Sample Italic Text</i> with innerText
//2.3 add <i>Sample Italic Text</i> with textContent

const pp = document.getElementById('demo')

const p1 = document.createElement('p')
p1.setAttribute("format","italic")
p1.innerHTML = "<i> Sample Italic Text (innerHTML)</i>"
pp.appendChild(p1) 

const p2 = document.createElement('p')
p2.setAttribute("format","italic")
p2.innerText = "<i> Sample Italic Text (innerText)</i>"
pp.appendChild(p2) 

const p3 = document.createElement('p')
p3.setAttribute("format","italic")
p3.textContent = "<i> Sample Italic Text (textContent)</i>"
pp.appendChild(p3) 

console.log("innerHTML:", pp.innerHTML);
console.log("innerText:", pp.innerText);
console.log("textContent:", pp.textContent);