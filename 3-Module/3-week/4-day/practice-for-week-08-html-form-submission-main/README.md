# Practice: HTML Form Submission

In this practice, you will use your knowledge of the flow of a typical HTML form
submission, to create route handlers for form submissions.

## Set up

Clone the project from the [starter].

A server has been created for you in **server.js**. You will be adding to the
code in this file for all of the following phases.

## Phase 1: Creating a Cat

There are two HTML files with forms in the **views** folder. The first is the
**cat-form.html**. You can see this form in the browser by starting your server
and navigating to [http://localhost:5000] and clicking the `Create a Cat` link.

The `method` and `action` attributes on an HTML `<form>` element determine the
method and URL of the request that will be made when the form is submitted. The
`method` attribute must be `GET` or `POST` request methods and the `action`
attribute will be the URL of the request. Determine the method and URL of the
request that will be made when the `Create a Cat` form in the
**views/cat-form.html** file is submitted.

Create a route handler for the form submission endpoint in the **server.js**
file where it has the line "Your code here". The route handler should process
the form data by creating a `new Cat` with the data from the form input fields
and save it to the `cat` variable declared right before the server is created.
The server should already have the form data saved to `req.body` in the form of
a JavaScript object. Once you complete the operation of creating the cat on the
server, redirect the user to the home page, `"/"`.

Time to test your code! If you do things correctly, you should be redirected to
the home page once you submit the form. Your terminal should have also logged
the newly created cat's information!

## Phase 2: Creating a Dog

Similar to the cat form, for the second form, `dog-form.html`, create a route
that handles the submission of this form. When the form is submitted, it should
create a `new Dog` and save it to the `dog` variable declared right before the
server is created. It should also redirect the user to the home page.

If done correctly, you should be redirected when you submit the dog form and
the newly created dog's information should be logged in the terminal!

[starter]: https://github.com/appacademy/practice-for-week-08-html-form-submission