# DEPRECATED: Slide-In Sidebar

Deprecated because this phase requires students to have an understanding of
how to write a JavaScript click event listener OR the instructions and starter
needs to include the JavaScript for the students.

![slide-in-gif]

The bonus, here, is to add a slide-in sidebar. This is a two step procedure.
First, get the element to "slide in" when someone clicks the menu button. That's
not an easy thing to do. It should stay over on the left side of the screen even
during screen resizes.

Here's some starter HTML to get the ball rolling. See if you can make it appear
and be styled when someone clicks on the menu icon.

```html
<nav class="sidebar">
  <ul class="sidebar__list">
    <li>World</li>
    <li>
      San Francisco
      <ul class="sidebar__submenu">
        <li>Students</li>
        <li>Teaching Assistants</li>
        <li>Instructors</li>
        <li>Career Advisors</li>
        <li>Cats</li>
      </ul>
    </li>
    <li>New York</li>
  </ul>
</nav>
```

When you have that done, do the hover. First, see if you can just get a submenu
to show-up on a hover. Then, try to style the fancy triangle thing. That's a CSS
trick known as the CSS Arrow. You can make an arrow with a single `div`.

The idea is a box with zero width and height. The actual width and height of the
arrow is determined by the width of the border. In an up arrow, for example, the
bottom border is colored while the left and right are transparent, which forms
the arrow.

```css
.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid black;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;

  border-top: 20px solid #f00;
}

.arrow-right {
  width: 0;
  height: 0;
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;

  border-left: 60px solid green;
}

.arrow-left {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-right:10px solid blue;
}
```

Check out this CodePen for [CSS Arrows] to play around with how they work.

[slide-in-gif]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/sidebar.gif
[CSS Arrows]: https://codepen.io/aa-academics/pen/NWqOVpa?editors=1100
