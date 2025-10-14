const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const message = document.querySelector("p");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  message.textContent = "";
  message.className = "";

  if (
    username.value.trim() === "" ||
    email.value.trim() === "" ||
    password.value.trim() === "" ||
    confirmPassword.value.trim() === ""
  ) {
    message.textContent = "Please complete all required fields.";
    message.style.color = "red";
    message.classList.add("error");
    return;
  }

  if (password.value !== confirmPassword.value) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    message.classList.add("error");
    return;
  }

  message.textContent = "Account created successfully.";
  message.style.color = "green";
  message.classList.add("success");
  form.reset();
});
