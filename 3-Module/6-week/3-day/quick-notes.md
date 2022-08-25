## Cookies vs Local/Session Storage

- Cookies are small files, stored on the user's pc until browser is closed
  - Chrome makes this not always true, user settings can preserve cookies
- Web Storage are larger files, stored in browser cache (rarely cleared)
  - Local storage can persist for a long time (no expiration date)
  - Session storage is emptied when the browser closes
- **_Main difference:_** Local/session storage doesn't communicate with the server, cookies do (learn more in mod 4)

### Storage Example (session/local very similar)
- for local storage api: `document.localStorage`
- for session storage api: `document.sessionStorage`
```js
// Get the text field that we're going to track
let field = document.getElementById("field");

// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
  field.value = sessionStorage.getItem("autosave");
}

// Listen for changes in the text field
field.addEventListener("change", () => {
  // And save the results into the session storage object
  sessionStorage.setItem("autosave", field.value);
});
```

### Cookies Example
```js
const firstCookie = "favoriteCat=million";
document.cookie = firstCookie;

const secondCookie = "favoriteDog=bambi";
document.cookie = secondCookie;

document.cookie; // returns all cookies as a STRING

// -------removing cookie------
// specify the cookies "name" (the key) with an "=" to set to nothing
// and set the expiration date to the past
document.cookie = "favoriteCat=; expires = Thu, 01 Jan 1999 00:00:00 GMT"; //expired and removed

// document.cookie = `favoriteCat=million; expires = ${new Date(2023, 1, 1).toUTCString()}`; //expires next year

// document.cookie = `favoriteCat=million; max-age=15` //remove in 15 seconds

document.cookie; 
```

### Json's A Great Mover

- JSON methods are used to serialize and deserialize data
  - If it's not a string, JSONify it!

```js
const cart = { apples: 5, oranges: 3, bananas: 1000 };
localStorage.setItem('cart', JSON.stringify(cart));

// ...

let savedCart = localStorage.getItem('cart'); // null if DNE
if (savedCart) {
  savedCart = JSON.parse(savedCart);
}
```