# Code for Redux Thunk Videos

To access the code that is used in the Redux Thunk videos, click the `Download
Project` button at the bottom of this page and clone the repo onto your
computer.

**IMPORTANT:** The videos show an app created with create-react-app. The code
available below has instead been updated to use the Vite template with which you
are familiar. As a result, you will see some non-essential-for-thunks
differences in the codebase. For example:

* The component files in the videos have a __.js__ extension instead of a
  __.jsx__ extension.
* In the store, the videos access the runtime environment using
  `process.env.NODE_ENV`; Vite provides access to this information through
  `import.meta.env.MODE`.

The videos also use a very inefficient selector function in `TweetList`; that
has been corrected in the codebase below.

> **Note:** These videos essentially build up the starter code for the "Thunk
> Twitter: Add Tweet" practice. This repo accordingly also serves as the starter
> for that practice.
