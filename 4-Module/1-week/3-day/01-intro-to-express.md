# Discussion Questions for Intro to Express

## npm review

- What is npm and what is it used for?
  - npm is a package manager for Node.js. (Recall that Node.js
    is the JavaScript runtime environment on the backend, NOT
    the frontend).
  - A package manager allows you to easily pull other people's
    code and use it in your own projects.
  - A package in npm is also called a node module.
  - To use a package or a node module, make sure to read the
    docs on how to use it as each package is used differently
    based on how the creator of the package coded it.

## nodemon

- How is nodemon useful for developing your Node.js servers?
  - nodemon is useful for hot-reloading your server. Hot-reload
    means that when any changes are made to the server files, the
    server will automatically restart (close the connection then
    open the connection again).
- How do you use nodemon when developing your servers?
  - Install the nodemon node module as a development dependency:
    `npm install -D nodemon`
  - Create a `package.json` script that runs nodemon with the
    file you wish to re-run when any files in the project are
    changed: `nodemon app.js`

## Express

- What is Express?
  - Express is a JavaScript backend framework used to develop
    servers.
- How do you start using Express as your backend framework in
  your projects?
  - Install the Express node module: `npm install express`
  - Import the Express node module as an unnamed export in your
    JavaScript file: `const express = require('express')`
  - Invoke the unnamed export as a function, also called your
    Express application: `const app = express()`
  - Make the Express application listen for requests on a
    specified port number. `app.listen(port, cb)`
- What are reasons why you would choose Express as your backend
  framework?
  - Express is an unopinionated framework, which means it can
    be easily customized, but still eliminates some boilerplate
    code or code that needs to constantly be repeated and can
    be condensed.
  - One of the biggest advantages of choosing Express as your
    backend framework is that it is a JavaScript framework. This
    means that you can develop your frontend code AND your
    backend code in JavaScript instead of coding in two different
    languages for your full-stack application.
- How do you interact with an Express server?
  - Same way as how you interact with all servers, by making a
    request, sending it to the server, and seeing what you get
    back as the response.
