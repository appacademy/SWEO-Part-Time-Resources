# Practice: Importing and Exporting using ES6 Modules

In this practice, you will import JavaScript script files into other JavaScript
files to be used on the browser using ES6 imports.

## Set up

Clone the practice from the [starter].

## Instructions

You've been provided a web app for a page that displays Mr. and Mrs. Potato
Head. There are three buttons: one that makes them say hello, one for goodbye,
and one to switch to the other Potato Head. Mr. Potato Head's quotes are different
from Mrs. Potato Head's quotes, so Mr. Potato Head's buttons when pressed should
display different greetings than Mrs. Potato Head's.

The programmer has written all the code for you, but forgot to `import` and
`export` the files. Your job will be to look through the __assets__ folder,
find files that are dependencies or have dependencies, and connect them with
the proper statements.

Run `node app.js` in your terminal and open the application at [localhost:5000].
Test the buttons to make sure they work as described. If they do not, check the
"Console" tab in your browser's Developer Tools for any errors that may give
clues on how to connect the files.

Some requirements and important points to keep in mind:

- Use `export default` at least once
- Do NOT touch __app.js__
- Do NOT use CommonJS (`require`, `module.exports`) syntax for this exercise

[starter]: https://github.com/appacademy/practice-for-week-09-es6-modules
[localhost:5000]: http://localhost:5000