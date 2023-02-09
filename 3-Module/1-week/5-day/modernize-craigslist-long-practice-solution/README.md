# Long Practice: Modernize Craigslist With CSS Attributes

Craigslist is a notoriously under-designed and also very successful website. Its
table-like design, gray panels, and royal blue hyperlinks hearken back to the
early days of the Internet. It might be a blast from the past, but with a few
simple style tweaks we can bring Craigslist into the modern world.

In this practice, you will use CSS attributes to update the styles on an example
Craigslist homepage. Use what you've learned about HTML attributes and CSS
selectors to apply styles to various DOM elements.

## Set up

Clone the practice from the [starter].

Once you've in VS Code, you can drag the __index.html__ file into your browser
to view the webpage, or use the **File Explorer** to open it in your browser.

> Remember to save the CSS file and refresh the page in the browser whenever you
> make changes.

## Background and Context

In some of the instructions, you will be given the name of a CSS property that
you are to use. You can use the [MDN CSS Reference] to help you figure out how
to use those properties. Once a property has been introduced to you, following
instructions that use it will not refer to the property, again.

## Objective

The objective of this practice is to re-skin the Craigslist homepage to use a
more modern design aesthetic. Visit [craigslist.org][1] to see the most current
version of the site. The following two screenshots show Craigslist's current
homepage and an updated homepage, respectively.

**Current Craigslist homepage:**

![Craigslist screen shot](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/craigslist-homepage-example.png)

**A more modern Craigslist homepage:**

![Updated Craigslist page](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/craigslist-homepage-updated.png)

The **index.html** file contains all the HTML for the example Craigslist
homepage. Write all of your CSS for the page in **main.css**, which is linked in
the HTML file.

## Phase 1: Add initial page styles

Your Craigslist page should be bare-bones HTML at this point. Add the following
initial styles to the page in your **main.css** file to make it look better:

Use the **universal selector** to make all elements:

- Use the font "Helvetica Neue", "Helvetica", sans-serif
- Have a background color of Whitesmoke (#F5F5F5)
- Have a text color of Charcoal Gray (#464646)

Use **tag selectors** to:

- Remove the underline text decoration on all anchor tags by using the
  `text-decoration` property
- Give all UL elements 0 padding using the `padding` property

Use a **child combinator selector** to:

- Remove the bullet points on all LI elements that are direct children of UL
  elements using the `list-style` property

## Phase 2: Style hovered-on and visited links

Use **pseudo-classes** on all ```<a>``` tags to:

- Have the Craigslist purple color #800080 when they are visited
- Have a font weight of bold and color #800080 when they are are hovered

Use **pseudo-classes** on all ```<span>```s that are direct children of ```<a>``` tags to:

- Have a font weight of bold and color #800080 when they are are hovered

## Phase 3: Style the main page sections

There are three main sections in the body of the page, represented by the HTML
elements with these IDs: "leftbar", "center" and "rightbar". Style their
container, represented by the element with the class name of "page-container",
as well as the three main sections, according to the specs below.

Use a **class selector** to select the element with the class "page-container"
and:

- Give the container a maximum width of 1200 pixels using the `max-width` property

Use **ID selectors** to style the elements with the IDs "leftbar", "center", and
"rightbar" so that:

- They are all floated left using the `float` property
- They all have top/bottom padding of zero and left/right padding of 30 pixels
  using the `padding` property
- They all have a box sizing of _border box_ using the `box-sizing` property

Use a **tag selector** on the FOOTER element to:

- Make the footer clear the float in both directions using the `clear` property

Use **ID selectors** to select the elements with the IDs "leftbar" and
"rightbar" and:

- Give them a width of 25%

Use an **ID selector** to select the element with the ID "center" and:

- Give it a width of 50%
- Give it a solid one pixel border in the color #464646
- Give it a border radius of ten pixels using the `border-radius` property

Use a **child combinator selector** to style all DIVs that are direct children
of the element with the "center" ID:

- Float them to the left
- Give each of them a width of 33%

Use a **descendant combinator selector** to style the H2 that is a descendant of
the element with the "topban" ID:

- Align the text of the H2 to the center

## Phase 4: Style the footer list

Use a **tag+class selector** to style the UL element with the class name
"clfooter" and:

- Align the text of the UL to the center
- Give it a top border only that is one pixel solid gray
- Give it top/bottom padding of ten pixels and left/right padding of zero pixels

Use a **child combinator selector** to style all LI elements that are direct
children of the UL with the class name "clfooter" and:

- Display all LIs as inline elements using the `display` property
- Give all LIs in the `ul.clfooter` 5px padding on the right side

## Phase 5: Add pseudo-elements

The Craigslist logo is a purple peace sign, which also happens to be a common
emoji these days. What else screams 2010s and beyond better than emojis? So,
let's add some to the Craigslist homepage!

**Peace Symbol Emoji:**

![Peace emoji](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/attributes/assets/peace-symbol-emoji.png)

Create **pseudo-elements** to add the purple peace sign emoji before every H4
element with the class name "ban" using the `::before` [pseudo-element][2].

**Hint**: While pseudo-classes let you style elements based on their state,
[pseudo-elements][2] let you style specific parts of the selected element. The
[::before][3] pseudo-element will create a pseudo-element that is the first
child of the selected element. This pseudo-element will not introduce a new
element into the DOM (hence, pseudo).

**macOS Pro-Tip**: You can use `Control+Command+Spacebar` on a Mac to pull up
the emoji keyboard. Search for the purple peace sign emoji.

## Bonus: style the calendar

Right now, the calendar is looking a little peaked.

- Set the border on each TD to be a solid 1px with color #333.
- Use the `border-collapse` property on the table with the class of "cal" to
  collapse the borders around each date into a single calendar.
- Change all the colors of the text of the links to green.
- Make all of the link texts bold.
- Center-align the content of all the TDs in the calendar.
- Change the color of the text of the days in the calendar that are not links to
  a half-transparent black.
- Use the `cursor` property to indicate that a day without a link is not
  clickable. You'll have to analyze the HTML to figure out how to do that. You
  cannot use CSS selectors to select an element and, then, apply a style to a
  parent element. So, you'll need to figure out a way to select those table data
  elements.
- Highlight the day indicated as "today" (look at the HTML) by setting its
  background color to dark violet and its text color to white.
- When the pointer (cursor) is over one of the table data cells that contains
  the numbers, have the table cell's background color turn lavender.

## Bonus: use more pseudo-classes

In this project, you used pseudo-classes to style elements based on their hover
and visited states. Can you use more pseudo-classes? Use -*three more
pseudo-classes** to style elements on the page.

Check out the MDN doc on [pseudo-classes][4] for a full list. Some good ones to
use: `:focus`, `:first-child`, `:last-child`, `:nth-child`

## When you're done

Go back through and make additional changes as you see fit -- make it your own! Have fun with it.

[1]: https://craigslist.org/
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
[3]: https://developer.mozilla.org/en-US/docs/Web/CSS/::before
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
[5]: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
[MDN CSS Reference]: https://developer.mozilla.org/en-US/docs/Web/CSS
[starter]: https://github.com/appacademy/practice-for-week-07-modernize-craigslist-long-practice