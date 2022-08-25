# Basic Phase: Interest Links

![interests bar]

This poses an interesting problem, these so-called "interest links". At first
glance, you may see only five columns:

* Dog Programmers
* Cats and Coding
* Plugging stuff in
* Some stock quotes?
* The weather

However, once you start applying the rules of rows and columns, you can go beyond
just five columns. You can see that there are nine columns: image, text, image,
text, image, text, text, image, text!

![interests bar marked up]

So, that's nine columns and one row. This is a candidate for either flexbox or
CSS Grid Layout. When it comes down to it, CSS Grid Layout has a nicer syntax
for declaring column widths. They appear to have the following relative sizes:
1, 2, 1, 2, 1, 2, 2, 1, 0.75. You can use those to define the column widths of
your grid. Or, if you don't like that weird 0.75 hanging out there, change it to
a 1. If you think it looks better, go with your gut!

Now, look deeper into each of the sections. You can see that there is a lot of
similarity between position, layout, and style of the images and words.

![interests bar subclasses shown]

With it highlighted like this, you can see that all of the images essentially
share the same size and position. You can see all of the headlines and teasers
have the same styling and layout. You can see that the fake stock prices all
have similar layouts. You can define a class name like
`interests-bar__story-title` and apply it to "Dog Programmers", "Cats and
Coding", and "Plugging stuff in" because they're _all_ title Elements in the
interests bar Block.

Taking all of that analysis, here is the layout without any of the content. The
same colors mean the same class names.

![interests bar layout]

The following table lists the class names found in the solution for each of
the colors found in the layout above:

| Color  | Class Name                                                                |
| ------ | ------------------------------------------------------------------------- |
| Orange | `interests-bar__image`                                                    |
| Blue   | `interests-bar__headline`                                                 |
| Green  | `interests-bar__story`                                                    |
| Brown  | `interests-bar__stock-price` (which contains both the name and the price) |
| Pink   | n/a (this `span` needs no special treatment)                              |
| Violet | `interests-bar__price`                                                    |
| Yellow | `interests-bar__big-text`                                                 |

Then, the styles for the specific presentation are put in rules that target
those selectors.

## More tips

Here are some tips about how to do it.

* Put all of your styles in the **interest-links.css** file inside
  **stylesheets/components**
* The text for all of these links is in **03_interest_links.txt** inside the
  **specifications/text** directory

![interests bar done]

[interests bar]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/interests-bar.png
[interests bar marked up]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/interests-bar-marked-up.png
[interests bar subclasses shown]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/interests-bar-subclasses-shown.png
[interests bar layout]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/interest-bar-layout.svg
[interests bar done]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/interests-bar-done.png