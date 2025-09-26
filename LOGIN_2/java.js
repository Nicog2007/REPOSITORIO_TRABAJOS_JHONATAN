const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que recargue la página
  let valid = true;

  // Validar correo
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    email.classList.add("is-invalid");
    valid = false;
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  }

  // Validar contraseña (mínimo 8 caracteres)
  if (password.value.length < 8) {
    password.classList.add("is-invalid");
    valid = false;
  } else {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
  }

  // Si es válido
  if (valid) {
    message.innerHTML = `<div class="alert alert-success">Login exitoso</div>`;
    // Redirigir a otra página si quieres:
    // window.location.href = "muro.html";
  } else {
    message.innerHTML = `<div class="alert alert-danger">Verifica los campos</div>`;
  }
});
