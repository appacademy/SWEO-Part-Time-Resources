window.addEventListener("DOMContentLoaded", event => {
  const form = document.getElementById("signup-form");

  const checkPasswordMatch = event => {
    const passwordValue = document.getElementById("password").value;
    const passwordConfirmValue = document.getElementById("confirm-password")
      .value;

    if (passwordValue !== passwordConfirmValue) {
      event.preventDefault();
      alert("Passwords must match!");
    } else {
      alert("The form was submitted!");
    }
  };
  
  form.addEventListener("submit", checkPasswordMatch);
});