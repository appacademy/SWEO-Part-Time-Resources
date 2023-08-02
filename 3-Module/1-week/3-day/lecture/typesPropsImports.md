# CSS Types Properties and Imports

## Helpful Links

> You can use [this MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) for exhaustive list of CSS properties.

---

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
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
```
