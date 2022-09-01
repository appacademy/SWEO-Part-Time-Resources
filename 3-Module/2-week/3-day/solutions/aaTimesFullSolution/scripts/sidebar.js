window.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.fa.fa-bars');
  menuIcon.addEventListener('click', event => {
    console.log('Menu clicked');
    event.stopPropagation();
    document.querySelector('.sidebar').classList.remove('sidebar--hidden');
  });

  window.addEventListener('click', () => {
    console.log('HTML document clicked');
    document.querySelector('.sidebar').classList.add('sidebar--hidden');
  });
});