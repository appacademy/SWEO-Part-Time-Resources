# HTML Wireframe Long Practice

Wireframes are the blueprints to every web page a developer creates. It is
important as a developer to be able to both identify and translate wireframes
from the design to semantic HTML syntax.

In this practice, you will be identifying and creating semantic HTML syntax from
an example wireframe. You will do this in three phases:

- __Phase 1__: Creating individual HTML elements
- __Phase 2__: Grouping elements with non-semantic wrappers
- __Phase 3__: Refactoring to use semantic HTML wrappers

## Set up

1. Clone the starter from GitHub
2. Run `npm install` to install dependencies
3. Run `npm test` at the end of each phase to check your work

## Phase 1: Creating individual HTML elements from wireframe

Your main focus is to pick the correct tags and syntax for HTML attributes
(`src`, `href`, `target`, etc) based on the wireframe provided below.

The HTML document in the __index.html__ file should contain at least:

- Top navigation bar
- Main Heading (`h1`)
- Subheading (`h2`)
- Main Image (`img`)
- Text paragraphs (`p`)
- Links (underlined blue text) (`a`)
- External links (underlined blue text with new-window icon)
  - to use the new-window icon in the wireframe, add this code to the `<head>`
    of your HTML document:

    ```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    ```

  - then you can use the new-window icon by adding an element with a `class`
    attribute of "material-icons-outlined" and include the text `open_in_new`
    inside the element:

    ```html
    <span class="material-icons-outlined">
      open_in_new
    </span>
    ```

- Footer content

![Wireframe]

_Note: If you look at your page in the browser, you should see all of the
elements your created, but they will not have the same layout as in the
wireframe. You will learn to apply layout styles in the following set of
lessons._

After adding these elements to your __index.html__ file, run the tests for Phase
1 using the following command:

`npm run test-1`

When all tests pass, you are ready to move on to the next phase.

## Phase 2: Grouping elements with non-semantic wrappers

At this point, your __index.html__ file includes all of the elements that you
can see on the wireframe. However, developers often use __wrapper__ (also
referred to as __container__) elements to group related elements together on a
page. These wrapper elements are often invisible to the viewer, but can be
assigned classes and/or ids to help style the page with CSS.

At the most basic level, wrappers can be created by nesting a collection of
related elements within opening and closing `div` or `span` tags.

Add the following wrapper elements to your __index.html__ file to group related
content into the following sections:

- `div` with an id of "header"
    - should contain the top navigation bar and links
- `div` with an id of "title"
    - should contain main heading, image, and text below image
- `div` with a class of "article" and id of "article-1"
    - should contain first sub-heading and the text beneath it
- `div` with a class of "article" and id of "article-2"
    - should contain second sub-heading and the text beneath it
- `div` with a class of "external-links"
    - should include the links to more articles
- `div` with an id of "footer"
    - should include the footer content

Refresh your browser, and you should see each wrapper show up with a different
border color and style to highlight the groupings you just created.

_Note: The border is applied through CSS code in the __site.css__ file,
and targets the classes and ids assigned to the `div` wrappers. You will learn
to apply styles in this way in future lessons._

Run the tests for Phase 2 using the following command:

`npm run test-2`

When all tests pass, you are ready to move on to the next phase.

## Phase 3: Refactoring to use semantic HTML wrappers

In the previous phase, you created many `div` wrappers and used ids and classes
to identify them. While `div`s and `span`s are effective at grouping content, it
is more effective to use semantic HTML wrapper elements, which can describe the
purpose and content of each grouping. This increases the overall accessibility
of the webpage for users, and also makes it easier to style and control the
layout of the page with CSS.

Refactor the wrapper elements you added in Phase 2 to be more semantic. Change
each tag name as follows. You can read more about these [semantic HTML wrapper
elements] in MDN.

- a `header` element should contain the top navigation bar and links
    - a `nav` element can be added to contain the six text links within the
      header
- a `footer` element should contain the footer content
- a `main` element should contain all of the content in between the `header` and
  `footer`
- a `section` element should contain main heading, image, and text below image
- two `article` elements should each contain a sub-heading and the text beneath
  it
- an `aside` element should include the links to more articles

Refresh your browser, and you should see each semantic HTML wrapper show up with
a different background color if you implemented the wrappers correctly.

Run the tests for Phase 3 using the following command:

`npm run test-3`

_Note that the tests for Phase 2 will fail after refactoring your
wrapper elements, so only run the tests for Phase 3._

Congratulations! You have successfully created a webpage from a wireframe, using
sematic HTML elements and wrappers.

## What you've learned

In this practice, you learned how to translate a wireframe into individual HTML
elements. In addition, you started practicing how to structure an HTML page
using wrapper or container elements. You did so using `div` elements and
assigning ids and classes to each `div`, and then practiced making groupings
using semantic HTML wrappers.

As you learn more about HTML and CSS, keep the following tips in mind:

1. Always take the time to plan out your HTML structure first.
2. Plan out the _visible_ elements you will need (text, images, etc), as well as
   any _invisible_ wrappers / containers that will help you oraginize the content
3. Use semantic HTML wrappers / containers whenever to group related content. If
   there is not an obvious semantic HTML element, you can always use a `div` or
   `span` element as a wrapper / container.
4. You can always nest wrappers inside other wrappers. For example, you nested a
   `nav` element within the `header` element to group all six text links
   together.

[Wireframe]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/html-practice-wireframe.png
[semantic HTML wrapper elements]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#html_layout_elements_in_more_detail