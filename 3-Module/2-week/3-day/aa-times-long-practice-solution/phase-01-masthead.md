# Basic Phase: The Masthead

![masthead][masthead]

In this first step, you will start with the HTML to create the masthead that you
see in the screenshot above. This screenshot is available for you to open and
refer to in **specifications/screenshots/masthead.png**. You may want to open it
and keep it around to refer to while you're working.

## Strategy: creating Web pages from mockups

In general, creating actual HTML from some image, mockup, or sketch, consists of
breaking the content into the rectangles that bound each visible section. Then,
you figure out how you can achieve that layout based on the technology available
to you and what you know.

Because HTML is a top-to-bottom kind of display, normally, it is nice to look
and see if you can spot different rows. Then, once you have the rows figured
out, you split them into columns to determine how to layout the elements. If
they form a nice grid (or grid-ish), then you should use the CSS Grid layout. If
they don't, then you should use block elements that contain sub-sections that
use the CSS Grid layout or the Flexible Box Model (flexbox).

Take a look at the masthead above to see if you can see rows of content. It
seems that there are three or four rows. When in doubt, start with the fewest
number of rows and, if that doesn't work, add more.

![masthead with rows]

Now, looking at each of the columns, it may or may not appear that the columns
are the same. If you can find common places to draw vertical lines across
all rows, then you're in luck and can use CSS Grid Layout which is, usually, the
easiest of the layouts to use.

![masthead with rows and columns]

As you get more and more experience with this type of visual decomposition, this
type of analysis will become second-nature to you. When you're starting out,
though, it really can help to have real-life print-outs of these mockups so that
you can draw the rows and columns as you see fit

To get started making those rows, it's time to open the **index.html** and start
filling it in.

## Pro-tip: using Emmet

Open **index.html** in Visual Studio Code. It's a nice empty file just waiting
for you to put code in it. Visual Studio Code comes with a nice code completion
feature named _Emmet_ that has good built-in templates. Try typing just "html"
in that file (without the quotation marks). You should see a drop down that
suggests different types of completion.

![emmet html5 completion]

Either click the one that reads "html:5" with your mouse, or select "html:5"
from the dropdown using your arrow keys, and press Return (or Enter, whatever
is on your computer). When you do that, it inserts the following code into
your text editor for you!

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

Please change the title of the document to "App Academy Times". Now, you're
ready to figure out that structure.

In the head, link in the **main-styles.css** file. Don't forget to set the `rel`
attribute to "stylesheet", otherwise the browser won't treat the CSS as CSS.
If you don't get the value for the `href` property correct, it won't correctly
load the style sheet and your styles won't show up.

Most Web pages have a page header section, a main section, and a footer section.
It doesn't hurt to always put those in there so that you can structure your
documents so that everyone knows that's what's there. Luckily, HTML gives you
those three tags to use: `header`, `main`, and `footer`. Go ahead and put those
in the body of your document as _siblings_ to one another.

```html
<header></header>
<main></main>
<footer></footer>
```

While an HTML document should ever have one and only one `main` element, the
`header` and `footer` elements can appear elsewhere in the document, usually in
`section` tags where sections have some kind of header or footer. But, when the
`header` and `footer` are direct children of the `body` tag, that implies that
they are the `header` and `footer` for the entire document.

In the **global.css** file, set the maximum width for the `header`, `footer`,
and `main` elements to be 1400 pixels per the measurement in the **styles.md**
file. Also, set `margin` to "auto" so that they center within the body. Finally,
set some horizontal `padding` of 40px on the left and right.

The `body` element should use "arial, helvetica, sans-serif" as its font family
with a line height of "1em". You can set that latter property using the
`line-height` property. Put those settings in the **global.css** file, too.

## Three rows, three columns, one masthead

The masthead is in the header of the document. That means that structure that
you'll put into place will go in the `header` element. There are nine regions.
Content is in the four corners and the two lower center regions. A nice way to
approach this is to start with the structure that puts things in their right
places. After you get those in place, you can start filling it in with the
correct words and images.

First, structure. In the `header` element, create a `div` element with the class
name of "masthead." Then, create six child `div` elements inside `.masthead`.
These six elements will contain the content of each of the six regions that have
content. Put some unique text in each of them to figure out which of the blocks
they are with respect to the content you see in the screenshot. Perhaps you
could have something like this:

```html
<div class="masthead">
  <div>menu and search</div>
  <div>action buttons</div>
  <div>little technologies</div>
  <div>date</div>
  <div>logo</div>
  <div>today's paper</div>
</div>
```

If you open your **index.html** in your browser, you should just see six lines
of very plain text.

> Pro tip: When trying to get a layout to look correct when you don't have
> any content to show, you can use a tool like the Chrome extension [pesticide]
> to show you the borders of your elements without interfering with your
> actual layout.

Now, open the **masthead.css** file. In there, create a CSS rule for the
elements with the "masthead" class that sets its display to use CSS grid layout
and declares a grid with three equally-sized columns. Refresh your page. The
six lines of text should now layout as two rows of three equally-sized columns.

Refer to the readings on CSS Grids if you get stuck.

![six regions in two rows]

(Ignore any difference in font families at this stage.)

It's now time to get them into three rows and in the correct positions.

Add class names to each of the six child `div` elements of `.masthead`. For
example, the solution uses the following class names for the six regions.
However, you should feel empowered to name them to whatever makes sense to you
and your pair!

* masthead__menu-and-search
* masthead__actions
* masthead__technologies
* masthead__date
* masthead__logo
* masthead__paper

Once you have those properly labeled, go back to the **masthead.css** file.
Create CSS rules for the six new classes. Position them correctly across the
grid.

![six regions in three rows]

Don't forget we are trying to end up with this layout:

![masthead with rows and columns]

Again, refer to the readings on CSS Grids if you get stuck.

With this, you have the masthead layout correct. Now, it's just time to put some
content in there and style it accordingly.

## The menu and search icons

These two icons are from the Font Awesome library. To include that, you need to
add another `link` to the `head` element that will import the Font Awesome
stylesheet. The URL to use is in the **specifications/text/styles.md** file.

It's generally good practice to place the `link` elements that load third-party
resources _before_ the `link` elements that load your own stylesheets. This
prevents some other style from inadvertently overriding yours.

Once you have that linked in there, replace the words "menu and search" of the
div that appears in the upper-left corner with the following HTML.

```html
<div>
  <i class="fa fa-bars"></i>
</div>
<div>
  <i class="fa fa-search"></i>
</div>
```

That will get rid of the words and show the icons.

To style those icons, Font Awesome recommends that you wrap them in your
elements and, then, apply styles to those elements that you wrap them in. That's
why those `div` elements are there. Both of these elements are going to be
clickable icons in your masthead. Because of that, you should come up with a new
CSS class name for the masthead button icons. Add that class to both of the
`div` elements surrounding the icons. Here are the specifications for masthead
button icons. If you forgot about how to set padding (because there's at least
four ways to do it), here's the [link to padding] on MDN.

| Property                   | Value                                                 |
| -------------------------- | ----------------------------------------------------- |
| Font size                  | 11 pixels                                             |
| Horizontal padding         | 9 pixels left and right                               |
| Vertical padding           | 7 pixels top and bottom                               |
| **Hover** background color | lightest gray (refer to **styles.md** for this value) |

Once you set those for the new CSS class, your icons should look fancy.

Make sure you note that our background color should only appear when
you hover over the icons.

What you need to do is layout the `div` elements in a row. You can do that by
setting their `display` property to "inline-block" or by setting the parent
`div` element's `display` property to "flex". The solution uses the "flexbox"
version. Since we want the buttons to align in the middle of this div you might
consider using `align-items` to center them vertically if you are using
"flexbox".

Finally, add 20 pixels of padding to the left of the `div` element that contains
the icons.

![masthead menu and search icons]

## The action buttons (upper right corner)

All buttons on this Web page have a common style. The specification for them is
in the **styles.md** file. Create a rule for the `button` selector in the
**global.css** file and make it match the specifications in **styles.md**.

The content for the upper right corner is three elements:

* a button with the text "Subscribe Now"
* a button with the text "Log In"
* a masthead icon button with the Font Awesome icon `<i class="fas fa-cog"></i>`
  (Remember to use the same markup you used for the other icons on the left side
  of the masthead)

Once you add that, you should be able to refresh the page and see the three
elements!

