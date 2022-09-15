# `M3W1D4`

## `Box Model`

Everything in `HTML` has a box around it. 

<img width='500' src=./lecture/pics/boxModel.png ref='box model'>

- You can change the size of the content with width and height.
- You can change the padding, border and margin using those properties respectively.

### `Default Settings`

For certain elements like `div`, `header`, and `p` (etc.) the default display value is `block`.

- `Display: block`
  - box will fill all the space available.
  - Each new box appears on a new line
  - the `padding`, `margin` and `border` will push other elements away from the box.

Other elements like `span`, `a`, and `img` (etc.) have a default display value of `inline`.

- `Display: inline`
  - each box will appear next to each other in a single line until available space is reached.
  - `width` and `height` don't apply.
  - `padding`, `margin` and `border` don't push other `inline` boxes away.

## `Standard Box Model vs border-box`

### `Standard Box Model`

- **`width` and `height` refers to box's content**
- `padding` `border` and `margin` get added to the **total size of the actual box**, if they are removed *the box size will be smaller*, but **the width and height of the content will be the same**
- this means that the size of the box will be the size of the content **plus** the `padding`, `border` and `margin`.

```css
.box {
  border:  10px solid black; /* Applies to all four sides. */
  height:  100px; /* Content's height */
  margin:  50px;  /* Applies to all four sides. */
  padding: 25px;  /* Applies to all four sides. */
  width:   250px; /* Content's width */
}
```

<img src=./lecture/pics/standardBoxModel.png ref='standard box model' width='500'>

### `box-sizing: border-box`

- **`width` and `height` refers to the actual box**
- `padding`, `border`, and `margin` are included in the `width` and `height` properties.

```css
.box {
  border:  10px solid black; /* Applies to all four sides. */

  box-sizing: border-box; /* <== This is the important part. */

  height:  100px; /* Sum of content + top/bottom padding + top/bottom border */
  margin:  50px;  /* Applies to all four sides. */
  padding: 25px;  /* Applies to all four sides. */
  width:   250px; /* Sum of content + left/right padding + left/right border */
}
```

<img src=./lecture/pics/borderBox.png ref='border box' width='500'>

### `display: inline-block`

- used to layout block elements left to right in a single row.
- still takes into account the width and height properties.

---

#### `Padding`

- adds space between the `border` and the `content`
- can be a length (`px`, `em`, `rem`) or a percentage
- `background-color` and `background-image` will be applied to both `content` and `padding`

#### `Border`

- is located between the `padding` and `margin`
- values are `border-width`, `border-style`, `border-color` in that order.

#### `Margin`

- adds space outside of the `border` on the edge of the `element`
- can be a length (`px`, `em`, `rem`) or a percentage
- can be used to center `elements` using the `auto` value

> Most `properties` that have a `top`, `bottom`, `left`, and `right` value (like `padding` and `margin`) that can be customized will use the following format for the shorthand:
> - `1` value applies to all sides
> - `2` values apply to `top & bottom`, then  `left & right` in that order
> - `3` values apply to `top`, `left & right`, then `bottom` in that order
> - `4` values apply to `top`, `right`, `bottom`, `left` in that order

---

## `Colors`

The CSS property `color` updates the **text color** and the CSS property `background-color` updates the **background color**

- Can use the **name of a color** (*not used very often*), **hex value**, or **rgb value** (*used most often*).
- Can use the `rgba()` function to specify **transparency**.

### `Shadows`

There are two types of shadows:

- `box-shadow`
  - applies to `HTML` elements
  - expected `values` are:
    - none
    - `2` lengths and a color
      - `horizontal/vertical offset`
    - `3` lengths and a color
      - `horizontal/vertical offset/blur-radius`
    - `4` lengths and a color
      - `horizontal/vertical offset, blur radius, spread radius`
- `text-shadow`
  - applies to text
  - expected `values` can be lengths first or color first:
    - `2` lengths and a color
      - `horizontal/vertical offset`
    - `3` lengths and a color
      - `horizontal/vertical offset/blur-radius`

### `Opacity`

Can make entire `elements` transparent by using the `opacity` property.

- expects a value between `0` and `1` (0 is completely transparent, 1 is completely opaque)

---

## `Positioning`

Allows your to manipulate where an element will appear on the page.

Can accept 1 of 5 values:

- `static`
  - default position value
  - appears on page according to page flow

    ```css
    #pink-box {
      background-color: #ff69b4;
      position: static;
    }
    ```

    <img src=./lecture/pics/static.png ref='static' width='500'>

- `relative`
  - `element` will be positioned *relative* to its `parent element`.
  - can be offset using `top`, `right`, `bottom`, `left`, and `z-index` (*forward and back*) properties.
  - the above properties expect a length (`px`, `em`, `rem`) or a percentage.

    ```css
    #pink-box {
      background-color: #ff69b4;
      bottom: 0;
      left: -20px;
      position: relative;
      right: 0;
      top: 0;
    }
    ```

    <img src=./lecture/pics/relative.png ref='relative' width='500'>

- `absolute`
  - `element` is removed from the page flow
  - positioned in relation to closest **positioned** ancestor `element`
  - other `elements` will not be affected by this element
  - can be offset using `top`, `right`, `bottom`, and `left` properties (*stacking context applies*)

  ```css
  .container {
    background-color: #2B2D2F;
    position: relative;
  }

  #pink-box {
    position: absolute;
    top: 60px;
  }
  ```

  <img src=./lecture/pics/absolute.png ref='absolute' width='500'>

- `fixed`
  - `element` is removed from the page flow
  - positioned relative to the <html> doc itself.
  - can be offset using `top`, `right`, `bottom`, and `left` properties (*stacking context applies*)
  - will remain in the same position even if the page is scrolled.

  ```css
  #pink-box {
    background-color: #ff69b4;
    left: 300px;
    position: fixed;
    top: 15%;
  }
  ```

  <img src=./lecture/pics/fixed1.png ref='fixed' width='500'>
  <img src=./lecture/pics/fixed2.png ref='fixed' width='500'>

- `sticky`
  - `element` remains in its original position in the page flow
  - positioned relative to closest block-level ancestor and any scrolling ancestors
  - behaves as a relatively positioned element until you scroll past it in the viewport.
  - must set to stick using either `top`, `right`, `bottom`, and `left` properties (*stacking context applies*)
  - is relative until the stick point is reached, then is fixed afterward

  ```css
  #pink-box {
    background-color: #FF69B4;
    position: sticky;
    top: 60px;
  }
  ```

  <img src=./lecture/pics/sticky1.png ref='sticky' width='500'>
  <img src=./lecture/pics/sticky2.png ref='sticky' width='500'>

---

## `Project Time`
