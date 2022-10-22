# Event Handling, and Storage Practice Assessment Project

## Clone the GitHub Repository

Clone the GitHub repository from the green button below.

If you get a `404` error when accessing that link, then you must contact your
PTM as soon as possible with the following message:

```plaintext
Hello, I cannot access the assessment project link.
My github username is <insert your username here>.
```

## Instructions

Open the "index.html" file in your browser. The HTML page contains a list of
tests that you must make pass to complete this portion of the practice
assessment.

For example, the first test reads:

**PROBLEM 1: Make the circle blue**

> - Button `id`: `make-circle-blue`
> - Div `id`: `blue-border-circle`
>
> When you click the button below, you should add the `"blue-fill"` CSS class to
> the blue circle. Adding the `"blue-fill"` CSS class will turn the inside of
> the circle blue.

Open "your-code.js" and write the code to make that happen. If you have written
the correct code, then you can click the button and see the circle turn blue.

**Don't forget to refresh your page when you make changes in the JavaScript
code!**

**You might want to use a VS code extension like Live Server, Problem #4 will
not work unless you have a server running, and it will refresh you page for you
as you save your JavaScript file**

Make all of the tests pass by writing code in "your-code.js" and interacting
with the test in the way specified.

*Some of the problems have a BONUS to implement.  This is to assist in your
practice of the covered material and would not appear on the actual assessment.*

## Testing with Cypress

This installation will take a long time! While you are waiting for the
installation, follow the directions above.

Run `npm install` to install the Cypress testing library.

For Ubuntu/Linux/WSL users, you may have to update your environment to support
Cypress. Based on the [docs for Cypress environment dependencies], run the
following commands to make sure your environment is up to date.

```shell
sudo apt-get update
sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

Run `npm test` to make sure you pass all the test specs.

[docs for Cypress environment dependencies]: https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies