# Basic Phase: The Main Navigation

![masthead-with-sections]

This is just a series of words centered and spaced beneath the masthead that you
just created. This should, hopefully, be something that you can conquer without
too much trouble.

## Some tips from industry

It has become fairly prevalent in the Web-programming world to use `ul` elements
when creating navigation. Say that your Web site has four main navigation links,
"Products", "Services", "About", "Contact Us". Then, you will likely see
something similar to this in the HTML for those links with some CSS to style
it appropriately.

```html
<nav class="main">
  <ul>
    <li><a href="/products">Products</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact Us</a></li>
  </ul>
</nav>
```

Your CSS reset already helps out a lot if you choose to mimic that structure. It
has removed the "bullet points" from `ul` elements. It has removed `margin` and
`padding` from the `ul` elements, too. The one thing it does not do is change
the way it gets laid out which, by default, is like a list! It'll look like a
list!

```plaintext
Products
Services
About
Contact Us
```

What Web programmers will do is add a class to the `ul` element and the `li`
elements. Then, they'll use flexbox (or something) to change the way the `ul`
lays out its contents, in a row rather than in a column.

You're encouraged to try to mimic this HTML and CSS so that you can follow best
practices.

Remember to not be shy with applying class names to your elements!

## More tips

Here are some tips about how to do it.

* Put all of your styles in the **main-nav.css** file inside
  **stylesheets/components**
* The text for the navigation items is 12 pixels tall
* The text for all of these links is in **02_sections_nav.txt** inside the
  **specifications/text** directory

![main-nav]

[masthead-with-sections]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/masthead-with-sections.png
[main-nav]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/main-nav.png