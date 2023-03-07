# Practice: React Forms - Implementing Validations

One last feature needs to be added before the simple `Contact Us` form is done:
form validation. Without validation, a user can submit the form without
providing a single bit of data. In this practice, you'll use vanilla
JS to validate that the "Name" and "Email" form fields have values before
allowing the form to be submitted.

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Validate input

To set up validation, you will first add a slice of state with two indexes,
`validationErrors` and `setValidationErrors`. It should have an initial state of
an empty array.

```js
const [validationErrors, setValidationErrors] = useState([]);
```

You will validate the `name` and `email` inputs. Create a `useEffect` that
listens for the `name` and `email`. Inside the `useEffect`, add an `errors`
variable and assign it an empty array. This will be your mutable array.

Still inside the `useEffect`, create two conditionals:

1. The first should check `name` to see if its length is greater than 0. If it
   isn't, push the message `Please enter your Name` to the `errors` array.
2. The second conditional should check to see if the `email` input has an `@` in
   it. If it doesn't, push the message `Please provide a valid Email` to the
   `errors` array.

Finally, before concluding the `useEffect`, set the `validationErrors` state to
the `errors` array.

## Render Validation Errors

Add a conditional to the `onSubmit` function that returns an `alert` saying
`Cannot Submit` if `validationErrors` has a length greater than 0. If
there are no validation errors, it should submit the form and reset all the
state variables.

In the return of the function component (above the first input inside of your
form element), use an inline conditional expression with a logical `&&` operator
to conditionally render an unordered list of validation messages if the
`validationErrors` array has a `length` greater than `0`:

```js
{validationErrors.length > 0 && (
   <div>
     The following errors were found:
     <ul>
       {validationErrors.map(error => (
         <li key={error}>{error}</li>
       ))}
     </ul>
   </div>
)}
```

> **Note**: You must explicitly check that `validationErrors.length` is `> 0`
> here. Why? Try using only `validationErrors.length` as the condition and enter
> a valid name and email to find out!

You should now be able to see your error messages. Yea! If you refresh your
sandbox browser, however, you will see that there is now another problem: the
error messages show whenever the `Name` and `Email` fields lack valid input,
including for a blank form! This happens because the `useEffect` runs after
**every** render. After the first render, the `useEffect` runs, sees that `Name`
and `Email` do not have valid input because they are blank, and sets
`validationErrors` accordingly.

You don't want a new form to show errors. In fact, you don't want to display any
errors until a user tries to submit the form. To fix this, create a new state
variable `hasSubmitted` that is initialized to `false`. Set it to `true` when a
user clicks `Submit` and reset it to `false` on a successful submission. In the
component's `return` statement, add this variable to the conditional checking
whether or not to render errors to the page.

Putting all of this together, your updated `ContactUs` function
component should now look something like this:

```js
// ./src/components/ContactUs/index.js
import { useEffect, useState } from 'react';

function ContactUs(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if (!name.length) errors.push('Please enter your Name');
    if (!email.includes('@')) errors.push('Please provide a valid Email');
    setValidationErrors(errors);
  }, [name, email])

  const onSubmit = e => {
    e.preventDefault();

    setHasSubmitted(true);
    if (validationErrors.length) return alert(`Cannot Submit`);

    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
    setValidationErrors([]);
    setHasSubmitted(false);
  }

  return (
    <div>
      <h2>Contact Us</h2>
      {hasSubmitted && validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {validationErrors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={e => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
   );
 }

export default ContactUs;
```

## Test your code

In your sandbox browser, attempt to submit the form without providing any input.
You should receive an alert and two validation error messages:

```plaintext
The following errors were found:

  * Please enter your Name
  * Please provide a valid Email
```

Now fill in the form fields. Note that the error messages go away as you fulfill
their conditions. When you have entered your name and a valid email, click
`Submit` again. Success!

Overall, this approach to validating the form is relatively simple. But there
are other ways to validate, including the use of packages such as [validator.js].

### Client-side vs server-side validation

As a reminder, client-side validation like the validations you just implemented
in the `ContactUs` functional component, is optional. **Server-side validation
is not optional**. This is because client-side validations can be disabled or
manipulated by savvy users.

Sometimes the "best" approach is to skip client-side validations and rely
completely on the server-side validation. Using this approach, you'd simply call
the API when the form is submitted; if the request returns a `400 BAD REQUEST`
response, you'd display the validation error messages returned from the server.
If you do decide to implement client-side validations, do it with the goal of
improving your application's overall user experience--e.g., providing faster
feedback--and not as your only means of validating user-provided data.

## What you have learned

**Congratulations!** In this practice you have learned

1. How to implement simple client-side form validations
2. The difference between validating inputs on the client and validating them on
   the server

[validator.js]: https://github.com/validatorjs/validator.js
[CodeSandbox]: https://www.codesandbox.io
