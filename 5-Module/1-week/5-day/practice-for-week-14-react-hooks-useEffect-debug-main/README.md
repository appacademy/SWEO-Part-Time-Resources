# useEffect Debug

In this practice you will debug an app that uses the `useEffect` hook.

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Instructions

The app should start out with a welcome page and a Login button.

When you click the button you should see a random user from the [randomuser.me
api][randomuser-api] on the left with information and a logout button beneath
the image. (The reduced browser dimensions in CodeSandbox mean that this random
user may appear on top instead of to the left.) On the right there should be a
search box where, if you input a different username, the app will show a new
user on the left. The names will not coordinate with each other. If you put in
the same name again, however, the picture will not change, and if you repeat a
name, it will show the person that was originally coordinated with that name.

When you log out, you should be directed back to the welcome page.

If you refresh the page or logout and login again, you should see the last user
that was showing.

When you first run the app, it will have 8 errors (including console warnings).
Your task is to find and correct all 8 so that the app works correctly and
without warnings. Make sure that every feature mentioned above works as
described.

Good Luck!

[randomuser-api]: https://randomuser.me/
[CodeSandbox]: https://www.codesandbox.io