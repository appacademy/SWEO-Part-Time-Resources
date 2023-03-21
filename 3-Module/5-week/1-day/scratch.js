/* PERSISTENT STORAGE IN THE BROWSER
* Cookies
-stores less than 4kb
-included in HTTP requests
-the server sends the data back to the browser, where is is usually stored and then sent back on the next request

let cookie = "key=value; key=value;"

Web Storage
* Local Storage
- Store data with no expiration date
- Deleted by clearing the browser cache
- Storage Limit of 5mb

* Session Storage
- Stores data until the window/tab is closed
- Never transfers data to the server
- Largest capacity in the browser

*/
window.onload = () => {
  let first = 'name=Tristan';
  let second = 'id=6513846351683'

  document.cookie = first;
  document.cookie = second;
  console.log(document.cookie);
  document.cookie = 'name=; expires = Mon, 01 Jan 1970 00:00:00 GMT';

  let button = document.querySelector('button');
  let field = document.querySelector('#field');

  if (localStorage.getItem('inputvalue')) {
    console.log(localStorage.getItem('inputvalue'));
  }
  if (sessionStorage.getItem('autosave')) {
    field.value = sessionStorage.getItem('autosave');
  }

  field.addEventListener('input', e => {
    sessionStorage.setItem('autosave', field.value);
  })
  button.addEventListener('click', e => {
    localStorage.setItem('inputvalue', field.value);
  });


  localStorage.removeItem('inputvalue');
}
