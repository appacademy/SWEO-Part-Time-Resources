# Practice: Cookies

In this practice, you will use cookies to store data on the browser for a
web application.

## Set up

Clone the practice from the [starter].

Run `node app.js` from the base directory to start the server which will serve
the static assets in the practice. Navigate to [http://localhost:3000] in your
browser to see the __public/index.html__ file rendered.

This starter is basically the same as the one used for the **Web Storage API**
practice. That is on purpose to help you better understand the similarities and
differences between these two approaches. **Important note: the port of the
server used for the practice is different.**

The __public/index.html__ file imports the __public/main.js__ JavaScript file
and the __public/main.css__ CSS file.

In this practice, you only need to update the __public/main.js__ file.

## Background and Context

Now, it's time to practice using **cookies** in JavaScript. You'll explore both
**Session Cookies** and **Persistent Cookies** to better understand their
similarities and differences. Along the way, you'll use the **Developer Tools**
in your browser (e.g. Google Chrome) to verify and debug your work.

The functions you need to complete are found at the top of the
__public/main.js__ file.

Navigate to [http://localhost:3000] in your browser and open your browser's
**Developer Tools**. Find the tab labelled "Application" and notice the item on
the left named "Cookies". You can open it and select the site you are running to
see any values stored there. (Probably none yet, but there will be soon!)

> Hint: Review [documentation on cookies][1] anytime you need it. You
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
You will use a **JavaScript Cookie** to make this happen.

### Part A: Store a cookie

In the function named `storeTheme`, store the value of the `themeName`
argument as a cookie.

> Hint: Use `document.cookie`. You will need to choose an appropriate name as
> you set it. Do NOT include spaces around the equal sign in the name/value pair
> as  some browsers may include the space in the name and/or value.

Refresh the page in the browser, and click the theme buttons. Look under
"Cookies" in the **Developer Tools** to see the item you set. There is a good
change that you'll need to click the small refresh button just above the
table of items (key & value columns) in order to see the current value of the
cookie.

### Part B: Restore a cookie

In the function named `restoreTheme`, get the theme value out of the cookie.
Since the cookie is stored as a name/value pair, you'll need to split on the
equal sign (`=`). The first part (`[0]`) is the key; the second (`[1]`), the
value. Pass the value of the `themeName` cookie into the `setTheme(themeName)`
function provided to you. This function will change the theme of the web page
based on the name of the theme in the argument.

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

Notice in the **Developer Tools** that the cookie item is still set.

### Part C: Clear a cookie

Since there is no function for removing a cookie, you'll need to think
outside the box. Consider...

* What timestamp would cause the cookie to expire right now?
* How many seconds are there between that time and the current time?

If you look at the [documentation][1], you'll see there are two ways to expire
a cookie - one is with a timestamp, and the other is in seconds. In this case,
seconds (e.g. zero), seems like it will be the easiest option.

In the function named `clearTheme`, add the code necessary to expire the theme
cookie immediately.

Now, in the browser you can refresh, then click the "Clear all" link. If all is
working properly, when you refresh the "Cookies" for this site in the
**Developer Tools** you will no longer see the theme item listed.

And, when you refresh the browser, the black & white version should show.

> Hint: Review part A if the header and footer show as black text on a
> transparent background, instead of white text on a black background.

## Phase 2: Persistent Cookies

You have ready about two types of cookies - **Session Cookies** and **Persistent
Cookies**. To better understand what this refers to, look at the columns for
"Cookies" in the **Developer Tools**, and find the one named "Expires /
Max-Age". You might have to make the column a little wider to see its values.
Notice that "Expires / Max-Age" is currently set to `Session` for the theme
cookie. This means both of this cookie is currently a **Session Cookie**.

Now it's time to explore what happens when you:

* Close and reopen the browser tab (just the one with the site in it)
* Quit and restart the browser (all tabs, all windows)

First, **close the browser tab** with the practice site in it, and reopen the
practice site. Notice:

* The settings restored the theme name
* In the **Developer Tools**, the "Cookies" list for the practice site still
  shows the theme cookie.

This is different from the `sessionStorage` in the Web Storage API which reset
when the browser tab was closed and reopened.

Now, **quit the browser** (all tabs). Then, restart the browser, and open the
practice site again. Notice:

* Settings are back to the defaults: black and white theme
* In the **Developer Tools**, the "Cookies" list for the practice site is empty.

In order to meet the requirement that the theme persist between sessions, you
need make it a **Persistent Cookie**. Review the [documentation][1], if you
don't remember how to do this.

Modify the `storeTheme` function to persist the theme cookie.

> Tip: For easy testing, using a number of seconds between 15 and 30 is good
> because you can test without sitting around and waiting for too long.

Now, you have a few tests to run after you refresh the browser (to get your
latest code changes).

1. Pick a theme, refresh the browser (in fewer seconds than the `max-age`).
    * Expected Result: Selected theme is restored.
1. Pick a theme, wait more seconds than the `max-age`, refresh the browser.
    * Expected Result: Theme is the default (black and white).
1. In fewer seconds than that `max-age`, pick a theme, exit the browser, restart
   the browser, and load the practice site
    * Expected Result: Selected theme is restored.
1. Pick a theme, exit the browser, wait more seconds than the `max-age`, restart
   the browser, and load the practice site
    * Expected Result: Theme is the default (black and white).

## Bonus Phase 3: Display name

**You are not expected to complete this phase.** Do this phase for additional
cookies practice.

The parts are essentially the same to implement storing and restoring the
display name with a cookie.

However...

There is one significant challenge to overcome. In order to fully understand it,
you'll want to experience it for yourself.

### Part A: Store a second cookie

Implement the `storeName` function to set the passed in `displayName`
as a name/value pair in `document.cookie`. You'll need to pick an appropriate
name as you do this. Store it as a session cookie.

Refresh the browser, enter a display name, and click a theme button. In the
**Developer Tools**, refresh the "Cookies" list . You should see two items -
theme and display name.

### Part B: Restoring two cookies

Implement the `restoreName` function to get the display name cookie from
`document.cookie` in the same manner as `restoreTheme`. Refresh the browser
and try it by entering a name, selecting and theme, and refreshing the browser.
Use the provided `setInputValue(id, value)` function to set the `<input>`
with an `id` of "display-name" to the display name cookie value. This function
will change the value of the `<input>` with the specified `id` attribute to the
specified `value`.

The restores will fail, and you'll see part of each cookie in the display name
`<input>` box. This is because all cookies are stored together in one string
where the individual name/value pairs are separated by a semi-colon and a
space (`; `).

Therefore, you need a more sophisticated approach to getting out the value for
just one cookie!

Review the [documentation on cookies][1] to see one way to do it.

> Hint:  Consider creating a function to go from the full `document.cookie` to
> a single cookie's value, so you don't have to repeat the multiple steps of
> splitting that are required.

Now, modify both `restoreTheme` and `restoreName` to make each cookie restore
properly when both have been set.

> Tip: You do not need to write it exactly like the documentation. In fact, the
> document assumes that `find` will be successful, so you may get a JavaScript
> error in the **Developer Tools Console** (e.g. when the cookies have been
> reset, cleared, or never set).

### Part C: Clearing second cookie

Implement the `clearName` function to remove the display name item
from `document.cookie`. Good news - it should be the same as the theme where
only the name needs to change.

Test by entering a display name, clicking "Clear all", refreshing the theme
and the display name.

## Bonus Phase 4: Test thoroughly

Test all use cases for display name.

1. Enter a display name, then remove focus from the `<input>` field (use TAB on
   the keyboard or click anywhere else on the page - except "Clear all")
    * Expected Result: See the value in the **Developer Tools** for "Cookies".
1. Enter a display name, refresh the browser
    * Expected Result: See the name in the input field.
1. Enter a display name and select a theme, refresh the browser
    * Expected Result: See the name in the input field, and theme colors
      restored.
1. Reset the "Cookies" for this site in the **Developer Tools**, then refresh
   the page.
    * Expected Result: Empty display name `<input>` field, and theme colors
      black and white with black bars for header and footer.
1. Click "Clear all", then refresh the page.
    * Expected Result: Empty display name `<input>` field, and theme colors
      black and white with black bars for header and footer.
1. Click "Clear all", select a theme (but do NOT enter a display name), then
   refresh the browser.
    * Expected Result: Theme colors restored, empty display name (not "null").

Then combine the test cases for display name with the ones for the theme
expiration (end of phase 3), so you are setting both values and refreshing
before/after `max-age` sections.

* Only theme should be affected by the `max-age`.
* Display name clears on browser quit/restart, but otherwise is restored
  (if set).
* No console errors in any of the cases.
* Deleting cookies either from the **Developer Tools** or with the browser menu
  causes the site to behave as it did on first viewing (black & white theme
  with empty display name).

## What you've learned

You put into practice the following features:

* Storing, restoring, and clearing of cookies in JavaScript
* Comparing and contrasting **session cookies** vs. **persistent cookies**
* Viewing "Cookies" in the **Developer Tools**

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
[starter]: https://github.com/appacademy/practice-for-week-09-cookies
[http://localhost:5000]: http://localhost:5000