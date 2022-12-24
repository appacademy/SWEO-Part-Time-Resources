# Intro To Express Objectives
## Below is a complete list of the introductory Express learning objectives for this lesson. When you complete this lesson, you should be able to perform each of the following objectives. These objectives capture how you may be evaluated on the assessment for this lesson.

- Initialize an Express application
- Use Express to send simple text and JSON in response to a request from a client
- Create a route handler using express
- Compare and contrast the methods and properties on the request and response objects between an Express and Node/HTTP server
- Predict the order that Express will match requests with route handlers
- Justify the selection of Express as a back-end framework
- Refactor an HTTP server and convert it to use Express
- Debug an Express server using Postman

## What is Express?

[Express](https://expressjs.com/) is a minimal and flexible Node.js backend framework that is used for building APIs and web applications. It is easy to use, has efficient routing, and convenient debugging.

<b>Backend frameworks</b> are the libraries of server-side programming languages that help build the backend structure for a website. Frameworks for web development are incredibly helpful in constructing interactive applications.

## Why Express?

In an earlier lesson, you created a simple HTTP server using JavaScript and Node.js. That HTTP server, or web application, returned a simple response based upon the incoming request's URL (and HTTP method in one case). For example, a request to the URL http://localhost:3000 could return a 200 OK as the status code of the response sent to the client from the server.

Overall, this was easy to do using Node's native APIs; however, the requirements were relatively straightforward. Using Node to create a web application with features commonly found in websites unfortunately requires a fair amount of boilerplate code code (i.e. verbose, repetitive code). This can slow down and distract developers from working on more important tasks.

Enter Express, a popular Node.js framework for building web applications. Express aims to make common web development tasks easier to implement by reducing the amount of boilerplate code you need to write. This allows you to focus on the things that make your web application special. At the same time, Express, is, in its own words, unopinionated and minimalistic, giving you the flexibility to decide what's best for your situation.

## Try It!

Now, you're ready to create your first Express application!

### Create a project
``` 
npm init -y
```

### Install express
```
npm install express@^4.0.0
```
### Remember your gitignore
- create a file called .gitignore
- in that file add the path of anything you would like to be ignored and not uploaded to your repo. In this case and almost every project you will do in a/A we will be ignoring 
```
./node_modules
```

### Create a file to store our app
Add a file named app.js to your project folder, and open it in your code editor. Use the require directive to import the express module and assign it to a variable named express. The express variable references a function (exported by the express module) that you can call to create an Express application. Assign the return value from the express function call to a variable named app:


### Import express
```
const express = require('express');
```
### Create our app
```
// Create the Express app.
const app = express();
```
The app variable holds a reference to an Express Application (app) object. You'll call methods on the app object as you build out your web application.
