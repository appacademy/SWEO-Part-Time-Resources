# Practice: Navigation

In this practice you will learn how to create navigation for your Route paths
using [`Link`][link] and [`NavLink`][navlink].

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Navigation

In your __App.js__ file, import the `Link` component from `react-router-dom`.
You will use this component instead of the `<a>` element to which you are
accustomed.

Beneath the `h1` create a `nav` element with 2 classes: `comp` and `nav`. Inside
the `nav` element, add an unordered list element. Add a list-item element inside
the unordered list element. Now use the `Link` component to create a clickable
link to the `Home` path. The child text inside the Link component should say
'Home'.

In your sandbox browser, you should now see a Navbar with the Home link.

### Compare `Link` and anchor

In order to really understand why you are using the `Link` component, you should
add an anchor tag to your code and view the difference.

Above your `Home` `<li>`, add an `<li>` with an anchor tag nested inside. The
`href` should lead to the movies component (`/movies`) and have a child text of
`Anchor`.

In your sandbox browser, click the `Open In New Window` button. Open the
DevTools in the new window to the `Elements` tab. Expand the html tree as much
as you can. Now, click on the anchor tag and notice how the whole page
refreshes. Reopen the tree in the `Elements` tab. This time, click on the `Home`
link and notice that only the component that has been mounted changes; the page
itself does not refresh.

### `NavLink`

You will now add the other links to your __App.js__. However, you also want to
see a difference between the active link and the other links. To achieve that
differentiation, you can use the `NavLink` component. (Remember that `NavLink`
is just the `Link` component with extra functionality.)

Replace the `Link` import with the `NavLink` import.

Also, for your `Home` link, replace `Link` with `NavLink`. You will need to make
your URL `exact` in this component, just as you did in the `Route`.

Now add list-items and `NavLink`s for the `Stocks` and `Movies` routes.

Take a look in your sandbox browser. Notice that the active link is now red?
Your __index.css__ defines an `active` class. `NavLink` automatically sees this
and applies it to the active link. Click each item and notice how the link
changes.

### `activeClassName` and `activeStyle`

Now you are going to change the class that is called on the active link using
the [`activeClassName`][active-classname] attribute. Note that __index.css__
also defines a `purple` class. In your __App.js__, add
`activeClassName='purple'` to each `NavLink`. Your active link in the browser
should now have a purple border around it.

Next, inside your `NavLink`s, use the [`activeStyle`][activestyle]
attribute. It works the same way that inline styling works for CSS. Add
`activeStyle={{ fontWeight: 'bold' }}` to each `NavLink`. When you go to the
browser, you should notice that each active link now has both a border and a
bold font.

### `Redirect`

Sometimes you want to allow access to a component only when a user is logged in.
Otherwise, you want to navigate the user in another direction. Using the
[`Redirect`][redirect] component can help you do this.

In your __App.js__ file, just above the 'Page Not Found' route, add a `Route`
that looks like this:

```js
<Route path='/not-logged-in'>
  <h1> You Must Be Logged In To Enter.</h1>
</Route>
```

Next, in your __Stocks/index.js__ file, create a variable called `loggedIn` and
assign it to `false`.

Add an `if` statement that uses the `Redirect` component--don't forget to import
it!--to redirect the user to the `/not-logged-in` URL when the `loggedIn`
variable is `false`.

Test your code in the sandbox browser by clicking on the `Stocks` link. It
should redirect you to the `/not-logged-in` route.

In __Stocks/index.js__, change the `loggedIn` variable to `true`. Now when you
click on the `Stocks` link, you should see the `Stocks` component.

### History API & `useHistory` hook for navigation

You can use the [`useHistory`][usehistory] hook to navigate after some
transaction has taken place. In this case, your goal is to navigate
back to `Home` after a user clicks a button in the `Stocks` component.

First, under the `h1` tag in your `Stocks` JSX, create a button with an
`onClick` event listener that looks like this:

```js
  <button onClick={handleClick}>Home</button>
```

Event listeners differ in React in that the event listener is camelCased and
will always be assigned to a function.

Here you have set the `onClick` event to invoke the function `handleClick`, but
you have not written `handleClick` yet.

Above the `return`, create a function called `handleClick`. It should alert the
user with a message and then navigate home.

```js
  const handleClick = () => {
    window.alert('Sending info to the DB!');
  };
```

Test in the sandbox browser.

Now you want to redirect after you click the `ok` button in the alert box.

Import the `useHistory` hook from `react-router-dom`.

In your component, invoke the `useHistory` hook and assign it to a new variable
called `history`.

If you are curious about what you will receive in the `history` variable, log it
and take a look in the browser DevTools.

After the `window.alert` in the `handleClick` function, use the `.push` method
on the `history` object to navigate the user to the `Home` component.

Test in the browser.

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Navigate to another address with the [`Link`][link] component
2. Use the [`NavLink`][navlink] component's added capability to set the `active`
   class in CSS
3. Personalize the active links with specialized `NavLink` attributes
4. Navigate the user to another location using [`Redirect`][redirect]
5. Use the History API and the [`useHistory`][usehistory] hook to navigate the
   user to another location after they have handled some other functionality

[CodeSandbox]: https://www.codesandbox.io
[link]: https://v5.reactrouter.com/web/api/Link
[navlink]: https://v5.reactrouter.com/web/api/NavLink
[active-classname]: https://v5.reactrouter.com/web/api/NavLink/activeclassname-string
[activestyle]: https://v5.reactrouter.com/web/api/NavLink/activestyle-object
[redirect]: https://v5.reactrouter.com/web/api/Redirect
[usehistory]: https://v5.reactrouter.com/web/api/Hooks/usehistory