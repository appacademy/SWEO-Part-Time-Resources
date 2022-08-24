# Practice: Web Storage API

In this practice, you will use the Web Storage API to store data on the browser
for a web application.

## Set up

Clone the practice from the [starter].

Run `node app.js` from the base directory to start the server which will serve
the static assets in the practice. Navigate to [http://localhost:5000] in your
browser to see the __public/index.html__ file rendered.

The __public/index.html__ file imports the __public/main.js__ JavaScript file
and the __public/main.css__ CSS file.

In this practice, you only need to update the __public/main.js__ file.

## Background and Context

Now, it's time to practice using the Web Storage API. You'll explore both
`localStorage` and `sessionStorage` to better understand their similarities
and differences. Along the way, you'll use the **Developer Tools** in your
browser (e.g. Google Chrome) to verify and debug your work.

The functions you need to complete are found at the top of the
__public/main.js__ file.

Navigate to [http://localhost:5000] in your browser and open your browser's
**Developer Tools**. Find the tab labelled "Application" and the items on the
left named "Local Storage" and "Session Storage". You can open these and select
the site you are running to see any values stored there. (Probably none yet,
but there will be soon!)

> Hint: Review [documentation on web storage][1] anytime you need it. You 
> might wish to open it now in a separate browser tab for quick reference.

Click on the theme buttons on the web page, enter a display name, and click the
"Clear all" link to understand what the web page currently does. Refresh the
page in the browser with a theme selected and display name entered to see that
your theme settings get lost.

Your goal in this practice is to add **JavaScript** code to this application
in order to persist the theme and the display name that the user made even when
the web page is refreshed or the browser has been closed and reopened.

## Phase 1: Theme

The first step is to keep the theme setting the user made when the browser is
refreshed, the tab closed and reopened, and the browser is closed and reopened.
Before you continue please consider the following...

Of the objects that implement the [Web Storage API][1], which is the most
appropriate for this task?

Please take the time to consider this before you continue reading. One of the
most valued skills in developers which result in promotions and advancement is
the ability to figure out the right tool for the task at hand.

In this case, `localStorage` is the best choice because it persists until
removed by additional **JavaScript** code.

### Part A: Store it

In the function named `storeTheme`, store the value of the `themeName`
argument as a key-value pair in `localStorage`. You will need to choose an
appropriate key for this item as you set it.

**The code for manipulating the HTML elements has been implemented already. You
do not need to manipulate any HTML elements. You just need to add the
`themeName` value into `localStorage` as a key-value pair.**

Refresh the page in the browser, and click the theme buttons. Look under "Local
Storage" in the **Developer Tools** to see the item you set. If it doesn't show,
you can try clicking the small refresh button just above the table of items.
However, it is likely that your code didn't work, if nothing changed in the
"LocalStorage" area of your browser's Developer Tools.

### Part B: Restore it

In the function named `restoreTheme`, get the theme value out of `localStorage`.
If it exists, set it as the theme by pass the value of the `themeName` cookie
into the `setTheme(themeName)` function provided to you. This function will
change the theme of the web page based on the name of the theme in the argument.

> Note: If you are thinking ahead to the time when multiple cookies are set,
> that's great. This practice discusses that broader solution in phase 2.

Since it won't exist the first time a user visits the site, or if they have
cleared their cookies, you need to make sure you check that the value exists
before setting the theme. Otherwise, you will end up with an all white page
(no black headers) as the default theme gets set to `null` instead of "none".

Test by selecting a theme, then refreshing the browser page (big refresh button
at the top of the browser, not the tiny refresh button in the **Developer
Tools**). If your code is good, the page will show the theme colors (not black
and white), and the button will look selected.

Notice in the **Developer Tools** that the local storage item is still set.

Finally, verify that a new user's first visit to the site behaves as expected.
You can do this by clearing the `localStorage` using the small "no" icon (circle
with a slash through it) just above the "Key" and "Value" columns under "Local
Storage" before you refresh the web page.

### Part C: Clear it

To understand the gap in the current implementation, select a theme, click
"Clear all", then refresh the browser page (big refresh at the top). What you'll
see is the last theme that was selected; however, you should have seen the
black & white version that was just showing before the refresh!

So, in the function named `clearTheme`, add the code necessary to remove the
theme item from `localStorage`.

> Hint: This is really easy - a 1-liner. Check the [documentation][1] if you get
> stuck.

Now, in the browser you can refresh, then click the "Clear all" link. If all is
working properly, you'll immediately see the new item disappear from the
**Developer Tools** (under "Local Storage" for this site).

And, when you refresh the browser, the black & white version should show.

> Hint: Review part A if the header and footer show as black text on a
> transparent background, instead of white text on a black background. After
> fixing the restore, you'll need to click `Clear all` again before refreshing
> the browser (because `null` was set as the item's value in `localStorage`), so
> it restores on refresh.

## Phase 2: Display name

The parts to implement for the display name are the same.

However, there is a small difference in the desired outcome. Specifically, the
site owner has requested that the display name should be entered again by the
user each time they come to the site. In other words, in every session. (While
the theme, as you may recall, is persisted until they click "Clear all".)

Quickly review the [documentation][1] - or your memory - to determine the best
approach to use before you proceed.

### Part A: Store the name

Implement the `storeName` function to set the passed in `displayName` as an
item in `sessionStorage`.

### Part B: Restore the name

Part B: Implement the `restoreName` function to get the display name item from
`sessionStorage`, and - if it exists - make it the value showing in the
`<input>` field.

Use the provided `setInputValue(id, value)` function to set the `<input>`
with an `id` of "display-name" to the display name value in the
`sessionStorage`. This function will change the value of the `<input>` with the
specified `id` attribute to the specified `value`.

### Part C: Clear the name

Implement the `clearName` function to remove the display name item from
`sessionStorage`.

### Part D: Testing

You can and should test each part as your work, and at the end, please verify
these scenarios work as expected.

1. Enter a display name, then remove focus from the `<input>` field (use TAB on
   the keyboard or click anywhere else on the page - except "Clear all")
    * Expected Result: See the value in the **Developer Tools** (under the
      appropriate "Storage" heading - session, not local).
1. After entering a display name, refresh the browser
    * Expected Result: See the name in the input field.
1. In the **Developer Tools**, delete the display name item from "Session
   Storage" for this site, then refresh the page.
    * Expected Result: Empty display name `<input>` field (NOT "null").
1. Enter a display name, click "Clear all", then refresh the page.
    * Expected Result: Empty display name `<input>` field.

## Phase 3: Exploring session vs. local storage

So far, all the testing you've run shows `sessionStorage` behaving exactly the
same as `localStorage`. Now it's time to explore what happens when you:

* Close and reopen the browser tab (just the one with the site in it)
* Quit and restart the browser (all tabs, all windows)

Select a theme and set a display name. Check the **Developer Tools** to verify
that the theme item is in "Local Storage", and display name in "Session
Storage". Click the "X" on the browser tab to close it. Reopen the tab to the
web page. Notice the theme colors are showing and the button looks selected,
while the display name is empty.

Look in the **Developer Tools** again. You should find the theme under
"Local Storage", and nothing under "Session Storage". (Remember to open the
headings and select the website.)

## What you've learned

You put into practice the following features:

* Storing, restoring, and clearing of variables in `localStorage` and
  `sessionStorage`
* Comparing and contrasting the behavior of `localStorage` vs. `sessionStorage`
* Viewing "Local Storage" and "Session Storage" in the browser's
  **Developer Tools**

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
[starter]: https://github.com/appacademy/practice-for-week-09-web-storage
[http://localhost:5000]: http://localhost:5000