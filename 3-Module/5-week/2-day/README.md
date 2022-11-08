# The BOM dot DOM

## BOM: Browser Object Model

- The window object is the highest level, all other objects exist within the window object

  - window.screen

  ```js
  window.screen.height; // 1080
  window.screen.width; // 1920
  window.screen.availHeight; // 977
  ```

- To access the document

  ```js
  window.document;
  ```

- You can also shorthand

  ```js
  document;
  ```

## DOM: Document Object Model

- What we deal with the most

- Document object is the Web Page, the DOM is the ordering within the document

## How the document is ordered

- window
  - document
    - head
      - children of the head in an array
    - body
      - children of the body in an array

### You have immediate access until the head and body

```js
window; // shows entire window object
window.document; // shows the entire document object
window.document.head; // shows the entire head object
window.document.body; // shows the entire body object
window.document.head.script; // undefined
window.document.body.div; // undefined
```

### From this point forward, .children is required to access the inner elements

```js
document.body;
```

```html
<body>
  <div id="header">...</div>
  <div class="section1">...</div>
  <div class="section2">...</div>
  <div class="section3">...</div>
</body>
```

---

```js
document.body.children;
```

```md
HTMLCollection(4) [div#header, div.section1, div.section2, div.section3]
```

---

```js
document.body.children[0];
```

```html
<div id="header">
  <h1>...<h1>
  <p>...</p>
  <p>...</p>
</div>
```

---

```js
document.body.children[0].children;
```

```md
HTMLCollection(3) [h1, p, p]
```

---

### If the element has an attribute (id, class, src) you can access it by .attributeName

```js
document.body.children[0].id;
```

```md
header
```

---

## Running on load

- Once the page has completely loaded, the code will run

  ```js
  window.onload = () => {
    // run whatever you want
  };
  ```