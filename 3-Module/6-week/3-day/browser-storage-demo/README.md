# Browser Storage Demo Notes

- JSON methods to serialize and deserialize data
- Cookies as a small file stored on a user's computer that is lost once the browser window is closed and can be used to store session information when a user logs in
- Local storage as a way to store data in key value pairs with no expiration date and persisting from page to page
- The server as the place to store user selected styles if logging in from different devices
- Grab the value from the target of the event and store it in local storage then retrieve it on refresh and put it back into the page

Most data on the Web is stored in a database on a server. However,
you can store data in the user's browser for data that
matters only to the one user in their browser for a particular amount of
time.

- What color scheme does the user prefer (e.g. light or dark)
- What's in the user's shopping cart (before they check out)
- Values a user typed into a long web form (which can then be restored if the user refreshes the browser tab)
- Which pages has the user viewed most recently
- What does this user commonly search for

Local Storage is a way to store data in key value pairs with no
expiration data and can persist from page to page

Cookies are a small size file stored on a user's computer that is lost once the browser window is closed and can be used to store session information when a user logs in

Main difference, localStorage doesn't communicate with the server while cookies do. (You'll learn how to do it in mod 4).

The server would be the place to store user selected styles if logging in from different devices as cookies and local storage depend on a
specific browser.

```js
window.addEventListener('DOMContentLoaded', (ev) => {
  const modes = document.querySelector('#modes')
  modes.addEventListener('click', (ev) => {
    const selection = ev.target.id
    if (selection === 'light') {
      lightMode()
    } else if (selection === 'dark') {
      darkMode()
    }
    // Set item in localStorage
    localStorage.setItem('mode', selection)
    // With cookies
    document.cookie = `mode=${selection}`
  })

  // Retrieve item in localStorage
  const savedMode = localStorage.getItem('mode')

  // Retrieve item in cookies
  // const savedMode = document.cookie.split("=")[1];

  if (savedMode === 'dark') {
    darkMode()
  }
})
```
