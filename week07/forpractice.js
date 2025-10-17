//1.What is the type of first child of root node
console.log(document.firstChild.nodeName)
console.log(document.firstChild.nodeType)
console.log(document.firstChild.nodeValue)
//2. if node type is an element node, display Hello , HTML node , otherwise, display "Hello, any node"

if(document.firstChild.nodeType === Node.ELEMENT_NODE){
    console.log("Hello , HTML node")
}
else{
    console.log("Hello, any node")
}

// let el = document.getElementById("demo")
console.log(el.innerHTML)
console.log(el.innerText)
console.log(el.textContent)
 
//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
//1.5 add format='italic' attribute to <p>
//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
//2.2  add <i>Sample Italic Text</i> with innerText
//2.3 add <i>Sample Italic Text</i> with textContent
 let el = document.getElementById("demo");

// append <p> under <div id="demo">
let p = document.createElement("p");

// 1.5 add attribute format='italic'
p.setAttribute("format", "italic");

// 2.1 add <i>Sample Italic Text</i> with innerHTML
p.innerHTML = "<i>Sample Italic Text (innerHTML)</i>";
el.appendChild(p);

// 2.2 add <i>Sample Italic Text</i> with innerText
let p2 = document.createElement("p");
p2.setAttribute("format", "italic");
p2.innerText = "<i>Sample Italic Text (innerText)</i>";
el.appendChild(p2);

// 2.3 add <i>Sample Italic Text</i> with textContent
let p3 = document.createElement("p");
p3.setAttribute("format", "italic");
p3.textContent = "<i>Sample Italic Text (textContent)</i>";
el.appendChild(p3);

// log values
console.log("innerHTML:", el.innerHTML);
console.log("innerText:", el.innerText);
console.log("textContent:", el.textContent);
