// insertBefore(newNode, referenceNode) //The node to insert becomes the previous
// sibling of the reference node
// replaceChild(newChild, oldChild)//replaces a child node within the given (parent) node
// removeChild(child)//removes a child node from the DOM and returns the removed node.



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
