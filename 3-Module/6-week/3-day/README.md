# Browser Storage Key Notes

## Lot's of data? Use a database!

- Large pieces of data should be stored on a database
  - Mod 4 here we come!

## Cookies vs Local/Session Storage

- Cookies are small files, stored on the user's pc until browser is closed
  - Chrome makes this not always true, user settings can preserve cookies
- L/S Storage are larger files, stored in browser cache (rarely cleared)
  - Local storage can persist for a long time (no expiration date)
  - Session storage is emptied when the browser closes
- **_Main difference:_** Local storage doesn't communicate with the server, cookies do (learn more in mod 4)

 <img src='https://i.ibb.co/Lthcwb1/Screenshot-2023-01-25-160318.png' ref='serif' width='650'>


 ## Some syntax of accessing cookie properties in JavaScript:

- Writing cookie:
```js
// For normal use without the optional fields
document.cookie = "name=value";
```

```js
// For all the fields
document.cookie = "name=value; expires=date;
domain=domain_name; path=website_name; secure";
```
- Reading cookies:
```js
let cookieVal = document.cookie;
```

## Local storage has 4 methods:

- setItem() Method – This method takes two parameters one is key and another one is value. It is used to store the value in a particular location with the name of the key.
```js
localStorage.setItem(key, value)
```

- getItem() Method – This method takes one parameter that is key which is used to get the value stored with a particular key name.
```js
localStorage.getItem(key)
```

- removeItem() Method – This is method is used to remove the value stored in the memory in reference to key.
```js
localStorage.removeItem(key)
```

- clear() Method – This method is used to clear all the values stored in localstorage.
```js
localStorage.clear()
```

## Session storage has 4 methods:
- setItem() Method – This method takes two parameters one is key and another one is value. It is used to store the value in a particular location with the name of the key.
```js
sessionStorage.setItem(key, value)
```

- getItem() Method – This method takes one parameter that is key which is used to get the value stored with a particular key name.
```js
sessionStorage.getItem(key)
```

- removeItem() Method – This is method is used to remove the value stored in the memory in reference to key.
```js
sessionStorage.removeItem(key)
```

- clear() Method – This method is used to clear all the values stored in sessionStorage.
```js
sessionStorage.clear()
```

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
