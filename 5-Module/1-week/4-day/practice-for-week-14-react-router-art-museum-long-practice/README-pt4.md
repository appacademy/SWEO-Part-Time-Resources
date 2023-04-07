# Art Museum, Phase 4: Gallery Images

Here's a breakdown of the steps you'll be taking in this phase (more detailed
instruction below):

1. Create `<ArtImageTile>` component.
2. Iterate over `gallery.objects` to create `<ArtImageTile art={art}>` per art.
3. Create the contents (`<Link>`s and `<img>`s) in `<ArtImageTile>`.
4. Restrict the visibility of all arts in `<GalleryView>` using a `<Route>` with
   URL `/galleries/:galleryId`.

Let's populate the `GalleryView` with images of the art in the displayed
gallery.

**(1)** Add a folder in the __components__ folder called __ArtImageTile__ and
make a functional component that renders the first image of the art in the
gallery.

Take a look at the information on the gallery object in `GalleryView`. Is there
any information inside of it for artwork images? Each artwork should have an
array of images.

**(2)** From the `GalleryView` component, map the array of artworks to an array
of `ArtImageTile`'s. Pass in the artwork information into the `ArtImageTile` as
the prop `art`.

Tips for Step 2:

- Spoiler-free hint:
  89,111,117,32,115,104,111,117,108,100,32,108,111,111,112,32,116,104,114,111,
  117,103,104,32,96,103,97,108,108,101,114,121,46,111,98,106,101,99,116,115,96,
  46,32,58,41<- use `String.fromCharCode` (look up on MDN) to decrypt this hint.

**(3)** In the `ArtImageTile` component, render the first image of the artwork
wrapped in a `Link` component from React Router. The `Link` should direct users
to `/galleries/:galleryId/art/:artId` when clicked. This will be how we navigate
to another component we build in Phase 5! `:galleryId` and `:artId` should be
replaced with the id of the current art gallery and the image's art id.

Tips for Step 3:

- `<Link>` is a lot like `<NavLink>`. Use the docs!
- Put an `<img>` tag in the `<Link>` component and give it the usual HTML
  attributes like `src`.
- What should be used as `:artId` can be found on the object passed in as the
  `art` prop to the `<ArtImageTile>` component. You want to go to there!
- You can get the value to use as `:galleryId` by passing down another prop to
  `<ArtImageTile>`. You will also be able to use `useParams` again after you set
  up the correct routing in the next step.

**(4)** An `<ArtImageTile>` for each object in your gallery should be rendered
at `/galleries/:galleryId`. To do this, create a `<Route>` component in your
`<GalleryView>` component that creates an `<ArtImageTile>` component for each of
the `gallery.objects`.

Tips for Step 4:

- You should already have this mapping of `gallery.objects` to `<ArtImageTile>`
  components from Step 2.
- Try to move that code into a route so it only shows when the URL is EXACTLY
  `/galleries/:galleryId`

Test out your code by navigating to an art gallery from the navigation bar.
The images for each of the artwork in that art gallery should be rendered. If
you click on one of the images, the path should reflect the
`/galleries/:galleryId/art/:artId` pattern.