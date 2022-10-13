# Practice: CSS Selectors

Now, it's time to practice your understanding of the most common selectors in
CSS. The majority of the CSS for this web page has been created by another
developer. Your mission is to make some improvements requested by the customer.

## Set up

Clone the practice from the [starter].

Once you've in VS Code, you can drag the __index.html__ file into your browser
to view the webpage, or use the **File Explorer** to open it in your browser.
The only file you will need to edit for this practice is __main.css__.

> Remember to save the CSS file and refresh the page in the browser whenever you
> make changes.

## Background and Context

You will begin with a web page that has all of the HTML and most of the CSS
completed. You only need to write CSS, not HTML, to complete each phase.

You may use the [CSS selector documentation] for reference as you complete
these tasks.

To determine the best **CSS Selector** for each request, you may either look at
the HTML file (__index.html__), or use the element inspector in your browser's
Developer Tools.

## Phase 1 - Select by id

Find the title that appears between the cover image (textured paper), and the
introduction page (outlined table). Make this title bold without modifying the
other titles in the web page.

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-selectors/phase1.png"
    width="530"
    alt="make title bold"
    style="border: solid grey 4px"
/>

> Hint: The original developer assigned an `id` to the `<h1>` tag on that title.

## Phase 2 - Select by class name

Next, find the page numbers that appear in square brackets throughout the story.
These need to display on the right-hand edge of the screen.

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-selectors/phase2.png"
    width="816"
    alt="move all page numbers to right edge"
    style="border: solid grey 4px"
/>

> Hint: The original developer assigned a `class` to each `<span>` tag which
> displays a page number.

The designer suggests the following settings as shown in the mockup below.

```css
    position: absolute;
    right: 1%;
    font-size: small;
```

**Mockup of expected result**

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-selectors/phase2-after.png"
    width="692"
    alt="example of page numbers on right edge"
    style="border: solid grey 4px"
/>

## Phase 3 - Select by type

**First**, clean up the ragged right-hand edge on each paragraph (`<p>`) by
making it **justified** like a printed book (`text-align: justify;`).

**Second**, reduce the space between paragraphs, so it is a little less than a
single line. The designer recommends `.75em` for the top and bottom margins.

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-selectors/phase3a.png"
    width="877"
    alt="justify and set paragraph margins"
    style="border: solid grey 4px"
/>

**Third**, horizontally center the introduction and closing sections which
appear before and after the story.

**Fourth**, please give them significant extra space before and after (`100px`),
so they stand a part from the story itself.

These two sections were placed within a `<pre>` tag by the original developer.
This means they are [preformatted], so spaces and line breaks are respected by
the browser instead of being removed/hidden (like in "normal" paragraphs). The
side effect is that they can look offset to the left and give a less-polished
feel to the reader.

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-selectors/phase3b.png"
    width="748"
    alt="Centering and margins for introduction"
    style="border: solid grey 4px"
/>

> Hint: To use the width of the provided content as the width of an area,
> consider using [`width: fit-content`][fit-content-doc]. Centering elements on
> a page can be done using a variation of  [`margin: auto`][margin-auto-doc].

## Phase 4 - Select by state or pseudo-class

Please hide the underlines on the links throughout the page. If it's helpful,
you can review the documentation on [pseudo classes in CSS].

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-selectors/phase4.png"
    width="316"
    alt="Hide underlines on links in table of contents"
    style="border: solid grey 4px"
/>

## Bonus Phase - Hover state and child combinators

While continuing to hide the underlines on links in default or visited states,
show the underline and make the link text bold when the user hovers their mouse
over each link. This should apply to all links in the page (see introduction,
table of contents, and closing sections). The designer created this mockup to
show the desired effect.

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-selectors/phase5a.png"
    width="294"
    alt="Show underlines on roll over of links in the table of contents"
    style="border: solid grey 4px"
/>

Finally, for the links in introduction and closing sections (the `<pre>`
blocks), please make all the links show as black text in all states. 

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-selectors/phase5b.png"
    width="415"
    alt="Mockup of black link in introduction"
    style="border: solid grey 4px"
/>

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/practice-css-selectors/phase5c.png"
    width="415"
    alt="Mockup of black link on roll over in introduction"
    style="border: solid grey 4px"
/>

> Hint: Review the [child combinator selectors], if you get stuck.

## What you've learned

You practiced multiple ways to adjust HTML elements using CSS selectors

* id
* class
* type
* state (a.k.a. pseudo-class)
* child combinators

[starter]: https://github.com/appacademy/practice-for-week-07-css-selectors
[CSS selector documentation]: https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector
[pseudo classes in CSS]: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
[preformatted]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
[fit-content-doc]: https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content
[margin-auto-doc]: https://developer.mozilla.org/en-US/docs/Web/CSS/margin#values
[child combinator selectors]: https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator