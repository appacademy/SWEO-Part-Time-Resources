# Advanced Phase: Preferences drop down

![gear-drop-gif]

In this portion of the exercise, you are provided the HTML and base CSS. You are
also provided a JavaScript file. The challenge is for you use both the
JavaScript and CSS to show and hide a drop down menu.

This is the HTML that you should use for the menu.

```html
<div class="pref">
  <div class="pref__section">
    <div class="pref__section-header">Edition</div>
    <ul>
      <li class="pref__section-link"><a href="#">CSS</a></li>
      <li class="pref__section-link"><a href="#">HTML</a></li>
      <li class="pref__section-link"><a href="#">JavaScript</a></li>
      <li class="pref__section-link"><a href="#">Python</a></li>
    </ul>
  </div>
  <div class="pref__section">
    <div class="pref__section-header">Help</div>
    <ul>
      <li class="pref__section-link"><a href="#">FAQ</a></li>
      <li class="pref__section-link"><a href="#">Contact Us</a></li>
    </ul>
  </div>
</div>
```

Once you place the above HTML code in your __index.html__ file, examine the CSS
for the drop down menu in the __stylesheets/components/gear-dropdown.css__ file.

The CSS has the preference pane already `absolute`ly `position`ed. Figure out
what you need to do to make it show up next to the cog icon and if you need to
do any positioning of the ancestors of where you placed the HTML.

When you get this to work, make sure that it works on different window sizes.
Sometimes, when developers create absolutely positioned elements, the way they
do that prevents it from working on a window size that they didn't try. So,
make it narrower. Make it larger. Make sure that the dropdown shows up when it
should.

Now you will tackle adding the functionality of showing and hiding the drop down
menu when the cog icon is clicked. When someone clicks the cog icon, it should
show the menu. When the preferences drop down is shown, any click should dismiss
it. The preferences drop down menu should be hidden by default.

To achieve this effect, you will add a CSS class name of `pref--hidden` to the
preferences drop down menu. When this class name is applied to the drop down,
the drop down should be hidden. Apply a property of `display: hidden;` to the
`pref--hidden` class and add that class name to the drop down menu element in
the HTML. When the class name of `pref--hidden` is applied to the drop down
menu, then the drop down menu will not show.

After adding the CSS rule and HTML class name, the drop down menu should be
hidden in the browser.

Next, you will use JavaScript to show the drop down menu when the cog icon is
clicked.

Examine the JavaScript code in the __scripts/event-handling.js__. This script
will remove the class name of `pref--hidden` from your drop down menu when the
cog icon is clicked. It will add the class name of `pref--hidden` to your drop
down menu again when you click anywhere outside the drop down menu. You do not
need to know how this script works! Just try to guess what lines 3-13 are doing.

Use a `script` element to include the script file in your HTML. This may be the
first time you've written a `script` element in HTML. Do some research to figure
out how to use a `script`. (Hint: the `src` attribute for a `script` element can
be used similarly to the `href` attribute for a `link` element.)

After you've included the script file in your HTML file, test out whether it is
being loaded into your browser. Open up your DevTools console to view the
"Console" tab. In that tab, you should see a display of "event-handling.js
script was successfully loaded" if your script file has loaded correctly.

You should now be able to hide and show the drop down menu on click!

[gear-drop-gif]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/gear-drop.gif
[link-to-the-script-tag]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#Examples
[the link to the event methods]: https://developer.mozilla.org/en-US/docs/Web/API/Event#Methods