# Art Museum, Phase 5: Gallery Art Details

Here's a breakdown of the steps you'll be taking in this phase (more detailed
instruction below):

1. Create `<ArtDescription>` component.
2. Use a `<Route>` in `<GalleryView>` component to render `<ArtDescription>` at
   the correct route.
3. Add a `<Link>` to the art's gallery in `<ArtDescription>`.
4. Render a link to the Harvard Art Museum page included in the art object.
5. Render more information about the artwork however you choose.

**(1)** The last component you will create is the `<ArtDescription>` component.
Set up the component file in the __components__ folder just as you did for the
other components you created.

**(2)** This component will be rendered in the `GalleryView` component at the
`/galleries/:galleryId/art/:artId` route. It will provide details on the artwork
at the specified `:artId` path parameter. You should also pass the `gallery`
down as a prop to `<ArtDescription>`.

**(3)** In the `<ArtDescription>` component, render a `<Link>` back to the
`/galleries/:galleryId` page. Make the text of this `<Link>` "Back to Gallery".
You can also include the name of the gallery in this text.

**(4)** Render the title of the artwork wrapped in an external link to the
actual artwork page in the Harvard Art Museum.

**(5)** Render all the images of the artwork, the description, credit, and
technique.

Tips for Steps 1-4

- You have already done everything you need to complete these steps before!
- Reference your other files to identify the patterns you need and why.
- Ask for help on Progress Tracker if you get stuck!!
- The `<Route>` you set up that will render `<ArtDescription>` should be a
  sibling component to the other `<Route>` in `<GalleryView>`, i.e., the one you
  created in step 4 of the previous phase.
- `<ArtDescription>` will know which art to use using the `:artId` param. Get
  the `:artId` with `useParams` after your route is set up with the correct
  path. Use the ID to find the right art on `gallery.objects`.
- Look at the art object closely for all the information you could visualize.
  Especially that `.images` array. `.map` over that!

Test the component out by navigating to one of the art galleries from the
navigation bar and clicking on one of the artworks. It should direct you to a
path that matches the `/galleries/:galleryId/art/:artId` pattern.

## Wrap up

Great job, you worked hard! Be proud of your progress today. Take a mental break
to scan through the beautiful art. CSS is an important skill that will be used
throughout all your portfolio projects. If you have time left, style your
project!

## Bonus: CSS

CSS is an important part of any web application project. Take some time to style
your project! Add cool hover effects with tooltips or animations if you want
more of a challenge!