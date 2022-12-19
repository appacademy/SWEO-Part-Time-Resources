
## ``Flexbox``

> `Helpful Links`<br>
[Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

`Flexbox` allows you to display items inside of a container so that the layout is responsive.

To use `flexbox` you just set the display of your parent element to `display: flex;`.

- by default items will try to fit on one line (row)
- to get items to wrap use `flex-wrap: wrap;`
- to get items to be in a column instead of row use `flex-direction: column;`
- can combine these with the `flex-flow:` property.

### `Alignment and Spacing`

#### `Justify Content`

- Used to `align items` horizontally

**Options**:

- `flex-start`: `align items` from left to right
- `flex-end`: `align items` from right to left
- `center`: `align items` to be centered
- `space-between`: `align items` with the same amount of space between each item
- `space-around`: `align items` with the same amount of space around each item (on both sides)
- `stretch`: grow or shrink to fit available space

#### `Align Items`

- used to `align items` vertically

`Options`:

- `flex-start`: top to bottom
- `flex-end`: bottom to top
- `center`
- `stretch`

#### `Gap`

- defines amount of space between items

### `Flex-Direction`

When you're using the default `flex-direction` (row), `justify content` and `align items` work as written above. If you change the direction to be column, then `justify content` will apply to the vertical and `align items` will apply to the horizontal. They get flipped.

### `Resizing`

- `flex-grow`: dictates how much space items should take up in the parent container. 0 means no growth at all. 1 means grow to fill as much space as possible
- `flex-shrink`: Opposite of grow, value of 1 means to shrink as necessary, value of 0 means not to change size.
- `flex-basis`: set the default size of an element.

### `Homework`

Please look over your readings for today and homework for tomorrow, I would **highly suggest** reading through the `flexbox guide` linked above. Open one of the projects from last week and try to use `flexbox` on a parent element with children elements inside of it to practice!
