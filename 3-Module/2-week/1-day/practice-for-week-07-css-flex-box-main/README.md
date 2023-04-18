# Practice: CSS Flexible Box Model

Now, it's time to put into practice what you've learned about flexbox CSS.

## Set up

Clone the practice from the [starter].

Once you've in VS Code, you can drag the __index.html__ file into your browser
to view the webpage, or use the **File Explorer** to open it in your browser.
The only file you will need to edit for this practice is __main.css__.

> Remember to save the CSS file and refresh the page in the browser whenever you
> make changes.

## Background and Context

To complete this practice, you only need to modify __main.css__ by adding
flexbox-related CSS at the places marked with `/* // Your code here */`.

> Hint: You can refer to the readings or [A Complete Guide to Flexbox][2] as
> needed.

## Phase 1: Center content inside a div

In __main.css__, you'll find the CSS selector for `.example1`. Your goal is to
add the appropriate `display`, `align-items` and `justify-content` styles in
order to center the number, both horizontally and vertically, inside the
yellow box.

### Mockup of expected Phase 1 result

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-flexbox/phase1-mockup.png"
    width="224"
    alt="Number 1 centered in yellow box"
/>

## Phase 2: Vertically center a form label, input field, and button

In __main.css__, you'll find the CSS selector for `.example1`. Please add the
appropriate CSS styles to set the flexbox so that...

* The div is the width of the content, not the page.
* The space between the items is `8px`.
* All 3 items are centered vertically.

> Hint: An `inline` div will adjust to the width of its contents by default.

### Mockup of expected Phase 2 result

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-flexbox/phase2-mockup.png"
    width="436"
    alt="Vertically centered form elements"
/>

## Phase 3: Row of quotes

In __main.css__, you'll find the CSS selector `.example3` which is already set
to a `flex` display as a row. Please edit the CSS selector for the items
contained in the div for example 3 (specifically, `.example3 > div`), in order
to make them each fill 1/3 of the flexbox area.

> HINT: You need to resize the width of your browser to confirm the boxes look
> good at their smallest size (`min-width`) as well as their largest size 
> (`max-width`) which have already been included in __main.css__ (under the
> `.example3` selector).

Next, please also set the layout and alignment of the items so the name of the
person who said the quote is in the bottom right of each purple box.

> Hint: A flexible layout with the appropriate direction, alignment and
> justification is all you need (`display`, `flex-direction`, `align-items`,
> `justify-content`). The best way to figure this out is experimentation!

### Mockup of expected Phase 3 result

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-flexbox/phase3-mockup.png"
    width="1002"
    alt="Quote boxes with attribution in bottom right"
/>

## Phase 4: Stretch content area to the right of a sidebar

Finally, find the `.example4` and `.sidebar` css selectors in __main.css__.
Then add the appropriate flexbox CSS to each to set

### Mockup of expected Phase 4 result

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-flexbox/phase4-mockup.png"
    width="1002"
    alt="Buttons on the left and quote on the right"
/>

## What you've learned

You have used a number of Flexbox-related CSS styles including

* `display: flex` and `display: inline-flex` to trigger flexbox layouts
* `align-items` and `justify-content` with different settings
* `flex-direction` and `gap` for rows vs. columns and spacing between items
* `flex` to control the stretching of specific items inside a flexible layout

[starter]: https://github.com/appacademy/practice-for-week-07-css-flex-box
[2]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/