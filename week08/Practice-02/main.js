const buttons = document.getElementsByTagName('button');
const box = document.getElementById('box');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', () => {
    const color = button.dataset.color   
    box.style.background = color         
  })
})