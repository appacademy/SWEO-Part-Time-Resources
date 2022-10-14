# Practice: Box Model

Now, it's time to practice your understanding of the **CSS Box Model**.

## Set up

Clone the practice from the [starter].

Once you've in VS Code, you can drag the __index.html__ file into your browser
to view the webpage, or use the **File Explorer** to open it in your browser.
The only file you will need to edit for this practice is __main.css__.

> Remember to save the CSS file and refresh the page in the browser whenever you
> make changes.

## Background and Context

You will begin with a web page that has all of the HTML and a little CSS
completed. You only need to add to the CSS to complete each phase.

## Phase 1 - Logo and header side-by-side

The first step is to make the logo a size similar to the heading text. It looks
like `30px` for both horizontally and vertically should work. Please add styles
to `#logo` to set the logo's size.

The second step is to get the `h1` tag to NOT fill the full width of the screen.
By default every `h1` is a `block`, but in this case you need it to be `inline`.
Please add the appropriate style to the `h1` tag to make this happen.

Next, you will notice the logo looks just a little lower than the title, so you
will want to adjust the margin on the bottom to push it up by a few pixels.

## Phase 2 - Sizing boxes

Now, it's time to explore resizing of `block` components, like `<div>`, and
setting the blank space inside and outside of their borders.

First, add a border to the `.box` class. Please give it these settings:

* `dotted` style
* `black` color
* `4px` thickness

Also, please set the `background-color` to a nice looking shade of yellow (your
choice for the specific color).

Next, set the `width` and `height` to 120 pixels.

Now, add a 10 pixel `margin` to get the boxes off the left edge and no longer
"touching" each other.

Then, set a 20 pixel `padding` to make the words inside stop touching the
border.

This time when you view your change, take a careful look at words inside each
box. You'll notice they describe the expected size. Please modify the
`.alternate` class to make the sizing on the second box behave differently.
Specifically, so the width goes from border to border, rather than being the
width of the internal content (like the first box).

Finally, the boxes would look better side-by-side (instead of stacked
vertically). Add the appropriate `display` style to make that happen.

## Phase 3 - Centering quote box

Now, you can turn your attention to the quote at the bottom of the page.

The first step is to make the grey box only as wide as the quote itself.
Therefore, you will need to add a style to `.quote` to set an appropriate
`width`.

> Hint: Using pixels, rems, or other fixed values might cause trouble if the
> user changes the zoom in their browser. A percentage also doesn't work well
> because it changes as the browser is resized. However, there is a special
> word created in CSS especially for this case. It is your mission to find it.
> The [MDN docs for width] or other online resources may help.

Next, please center the box and place it approximately 10 pixels from the bottom
edge of the page.

> HINT: Margin has settings specifically for this use case.

Please put some blank space around the text. 40 pixels should look good.

Finally, you need to force the `span` tag that holds the person's name to display
on its own line. Please add a style to the `.attribution` class to turn it from
inline (the default for `<span>`) to a block.

## What you've learned

Congratulations! You have successfully practiced the core styles associated
with the **CSS Box Model**. This includes setting

* Block sizes using `width` and `height`, including the value of `fit-content`
* `display` with values of `inline`, `inline-block`, and `block`
* `margin` with single and multiple values, including `auto`
* `border`
* `background-color`
* `padding`
* `box-sizing`

[starter]: https://github.com/appacademy/practice-for-week-07-css-box-model
[MDN docs for width]: https://developer.mozilla.org/en-US/docs/Web/CSS/width