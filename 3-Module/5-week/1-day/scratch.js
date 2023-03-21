/* PERSISTENT STORAGE IN THE BROWSER
* Cookies
-stores less than 4kb
-included in HTTP requests
-the server sends the data back to the browser, where is is usually stored and then sent back on the next request

let cookie = "key=value; key=value"

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
  let firstname = 'firstName=Tristan'
  document.cookie = firstname;
  let id = 'id=516181651698465';
  document.cookie = id;

  let button = document.querySelector('button');
  let field = document.querySelector('#field');

  field.addEventListener('input', e => {
    sessionStorage.setItem('autosave', field.value);
  })
  button.addEventListener('click', e => {
    localStorage.setItem('fieldInput', field.value);
  })
  if (sessionStorage.getItem('autosave')) {
    field.value = sessionStorage.getItem('autosave');
  }

  // if (sessionStorage.getItem('autosave')) {
  //   sessionStorage.removeItem('autosave');
  // }
  // sessionStorage.clear();
}
