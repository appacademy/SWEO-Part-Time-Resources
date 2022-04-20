# Walkthrough: Semantic HTML (SOLO)

In this walkthrough, you will be building an HTML web page with semantic HTML
elements.

## Set up

So, create a new directory, open Visual Studio Code to that directory, create a
file in it named __index.html__, and open the HTML document in a browser.
You will add semantic HTML elements to this HTML document.

## Important Note

Type along with this walkthrough to familiarize (or continue to practice)
creating HTML documents. You are going to build your own HTML reference sheet.
You can come back and refer to this if you forget how to add an image to an
HTML document, or how to properly structure tabular data.

**Do not copy and paste**. Really. Practice makes perfect. If you're still
fairly new to HTML, type it out so that you can get the hang of it. If you can
type HTML in your sleep, then this will take no time at all for you to complete.
Whatever skill level you are, make with the typing, friend.

The best way to learn the basics of programming is to think about what you're
doing while typing. Don't just copy. Copy and think! If you practice writing out
all your code now, before long you'll be closing elements and using double
quotations without having to think about it. This will make things much easier
when the projects that you're expected to complete become more and more complex.

## Phase 1: Creating the basic HTML5 structure

On the first line of your HTML file, you want to tell the browser that your HTML
document will follow the rules of HTML Version 5 as opposed to HTML 4 or XHTML
or XML or whatever. To do that, the first line should read:

```html
<!DOCTYPE html>
```

The _DOCTYPE_ declaration officially tells the browser that you plan on using
HTML 5 in your document. Don't worry. If you mess up, the browser is very
forgiving. However, try not to mess up.

Now, you need to specify the _root element_ of the HTML document, the `html`
element. All of the content of your HTML document will be the content of this
element.

```html
<!DOCTYPE html>
<html>
</html>
```

The `html` element has two valid child elements, the `head` element and the
`body` element. Both of those tags are **non-empty tags**, which means they will
have both an open tag and a close tag. Generally, when you add a child element
to an existing element, you indent one level. By convention, indentation is
normally two or four spaces, depending on your team's preferences. Sometimes,
people use tabs instead of spaces.

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

Finally, add an opening and closing `title` tag as a child of the `head`. Make
sure it has content reading "My HTML Cheat Sheet". That is the content that you
will see in the tab or the title bar of your browser. It can be (and is, in this
case) different from the name of your HTML file.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My HTML Cheat Sheet</title>
  </head>
  <body>
  </body>
</html>
```

And, that is a valid, minimal HTML 5 document just waiting for some happy
content.

## Phase 2: Headings

Headings come in different levels: `h1` for the top-level heading, `h2` for
the top sub-heading, `h3` for the next sub-heading. Importantly, every page
should have one, and only one `h1` tag. Google's web-crawlers will search for
the `h1` on each page to label the search result. If they don't find one, you
will be penalized with lower search rankings.

### SEO (sub-heading)

Search engine optimization, also known as SEO, is one reason it's important to
use **semantic HTML**. This means matching each page element with an
appropriate HTML tag. It's tempting to use `h1` anytime you need big, bold
text but resist that temptation.

(notice that the above paragraphs have `headings` an `h2` and `SEO
(sub-heading)` as an `h3`).

Add a _heading_ with the title of the page and a _subheading_ with the name of
this tag to your reference sheet.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My HTML Cheat Sheet</title>
  </head>
  <body>
    <h1>My HTML Cheat Sheet</h1>

    <h2>Headings</h2>

  </body>
</html>
```

## Phase 3: Paragraphs

It will be helpful to add notes to your reference sheet. Paragraphs of
long-form text containing complete sentences go in the `p` (paragraph) tag.

Add a one-paragraph description to help you remember how headings and
paragraphs work.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My HTML Cheat Sheet</title>
  </head>
  <body>
    <h1>My HTML Cheat Sheet</h1>

    <h2>Headings</h2>
    <p>
      Headings from `h1` to `h6` identify blocks and sections. Every page must have one `h1`.
    </p>

    <h2>Paragraphs</h2>
    <p>
      Paragraphs of text go in `p` tags.
    </p>


  </body>
</html>
```

## Phase 4: Creating some lists

There are two important types of lists in HTML: **unordered lists** (bullet lists),
**ordered lists** (numbered lists).

### The unordered list

Create a new heading for lists. Then, create an _unordered list_ element
(`ul`). Add two **list item** elements as children of the _unordered list_
element with the two list types and their tags. Add a paragraph below to
remind yourself how to list the items.

```html
<html>
  <body>

      <h2>Lists</h2>
      <h3>Unordered Lists</h3>
      <p>
        Unordered lists are marked with bullet points and go in `ul` tags. Each list item goes in an `li` tag.
      </p>
      <h4>Types of lists:</h4>
      <ul>
        <li>Unordered lists (`ul`)</li>
        <li>Ordered lists (`ol`)</li>
      </ul>

  </body>
</html>
```

### The ordered list

Next is the **ordered list** (`ol`). Add a numbered list containing Polya's
problem solving framework.

```html
<html>
  <body>

      <h2>Lists</h2>
      <h3>Unordered Lists</h3>
      <p>
        Unordered lists are marked with bullet points and go in `ul` tags. Each list item goes in an `li` tag.
      </p>
      <h4>Types of lists:</h4>
      <ul>
        <li>Unordered lists (`ul`)</li>
        <li>Ordered lists (`ol`)</li>
      </ul>

      <h3>Ordered Lists</h3>
      <p>
        Ordered lists are numbered and go in `ol` tags. Each list item goes in an `li` tag.
      </p>
      <h4>Polya's Problem Solving Framework</h4>
      <ol>
        <li>Understand the problem</li>
        <li>Come up with a plan</li>
        <li>Carry out the plan</li>
        <li>Go back and improve your solution</li>
      </ol>

  </body>
</html>
```

Note that the _ordered list_ and the _unordered list_ both use the common _list
item_ element to provide the structure to each list. The browser then determines
to show each with either a bullet or a number depending on the type of enclosing
list.

## Phase 5: Now, you're going places with links!

People navigate between Web pages by clicking on links. Now, you think you'd use
the `link` element to do that. NOPE! SURPRISE! GOTCHA! That's not what you use.
Instead, you use an **anchor element** (`a`). According to _HTML for Dummies_,
"An anchor element is called an anchor because web designers can use it to
"anchor" a URL to some text on a web page."

The _anchor element_ uses the same attributes as the _link element_, primarily
relying on the "href" attribute to point where the link goes. After the lists,
add a new `h2` element that describes the section, add a paragraph that contains
some text about how links work, and then, in the paragraph, add an _anchor
element_ with an "href" attribute that points to DuckDuckGo with the content "Go
to DuckDuckGo to search for more information."

```html
<html>
  <body>

    <h2>Anchors (i.e. links)</h2>
    <p>
      Anchor tags create links to other pages. The URL goes in the `href` attribute.
      <a href="https://duckduckgo.com">
        Go to DuckDuckGo to search for more information.
      </a>
    </p>
    <p>
      Setting `target="_blank"` will open the link in a new window. See 
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" target="_blank">
        MDN
      </a>
      for more details.
    </p>


  </body>
</html>
```

Refresh your page and click the DuckDuckGo link, then try the MDN link. What's
different about them?

## Phase 6: Add an image

Add a new section. Add a new header that labels this is the image section.
Add a paragraph. Now, in the paragraph, add an **image element** (`img`) that
has a source attribute named "src" to which you assign the URL of the image that
you want to see. Here's a list of URLs from which you can choose.

```plaintext
Cute kitty: http://images.freeimages.com/images/premium/large-thumbs/2582/25827620-itty-bitty-kitty.jpg
Cute hippo: https://www.babyanimalzoo.com/wp-content/uploads/2011/10/cute-baby-hippo-tortoise-friends-pic-150x150.jpg
Cute lemur: http://wanderlord.com/wp-content/uploads/2015/11/Lemur-5-150x150.jpg
```

```html
<html>
  <body>

    <h2>Images</h2>
    <p>
      You can use the img tag to add images to your page.
      <img src="http://wanderlord.com/wp-content/uploads/2015/11/Lemur-5-150x150.jpg" alt="A cute lemur">
    </p>
  </body>
