# Flexbox

- Added to CSS because of the difficulty of performing simple positioning
- Use flexbox when you have a parent container with many direct children containers you would like to position

## How does flexbox work

- Flexbox positions elements along two axes, the main axis and the cross axis
- The main axis by default runs from left to right
- The cross axis by default runs from top to bottom
- DO NOT think about these axis in terms of X and Y, you will get confused once you change the main axis to be vertical for example
- The parent element that contains the `display: flex` property
is called the flex container
- The child elements inside the flex container are called flex items

## Working with flexbox

- `flex-direction`: this property will change the main axis, by default it is set to row. This means items will be aligned in  a row. If you change this property to `column` then the main axis will change to run from top to bottom. The items will then be positioned in a column
- `justify-content`: positions items along the main axis
- `align-items`: positions items along the cross axis
- `align-self`: overrides the align-items property from the parent container and aligns the individual flex item this property is applied to
- `flex-wrap`: sets whether the items are allowed to wrap to the next line or if they should be forced onto one line
- `align-content`: this property is used to distribute space differently between flex items along the cross axis (so if items wrap and go to the next row/column it would be the space between the wrapped row/column)
- `flex-flow`: combines the flex direction and flex wrap properties into one
