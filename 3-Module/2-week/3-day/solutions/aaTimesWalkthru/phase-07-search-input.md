# Advanced Phase: The Search Modal

![search-bar-gif]

This is similar to what you did with the preference pane dropdown. However, you
don't have to do any unusual positioning of these elements.

* When a user clicks the magnifying glass, it toggles the visibility state of
  the search box and button. One click, visible. Two clicks, invisible. Three
  clicks, visible. Four clicks, invisible. And, so on.
* The `input` is of `type` "search" and has a `placeholder` of "Search"
  (`<input type="search" placeholder="Search">`).
* The button is just a normal button.

Here's the HTML that you should add in an appropriate place:

```html
<div class="search-modal">
  <input type="search" class="search-modal__input" placeholder="Search">
  <button class="search-model__go">Go</button>
</div>
```

Examine the CSS given to you in the __stylesheets/components/search-modal.css__
file. It styles the HTML code above.

View this component in the browser. You should see a text `input` element right
next to the search icon.

Now you will add the functionality to hide and show this component whenever you
click on the search icon. Just like with the preferences drop down menu, you
will add a class that will be added and removed by the JavaScript script when
the search icon is clicked.

Add a CSS rule for the class name of `search-modal--hidden` that has a property
of `display: hidden;`. Remember to put your CSS in the appropriate component
stylesheet file.

Now if you view this component in the browser and click the search icon, the
search input should disappear.

Finally, make the search input component hidden by default. (Hint: you need
to add a class name to your HTML file.)

Great! You should now see no search input at first when you load the page, and
when you click on the search icon, you should see the search input show up!

[search-bar-gif]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/search.gif