</html>
```

The alt text will also display if the image cannot be displayed for any
reason, including a dead link or a poor internet connection.

It is also important for accessibility reasons. Visually impaired internet
users may browse the web with assistance of a screen reader. These will read
the alt text aloud to the user, allowing them to understand the image without
seeing it.

More people that can use your website means more potential customers.

## Phase 7: Tables

Add a new section. Add a new header that labels this is the table section.

Tables in HTML are great for displaying tabular data, such as an address book or
a list of product descriptions and prices. Although tables are good for keeping
things organized, tables should only be used for displaying data, not for
defining the layout of a page.

Creating tables can be a little confusing at first. The best way to learn tables
is to create an example.

You create a table using the `<table>` tag.

```html
<table>
</table>
```

If your table has a header, that is, rows that should be considered as the
column headers, you add a `<thead>`. Then you add a `<tbody>` which should
contain the data of your table. If your table has a footer, that is, rows that
summarize the tabular data, then you add a `<tfoot>`, too. Finally

```html
<table>
  <thead>
  </thead>
  <tbody>
  </tbody>
  <tfoot>
  </tfoot>
</table>
```

Now, add rows to the table, row by row, using the <tr> table row tag for each
row.

```html
<table>
  <thead>
    <tr>
    </tr>
  </thead>
  <tbody>
    <tr>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
  </tbody>
  <tfoot>
    <tr>
    </tr>
  </tfoot>
</table>
```

In the rows, put `<th>` elements and signify that it is a column or row header
using the "scope" attribute. Put `<td>` to hold the data.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Insect</th>
      <th scope="col">Family</th>
      <th scope="col">Fact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ladybug</th>
      <td>Coccinellidae</td>
      <td>Can eat more than 5,000 insects!</td>
    </tr>
    <tr>
      <th scope="row">Fruit flies</th>
      <td>Drosophilidae</td>
      <td>First living creatures in outer space!</td>
    </tr>
    <tr>
      <th scope="row">Caterpillars</th>
      <td>Heterobathmiidae</td>
      <td>Have 12 eyes!</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td>I had no ideas!</td>
      <td>Those are neat!</td>
    </tr>
  </tfoot>
</table>
```

Add a paragraph and describe the structure of a table and how it works.

## Phase 8: Other content section tags

Here are some tags that you will definitely want to use in your own work.
However, there's not really a section on this page to use them, really. So, add
a new section, and add them and their summaries to a list or table of your
reference sheet.

* [article] element
* [footer] element
* [header] element
* [nav] element

## Phase 9: Forms

Please read the following articles on Mozilla Developer Network to give yourself
good exposure to forms. Add the forms that you build to one or more new sections
in this reference sheet.

* [Your first form]
* [How to structure a web form]
* [The HTML5 input types]
* [Other form controls]
* [Client-side form validation]

## What you've learned

You've learned how to create valid HTML 5 pages using structural and form
elements with client side validation. Moreover, using those elements, you
created a reference sheet for yourself so that you can come back and refer to it
as you continue to grow familiar with how to wield HTML 5 as a markup language
to create compelling Web experiences!

["small css frameworks" using DuckDuckGo]: https://duckduckgo.com/?q=small+css+frameworks
[Your first form]: https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form
[How to structure a web form]: https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form
[The HTML5 input types]: https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types
[Other form controls]: https://developer.mozilla.org/en-US/docs/Learn/Forms/Other_form_controls
[Client-side form validation]: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
[article]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
[footer]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
[header]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
[nav]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav