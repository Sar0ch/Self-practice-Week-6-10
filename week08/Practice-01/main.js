const addButton = document.getElementById('add')
addButton.addEventListener('click',()=> {
    //write code here ...
})
//อันนี้ึคือการadd event

const buttons = document.getElementsByTagName("button")
//console.log(buttons)
Array.from(buttons).forEach((button) => 
    button.addEventListener("click",() => {
        //common event handle codes
    })
)