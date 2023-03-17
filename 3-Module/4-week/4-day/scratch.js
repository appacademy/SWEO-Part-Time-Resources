window.addEventListener('DOMContentLoaded', e => {
  const form = document.querySelector('form');

  const checkPasswordMatch = e => {
    const passwordValue = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    if (passwordValue !== confirmPassword) {
      e.preventDefault();
      console.log('Passwords must match!')
    } else {
      console.log('Your form was subitted!');
    }
  }

  form.addEventListener('submit', checkPasswordMatch);
});