Use flexbox to get those three elements into a row and aligned right. Remember
that when you "justify content" in a flexbox container, you don't use directions
like "left" and "right"; instead, you use "flex-start" and "flex-end". Also
these icons should be vertically centered too, so you should use the same
`align-items` as you did on the other masthead icons.

![masthead action buttons]

## Fix the height of the first row

When compared to the specification, there is missing `padding` above and below
the buttons we just added. Setting the `height` of either `div` element that
contains the buttons should change the `height` of the entire row. You could
also add `padding` to one or both of the `div` elements. Because they are part
of a grid, setting the `height` of one affects the other. Try out different
amounts until it looks right to you and matches the specification.

## The little technology text

In the `div` that's in the center of the grid, put another `div` element that
contains four `span` elements containing the text "CSS", "HTML", "JavaScript",
and "Python." Add some classes names to these new elements so that you can make
the text transform to upper case, have a font size of 10 pixels, and have a text
color of dark gray (refer to **styles.md** for the actual hexadecimal value).
Put some margin between the `span` elements to space out the words nicely. Make
sure it's all centered.

You'll come back later to add the fancy little border over the top of the words.

## The last row

Put the logo in the middle of the bottom row with an `img` element. The image is
in the **images/** directory. Use flexbox or `text-align` to center it in the
middle.

In the bottom-left corner, put the date in there. You can get the text from the
**specifications/text/01_masthead.txt** file. Or, you can just type it in there.

In the bottom-right corner, put the content `<i class="far fa-newspaper"></i>
Today's Paper`.

The text in the two bottom corners should be 11 pixels high.

The CSS Grid Layout has vertically stretched the `div` elements in the bottom
row. For the two in the bottom corners, set the `display` property to "flex."
Then, use `align-items` to get them to the bottom of the element using the
"flex-end" setting. For the `div` that contains the text "Today's Paper", have
it justify its content to "flex-end." That should do that part.

Finally, it seems that the third row needs some more height to push it away from
the little technology words. Add some padding to the top of the `div` element
that contains the logo.

![masthead nearly finished]

## The cute little borders

For the three elements that run across the bottom of the grid, add a 1 pixel
border on the bottom of those elements with the light gray color (refer to
**styles.md** for the actual hexadecimal value). This step reveals that there
needs to be some `padding` between the text in the bottom corners and the line.
It also shows that there needs to be a little more `padding` between the logo
and the line. Add that `padding` to the correct `div` elements that fill those
regions. The solution applies 11 pixels of `padding` to the bottom of the `div`
elements along the bottom row.

For those same elements, apply a border to the top of those elements with the
same size, color, and style.

![masthead borders nearly done]

To the `div` element that contains the four technology words, apply a border
to the top, left, and right of it with the same style that you added in the
previous two steps. Right now, that `div` spans the entire width of its parent
element. On the parent element, apply a flexbox layout and justify the content
to the center.

![masthead border riser nearly done]

All you have to do is now nudge that `div` down by one pixel. You can do that
with relative positioning! (You'll also need to set the background color to
white so that it correctly covers the border line beneath it.) And, that's it!
Masthead complete!

![masthead complete]

Make sure your HTML and CSS is as neat as possible. The HTML should be indented
consistently. spacing is applied consistently, and the code is fairly terse.
The CSS should be consistently indented and aligned. And the properties in each
of the rules are in alphabetical order. These little things make huge
differences later for maintainability. Try to be neat with your programming.

Now, it's on to the next step!

[masthead]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead.png
[masthead with rows]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-marked-with-rows.png
[masthead with rows and columns]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-marked-with-rows-and-columns.png
[emmet html5 completion]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/visual-studio-code-emmet-html5.png
[six regions in two rows]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/six-regions-in-two-rows.png
[six regions in three rows]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/six-regions-in-three-rows.png
[masthead menu and search icons]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-menu-and-search-icons.png
[masthead action buttons]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-action-buttons.png
[masthead nearly finished]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-nearly-finished.png
[masthead borders nearly done]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-borders-nearly-done.png
[masthead border riser nearly done]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-border-riser-almost-done.png
[masthead complete]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-complete.png
[pesticide]: https://chrome.google.com/webstore/detail/pesticide-for-chrome-with/neonnmencpneifkhlmhmfhfiklgjmloi
[link to padding]: https://developer.mozilla.org/en-US/docs/Web/CSS/padding