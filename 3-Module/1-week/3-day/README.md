# `M3W1D3`

## `CSS`

To add an external stylesheet, you just need to link it in the `<head>` of your `HTML` doc.

```html
<head>
    <!-- -------------Header and Document Metadata!----------------- -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="w`id`th=device-w`id`th, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css-scratch.css">
    <!-- it doesn't matter what order these things are in, but adding this link will connect your `css` file. Use the relative path to your `css` file. (don't forget ./ is to look in your current directory and ../ is to move up a level.) -->
</head>
```

> You can add many stylesheets at the same time by linking them all or by importing them all to a single `CSS` file and linking that one.

---

## `CSS Rules`

A rule is the combination of a `selector` and a style.

```css
div {
    color: red;
}
/* from div to the closing brace, this is a rule. */
```

### `Specificity`

The rules of priority are:

- inline writes over everything... but we rarely want this. Avoid this.
- whichever has the most `IDs`, wins.
- if above equal, whichever has the most `classes`, `pseudo-classes`, and `attributes` wins.
- if above equal, whichever has the most `tags` (`a`, `div`, `h1`, etc.) wins.
- if above equal, whichever is added last in the file wins.

> **Inline styling is bad practice and should be avoided.**

Here are some examples and how they would be applied.

  <img src='https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/2022-May-W/3-Module/1-week/3-day/lecture/pics/cssSelectorExample.png' ref='css selectors example' width=600>
  <img src='https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/2022-May-W/3-Module/1-week/3-day/lecture/pics/csswinners.png' ref='css selectors example' width=600>

  # Css Selectors

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
# Css Types Properties and Imports

## `Fonts`

- `font-family`
  - This determines the font of your text. If you add several comma separated, it will use the next one in line if that font isn't available in the current browser. (not all computers have access to the same fonts!)
- `font-size`
  - This determines the size of your text. You can use two units to determine the size, absolute or relative.
    - `Absolute`:
      - **pt** (points: 1/72 of an inch)
      - **px** (pixels: 1/96 of an inch)
    - `Relative`:
      - **em** (font-size of the containing `element`)
      - **rem** (font-size of the root `element`)
- `font-style`
  - This determines the style of your text.
    - **normal**
    - **italic**
    - **oblique**
- `font-weight`
  - This determines the weight of your text.
    - **100 - 900**
    - **normal (400)**
    - **bold (700)**
    - **bolder (800)**
    - **light (300)**

  ```css
  p {
    font-family: 'Helvetica', sans-serif;
    font-size: 1.2em;
    font-style: italic;
    font-weight: bold;
  }
  ```

## `Text properties`

- `text-align`
  - This determines the alignment of your text.
    - **left**
    - **right**
    - **center**
    - **justify** (This is not allowed per WCAG 2.0)
- `text-decoration`
  - This adds decoration to your text.
    - **none** (removes current decoration)
    - **underline**
    - **overline**
    - **line-through**
    - **blink**
- `text-transform`
  - This changes the text to uppercase, lowercase, or capitalize.
    - **none**
    - **uppercase**
    - **lowercase**
    - **capitalize**

  ```css
  p {
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
  }
  ```

## `Background Images`

- `background-image`
  - This determines the image that is used as the background.
    - **url**(image.png)
    - **none**
- `background-repeat`
  - This determines how the background image is repeated.
    - **repeat**
    - **repeat-x**
    - **repeat-y**
    - **no-repeat**
- `background-attachment`
  - This determines whether the background image is fixed or scrolls with the page.
    - **fixed**
    - **scroll**
- `background-position`
  - This determines the position of the background image.
    - **top left**
    - **top center**
    - **top right**
    - **center left**
    - **center center**
    - **center right**
    - **bottom left**
    - **bottom center**
    - **bottom right**

```css
body {
  background-image: url(./lecture/pics/background.png);
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: top left;
}
```

## `Imports`

If you need to import something into your `CSS` file, such as a font or even another `CSS` file, you can use the @import directive in the top of your `CSS` file..

```css
@import url(https://fonts.googleapis.com/`css`?family=Open+Sans);
```
