const darkMode = () => {
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');
  const buttons = document.querySelectorAll('button');
  const page = [body, h1, h2, ...buttons];

  page.forEach((el) => (el.className = 'dark'));
};

const lightMode = () => {
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');
  const buttons = document.querySelectorAll('button');
  const page = [body, h1, h2, ...buttons];

  page.forEach((el) => (el.className = ''));
};

window.addEventListener('DOMContentLoaded', (e) => {
  const preference = localStorage.getItem('theme');
  // const preference = sessionStorage.getItem('theme');
  // const demoCookie = 'theme=light';
  // console.log(demoCookie.split('=')[1]);
  // const preference = document.cookie.split('; ')[0].split('=')[1];
  // const preference = document.cookie;
  // console.log(preference);

  if (preference === 'dark') {
    darkMode();
  }

  const light = document.getElementById('light');
  const dark = document.getElementById('dark');
  const save = document.getElementById('save');
  let choice = null;

  light.addEventListener('click', (e) => {
    choice = e.target.id;
    lightMode();
  });

  dark.addEventListener('click', (e) => {
    choice = e.target.id;
    darkMode();
  });

  save.addEventListener('click', (e) => {
    if (choice) localStorage.setItem('theme', choice);
    // if (choice) sessionStorage.setItem('theme', choice);
    // if (choice) document.cookie = `theme=${choice};`;
    // if (choice) document.cookie = `theme=${choice}; max-age=5`;
  });
});
