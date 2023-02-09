# Project: CSS Media Queries

In this project, you will use media queries to solve common problems. The
website has already been created for you so that you only need to add to
the CSS.

## Set up

Clone the practice from the [starter].

Once you've in VS Code, you can drag the __index.html__ file into your browser
to view the webpage, or use the **File Explorer** to open it in your browser.

> Remember to save the CSS file and refresh the page in the browser whenever you
> make changes.

## Background and Context

The __index.html__ page is the home page of this application. The other web
pages of the app are in the __pages__ directory. You can also view and access
these pages through links on the home page.

The CSS stylesheets and images for the app are in the __styles__ directory. When
doing following phases, choose the best file to include the CSS rules for each
task.

## Phase 1: Hide elements while printing

Please hide the navigation buttons when printing any page on the website.

> Hint: This page element is in the `<nav>` tag.

Remember, you can open the **Print Preview** dialog to see what will happen
without having to use any paper (or even have a printer). For extra testing,
you may also choose to save a PDF from time to time.

## Phase 2: Improve header size on landing page

On the overview page, please don't let the header cover the whole page.
Specifically, cut the header height in half when the browser is less than
640 pixels tall.

## Phase 3: Show underlines on links on rollover and for mobile users

You will probably need to do some research to discover the best media query
to use.

Expected Behavior

* Desktop users should see link colors, but not underlines. Then when pointing
  the mouse at the link, the underlines should appear.
* Mobile users should always see underlines, as it makes it easier to find the
  right place to click.
* This does NOT apply to links that are used for navigation like below the
  header, or "Back" on the large image page.
* This should apply to all pages on the website.

> Hint: Here is some CSS that will show underlines only when hovering over a
> link.

```css
a {
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
```

Now, it's up to you to add CSS like the above to the CSS, plus implement the
appropriate media query, so that mobile continues to show the underlines all
the time. Remember, you can use the **Developer Tools** to access the device
toolbar including a selector for "device type" (Desktop or Mobile).

## Phase 4: Pretty printing of large images

Each of the images can be viewed on a page that shows its largest available
size. The users would like to print this page, so it looks its best. Here are
their requests in no particular order.

1. Image filling the available width of the printout
2. Title on top of the image (top center)
3. No blue background leaking out around the photo
4. Credit/tagline over the image (bottom center)
5. Hide the "Back" button
6. Hide the link to Wikimedia

> Hint: The original developer attached a CSS class to the "Back" link and
> the paragraph with the Wikimedia Commons link to make them easier to hide.

## Phase 5: Improve layout for photo cards by adjusting to browser width

Here are four possibilities from narrowest to widest:

* Single column, image above description (current implementation), all content
  centered, image filling width of box
* Single column, image to the left with description on the right, title and
  link left-aligned, image only at thumbnail size (not growing)
* Two cards side-by-side (like 2 columns), image above description (like first)
* Two columns, image on left with description on right (like second)

It seems like the largest width that looks good for the first option is around
600 pixels. Then every 300 pixels seems like a good cut-over to go to the next
layout configuration.

To help you visualize this goal, here are some mockups.

> Note: The following images are scaled down to fit into the instructions.
> You can right click and select "Open Image in New Tab" to see them full-size.

### Narrow

This one is the current implementation.

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/comets-site-css-media-queries/narrow.png"
     width="221"
     alt="Narrow Layout"
     style="border: solid grey 4px"
/>

### Moderate

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/comets-site-css-media-queries/moderate.png"
     width="342"
     alt="Moderate Layout"
     style="border: solid grey 4px"
/>

### Wider

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/comets-site-css-media-queries/wider.png"
     width="404"
     alt="Moderate Layout"
     style="border: solid grey 4px"
/>

### Widest

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/comets-site-css-media-queries/widest.png"
     width="600"
     alt="Moderate Layout"
     style="border: solid grey 4px"
/>

## Phase 6: Test the printing of photo cards and fix it

The first issue is that the second layout above would be the best one to use
printing.

> Hint: If done right, this is a trivial change. Don't worry if you don't
> figure that out. It just means you have an opportunity to discuss it with your
> instructors!

The second issue you might only see on either portrait or landscape (or maybe
both, depending on margins, paper size, and other settings). Specifically, the
cards get broken up where one part is on one page and another part is on the
next page.

There is a relatively simple solution to this as well, but sometimes it can be
a little tricky to find this kind of solution online because it's changed
several times over the years so there are a bunch of older, not-so-useful
"answers".

> Hint: Think about preventing or avoiding page breaks, rather than keeping
> content together.

## Phase 7: Test the printing of the timeline and fix it

If you look carefully, you'll notice the right edge is missing from the
timeline, even in landscape mode.

To make the timeline look its best at narrow browser widths, scrolling
is used instead of allowing the timeline to get so narrow that the relative
sizes of the boxes get lost. However, the `min-width` that triggers the
scrolling will apply to printing also, unless it's dealt with in a media query.

## Bonus Phase: Improve the alignment of labels for the timeline when printing

Sometimes, portrait mode is so bad that the rightmost label can get visually
"disconnected" from its related year.

> Hint: If you scale down the scroll area (e.g. to 0.5), then you can increase
> its width in a compensating way (e.g. to 200%). The text might be smaller,
> but hopefully, you can find good numbers where the entire contents fit and
> look good.

## Congratulations

You have completed this project!

[starter]: https://github.com/appacademy/practice-for-week-07-media-queries-long-practice