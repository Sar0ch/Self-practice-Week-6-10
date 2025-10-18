// เลือกปุ่มในหน้า
const submitButton = document.querySelector("button");

// เพิ่ม event listener ให้กับปุ่ม
submitButton.addEventListener("click", (event) => {
  console.log("===== BUTTON EVENT =====");
  console.log("event.target:", event.target);          // element ที่ถูกคลิกจริง ๆ
  console.log("event.currentTarget:", event.currentTarget); // element ที่ event ผูกอยู่
  console.log("event.eventPhase:", event.eventPhase);  // phase ของ event (1 = capturing, 2 = target, 3 = bubbling)
  console.log("Submit button was clicked!");
});

// เลือก div ที่ครอบปุ่ม
const divElement = document.querySelector("div");

// เพิ่ม event listener ให้ div ด้วย
divElement.addEventListener("click", (event) => {
  console.log("===== DIV EVENT =====");
  console.log("event.target:", event.target);          // ยังเป็นปุ่มถ้าคลิกปุ่ม
  console.log("event.currentTarget:", event.currentTarget); // คือ div เสมอ
  console.log("event.eventPhase:", event.eventPhase);
  console.log("Div was clicked!");
});

const bodyElement = document.body

const yourName = prompt('What is your name?', 'typing your name in Esan')
console.log(yourName)
let nameComfirm = null
if(yourName?.trim().length !== 0 && yourName?.trim() !== null){
  const nameComfirm = confirm(`Are you ${yourName}?`)
}
nameComfirm ? alert(`Hello, ${yourName}`) : alert(`Hello , Gueset`)

const submitButton1 = document.querySelector(' div > button')
// console.log(summitButton)

//1. add event with anonymous handler function
// summitButton.addEventListener(('click'), () => {
//   console.log("Submit button was clicked!")
// })

//2. add event with named function ถ้าคิดว่าในอนาคตจะมีการ remove ให้ใช้แบบ name function
const handlerButton = () => {
  console.log("Submit button was clicked!")
}
submitButton1.addEventListener("click",handlerButton )
submitButton1.removeEventListener("click",handlerButton)

const bolt = document.querySelector('img')
const submitbutton = document.querySelector("div>button")
const divElement3 = document.querySelector("div")
const bodyElement1 = document.querySelector("body")
 
function logEvent(event, message) {
    // console.log('target:', event.target)
    // console.log('currentTarget:', event.currentTarget)
    // console.log('eventPhase:', event.eventPhase)
    if (message) console.log(message)
}
if (submitbutton) {
    submitbutton.addEventListener('click', (event) => {
        logEvent(event, "Submit button was clicked!")
    })
}
if (divElement3) {
    divElement3.addEventListener('click', (event) => {
        logEvent(event, "Div was clicked!!")
    })
}
if (bodyElement1) {
    bodyElement1.addEventListener('click', (event) => {
        logEvent(event, "body was clicked!!")
    })
}

const aLink = document.querySelector("a")
aLink.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("web visit")
})