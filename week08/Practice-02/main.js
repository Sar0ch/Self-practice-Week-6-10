const box = document.getElementById("box");
const buttons = document.querySelectorAll('button[data-color]');
 
buttons.forEach(button => {
  button.onclick = () => {
    box.style.backgroundColor = button.dataset.color;
    box.textContent = button.dataset.color.toUpperCase();
  };
});
 