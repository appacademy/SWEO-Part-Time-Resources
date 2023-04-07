# Art Museum, Phase 2: Gallery View

Here's a breakdown of the steps you'll be taking in this phase (more detailed
instruction below):

1. Create `<GalleryView>` component with placeholder content (`<h1>`).
2. Add `<GalleryView>` to `<App>`, wrapped with a `<Route>` from React Router.
3. Use `useParams` to access the gallery ID value from the URL.
4. Pass `harvardArt.records` to `<GalleryView>` as the `galleries` prop.
5. Receive the `galleries` prop in `<GalleryView>` and use the gallery ID to
   find correct gallery.
6. Render header with the gallery name.

It's time to make the component that renders the `/galleries/:galleryId` route
and shows the details about the specific gallery with the matching `galleryId`
in the URL parameter.

**(1)** Create a folder in __components__ called __GalleryView__ with an
__index.js__ file. Make a functional component called `GalleryView` that renders
`<h1>Hello from GalleryView</h1>` and export the component as default.

**(2)** Import the `GalleryView` component into `App` and render at the
`/galleries/:galleryId` route. You should use the `<Route>` component from
`react-router-dom`. [Always remember to use documentation][route]!

Tips for Step 2:

- Remember your `<NavLink>`s in `<GalleryNavigation>`? This `<Route>` is where
  they will lead!
- You will need to use both the `<Route>` and `<GalleryView>` components in
  __App.js__.
- Now that another element is being added to __App.js__, you will need to wrap
  `<GalleryNavigation>` and `<Route>` in something. We use `<div>` with a
  `className` "page-wrapper".
- The `path` prop of the `<Route>` component works a lot like the definition of
  a regular backend route!
- Submit a Progress Tracker question if you get stuck!

Click on a link to a gallery in the navigation bar and you should see the text,
"Hello from GalleryView".

**(3)** In the `GalleryView` component, extract the matched value for the
`galleryId` URL parameter with the `useParams` hook from React Router. Print
this value and make sure it looks correct in the browser's Dev Tools console.
[See how far you can get with just the documentation][use-params]. Use Progress
Tracker if you are stuck! Again: the param you are looking for is `galleryId`!
(You set the parameter's name in the `Route` path that you specified in
__App.js__.)

**(4)** To get the information on the art gallery with the specified
`galleryId`, the `<GalleryView>` component needs to find the art gallery from
the list of art galleries. The data for art galleries live in the `App`
component. Similarly to how you passed the `galleries` information into the
`GalleryNavigation` component, now pass the `galleries` information into the
`GalleryView` component.

**(5)** In the `<GalleryView>` component, extract the gallery with the specified
`galleryId` from the list of galleries in the `galleries` prop. Confirm
that it is the desired gallery by using the Dev Tools (either `debugger` or
using `console.log`).

Tips for Step 4 and 5:

- Refer to how your `<GalleryNavigation>` component is passed and receives
  its `galleries` prop. It should be pretty similar here!
- There are lots of ways to find a value in an array, but we highly suggest
  `.find`!
- Be careful with the data type of your ID! Make sure you are not comparing
  numbers to strings that merely resemble numbers!!

**(6)** Next, render the name of the specified gallery in `h2` tags. Make sure
that the name changes whenever you navigate to a different gallery from the
navigation bar.

[route]: https://v5.reactrouter.com/web/api/Route
[use-params]: https://v5.reactrouter.com/web/api/Hooks/useparams