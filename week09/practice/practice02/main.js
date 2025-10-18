const inputMessage = document.querySelector('#keyInput')
const display = document.querySelector('#keyLog')
 
inputMessage.addEventListener('keydown', (event) => {
  const p = document.createElement('p')
  p.textContent = `You pressed: ${event.key}`
 
  if (event.key === 'Enter') {
    p.style.color = 'blue'
  }
 
  display.appendChild(p)
})