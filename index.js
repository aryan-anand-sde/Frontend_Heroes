function toggleForm() {
  var loginForm = document.querySelector(".container");
  var registerForm = document.getElementById("registerForm");
  loginForm.style.display =
    loginForm.style.display === "none" ? "block" : "none";
  registerForm.style.display =
    registerForm.style.display === "none" ? "block" : "none";
}
