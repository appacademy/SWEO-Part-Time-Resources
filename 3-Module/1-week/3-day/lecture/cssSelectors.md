# CSS Selectors

## Helpful Links

> You can use [this MDN reference](https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector) for more information on `selectors` and how to use them.

> Here is a list of [Psuedo-`Classes`](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-`classes`) from MDN!

---

A `CSS` `selector` applies styles to `elements`. There are a few basic types of `selectors`:

- `Type Selectors`: Matches `elements` by tag.

  ```css
  p {
      color: red;
  }
  li {
      font-size: 1.5em;
  }
  ```

- `Class Selectors`: matches `elements` by `class` name. You use a period to access a `class`.
  - Most common `selector` used in `CSS`.
  - Any number of `elements` can share a `class` so these give you the power to update the style of many `elements` at once.

  ```css
  .special {
      color: red;
  }
  .active {
      color: blue;
  }
  ```

- `ID Selectors`: matches `elements` by `ID`. You use a pound sign to access an `ID`.

  ```css
  #special {
      color: red;
  }
  #active {
      color: blue;
  }
  ```

- `Universal Selectors`: Apply style to all `elements`.

  ```css
  * {
      font-weight: bold;
  }
  ```

- `Attribute Selectors`: matches `elements` by attribute. You use square brackets to access an attribute.

  ```css
  [href] {
      color: green;
  }
  ```

### `Compound Class Selectors`

If you use more than one `class` on your `elements`, you can select them with a compound `class` `selector`.

```html
<div class="special active">
    <p>I am special and active!</p>
</div>
<div class="special">
    <p>I am special!</p>
</div>
<div class="active">
    <p>I am active!</p>
</div>
  ```

```css
/* Make sure you do not include a space here or that would change this to be a descendant `selector`! */
.special.active {
    color: red;
}
/* this style will only apply to the first div, because it has both the special and active `classes`. */
```

### `Combining selectors`

If you want to select many different `selectors` and apply the same style, just comma separate them.

```css
.special, .active {
    color: red;
}
```

If you want to apply a style to many `elements` of the same type, but only those with a certain `class` or `id`:

```css
div.special, p#info {
    color: red;
}
/* select all divs with the special `class` and all p `elements` with the info `id`. */
```

### `Combinators`

These can make your `CSS` files complicated, so use them sparingly, however they are very useful!

#### `Descendant Selectors`

In order to use this `selector`, you just use two `selectors` with a space between them. This will select all `elements` that are descendants of the first `selector`. (the child `elements` of the first `element`.)

  ```html
  <div>
    <span>Acronyms:</span>
    <p>Hello</p>
    <span>I love coding in the following languages!</span>
    <abbr title="HyperText Markup Language">html</abbr>
    <abbr title="Cascading Style Sheets">css</abbr>
  </div>
  <ul>
    <li>
      <abbr title="Graphics Interchange Format">gif</abbr>
    </li>
    <li>
      <abbr title="Technology, Entertainment, Design">ted</abbr>
    </li>
  </ul>
  
  ```

  ```css
  div abbr{
    text-transform: uppercase;
  }
  /* Only the text 'html' and 'css' will be uppercased, because it is in an abbr element that is inside of a div. 'gif' and 'ted' are not inside of a div, so wont be changed! */
  ```

#### `Direct Child Selector`

The `>` `selector` will select all **direct** children of the first `selector`.

```html
<div>
  <p>Hello I'm a paragraph!</p>
  <span>
    <p>Hello I'm a paragraph ins`id`e of a span!</p>
  </span>
</div>
```

```css
div > p {
  color: red;
}
/* This will only apply to the first p because it is a direct child of the div. The second p is a direct child of the span. */
```

#### `Adjacent Sibling Selector`

The `+` `selector` will select all **adjacent** siblings of the first `selector`. (this means that the second `element` directly follows the first `element`.)

```html
<h1>Big header</h1>
<h2>This one is styled because it is directly adjacent to the H1</h2>
<h2>This one is NOT styled because there is no H1 right before it</h2>
```

```css
h1 + h2 {
  font-style: italic;
}
```

### `Psuedo-Classes`

These specify a special state of the `element`. It's a `selector` followed by a colon folowed by the `pseudo-`class`` name.

```html
<div class="special">
  <p>I am special!</p>
</div>
```

```css
.special:hover {
  color: red;
}
/* Anytime we hover over the div with the special class, the text color will be red. */
```

### `Pseudo-Selectors`

These select 'pseudo' `elements` in the DOM. The 2 most common are `::after` and `::before`. They both **create** an `element` as a child of the `element` to which the property applies.

```html
<p>This is the first paragraph</p>
<p>This is the second paragraph</p>
<p>This is the third paragraph</p>
```

```css
p::before {
    background-color: lightblue;
    border-right: 4px sol`id` violet;
    content: ':-) ';
    margin-right: 4px;
    padding-left: 4px;
  }
/* This will add a ':-) ' at the beginning of each p. */
```
