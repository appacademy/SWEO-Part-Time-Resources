## Basic Design Principles
- [Reading link](https://open.appacademy.io/learn/js-py---pt-jun-2022-online/week-13---html-and-css/design-principles)
- Common ones to understand
  - `White Space`
  - `Colors`
  - `Typography`
  - `Conventions`
- Given an image of a snippet of a website, determine which principle fails here (i.e. not enough white space, misuse of colors, etc.)


## HTML
- [Reading link](https://open.appacademy.io/learn/js-py---pt-jun-2022-online/week-13---html-and-css/basics-of-html)

- HTML Semantics
  - Elements
  - Tags
  - Attributes
  - Understand when to use which element
    - MDN is your friend here, look up elements you do not know
    - i.e. what element should we use for text w/ link? (anchor element -> `a` tag)


## CSS

### CSS Selectors
- [Reading link](https://open.appacademy.io/learn/js-py---pt-jun-2022-online/week-13---html-and-css/css-selectors)

- Different Selectors and Combinators we covered

- CSS Selector Order Specificity
  - Inline, id, classes, tags, etc.
  - Be able to determine which selector / combinator is prioritized
  - Given a combination of selectors, calculate which one has priority
    - i.e. "ul li" vs. "div.ele #item"

- Given this prompt... use x selector (like descendant) to change y...

### CSS Properties: Fonts
- [Reading link](https://open.appacademy.io/learn/js-py---pt-jun-2022-online/week-13---html-and-css/css--type--properties-and-imports)
  
- Differences between serif vs. sans-serif fonts.
  
- Different font properties i.e. `font-family`, `font-size`, `font-style` (and more...)

- Unit of measurement
  - Absolute vs. relative (px/pt vs. em)


### CSS Properties: Box Model
- [Reading link](https://open.appacademy.io/learn/js-py---pt-jun-2022-online/week-13---html-and-css/the-box-model)

- Understanding Box Sizing (what happens to `borders` and `paddings` if `box-sizing:border-box` is applied?)
- Box Model
  - Margin (wrappings)
  - Border (box)
  - Padding (foam, cushion)
  - Content (our item)


### CSS Properties: Positioning
- [Reading link](https://open.appacademy.io/learn/js-py---pt-jun-2022-online/week-13---html-and-css/css-positioning)

- `position` property and its values
  - static
  - relative
  - absolute
  - fixed
  - sticky
- How to move the selected element around
  - `top`
  - `right`
  - `bottom`
  - `left`
- Understanding flow
  - What it means to be out of the flow
  - Which `position` values will take the element out of the normal flow?


### CSS Properties: Colors Borders and Shadows
- [Reading link](https://open.appacademy.io/learn/js-py---pt-jun-2022-online/week-13---html-and-css/css--colors--borders--and-shadows) 
  
- Colors
  - RGBA colors
    - how to adjust the transparency for RGB
      - 0: transparent (can see through)
      - 1: full (has the color)
  -  Hex colors
  -  What is the color black in RGBA and in Hex colors?

  - `color` vs `background-color` property. (hint **NO** such thing as `text-color`)

- Borders
  - Border properties:
    - 3 common ones: `border-style`, `border-width`, `border-color`

- Shadows
  - Properties like `box-shadow`
  - How to adjust shadow using `box-shadow`
