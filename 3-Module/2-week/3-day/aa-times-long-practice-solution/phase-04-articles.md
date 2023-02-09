# Intermediate Phase: Main Content

![main-content-with-opinions]

You've finally made it to the main content! No more messing around in the
`header` element. In this step, you will put your HTML into the `main` element!

Laying out the main content is an exercise in grids, which you have practiced a
couple of times. This just has more variety of content than you've seen before.
Don't worry. It's just the same but with more words.

Here's one way that you could decide to partition the page into its separate
sections:

![marked-up-screen-shot]

Put your CSS rules into **main-content.css**. The text for all of the content
is in **04_main_content.txt** inside the **specifications/text** directory.

To add _back_ the bullet points to a `ul` element like you see in the first
article, use the CSS property `list-type` with the value "disc".

In the real world, when you want to embed a video, usually your video hosting
provider gives you a code snippet for how to embed videos in your page. App
Academy uses Vimeo as its hosting services. You can use the following code to
embed the video into your page:

```html
<iframe src="https://player.vimeo.com/video/380193367" width="480"
  height="280" frameborder="0" allow="autoplay; fullscreen"
  allowfullscreen></iframe>
```

Each of these _things_ is supposedly a news article. HTML has an `article`
element that you can use, here, instead of using `div` elements like you've done
up until now. This makes your HTML _more_ correct. For example, the content in
the lower left corner could have HTML markup like this:

```html
<article class="article">
  <header class="article__header">
    <h1 class="article__title">Where are they now?</h1>
    <h2 class="article__byline">
      By <span class="article__author">App Academy Alumni</span>
    </h2>
  </header>
  <p>
    First hand stories from App Academy graduates about transitioning to
    engineering positions at top tech companies in San Francisco.
  </p>
</article>
```

[main-content-with-opinions]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/main-content-and-opinions.png
[marked-up-screen-shot]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/response-design-projects/aa-times/assets/marked-up-screen-shot.png