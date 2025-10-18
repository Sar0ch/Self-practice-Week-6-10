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