# Browser Storage Key Notes

## Thicc data? Use a database!

- Large pieces of data should be stored on a database
  - Mod 4 here we come!

## Cookies vs Local/Session Storage

- Cookies are small files, stored on the user's pc until browser is closed
  - Chrome makes this not always true, user settings can preserve cookies
- L/S Storage are larger files, stored in browser cache (rarely cleared)
  - Local storage can persist for a long time (no expiration date)
  - Session storage is emptied when the browser closes
- **_Main difference:_** Local storage doesn't communicate with the server, cookies do (learn more in mod 4)

## Json's A Great Mover

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