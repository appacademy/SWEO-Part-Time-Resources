# React Forms Project

For this project, you will be creating a user registration form in React. Your
form should have the following fields:

1. Name
2. Email
3. Phone number
4. Phone type: Home, Work, or Mobile (dropdown menu)
5. Staff: Instructor or Student (radio buttons)
6. Bio (text area)
7. Sign up for email notifications (checkbox)

On submit, the form should validate the input in each field and either inform
the user of any errors or, if the input has no errors, send the data off as
JSON. (Since there is no backend, you can verify that the form has correctly
captured the input by printing the form data with `console.log()` instead.)

By the end of this project, you should be able to:

1. Create a basic form in React
2. Receive and error-check user input on the form

## Implementation

Create a new React app and add a Form component with the fields listed above.
Start with the HTML (`label`, `input`, `select`, `textarea`, `button`, etc.).
Make sure you're logging the form data when you hit the submit button.

Once that's working, get your validations set up.

## Validations

* Name must be present
* Email must be present and should be properly formatted
* Phone number should be properly formatted
* Phone type should be selected if a phone number is present
* Bio should have a character limit of 280 characters

The name and bio field can be validated in vanilla JS but validating email and
phone numbers is a bit more complex. There are multiple methods to implement
these: do a bit of Googling and find a method you like. (You also might want to
check out [regular expressions][regex] for pattern matching.)

Your form should block submission and display a descriptive error message
whenever validations fail.

## Bonus

Once your form is working, here are some stretch goals:

* Store the time of submission as another key-value pair in the JSON object you
  `console.log`
  * **Hint**: Use `Date`
* Disable the phoneType dropdown menu if the Phone field is empty
* Add a `placeholder` to show the proper format for inputting a phone number
* On submit, make sure the phoneType is blank in your JSON object if no phone is
  given (even if there is a phoneType selected)
* Highlight fields that fail validation in red
* Associate each error message with its field on the form instead of printing
  them all at the top
* Render errors without shifting the form fields up or down 
  * **Hint**: Reserve space for the error messages even when they are not
    present
* After a user has submitted a form with errors, validate the updates on
  keystroke instead of waiting for submit so the errors clear as soon as they
  are fixed
* If you have accomplished all of the above, your Form component has likely
  grown quite large. It also probably has some repeated lines of code. Remember
  that shorter, more modular code that does not repeat itself is easier to
  understand and maintain. With that in mind, refactor your code to clean up
  your Form component! In particular, look to see if any code blocks could be
  refactored into their own React components. 
  * **Suggestion**: Consider rendering each input type (text, select, textarea,
    radio, checkbox) as a React component. To help keep your code manageable and
    modularized, define each new component in its own file.
  * Try adding the validations to their respective input components. (You will
    need to create separate validation functions for each field.)
* Add CSS styling

Congratulations! You now know how to build and use a basic form in React!

[regex]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
