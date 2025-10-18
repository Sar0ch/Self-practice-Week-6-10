const fName = document.getElementById("fname")
const lName = document.getElementById("lname")
const message = document.getElementById("message")

function checkEmpty(e) {
  console.log(e)
  if (e.target.value.trim().length === 0) {
    message.style.color = "red"
    message.textContent = `your ${e.target.id} is empty`
  }
}
fName.addEventListener("blur", checkEmpty)
lName.addEventListener("blur", checkEmpty)
 