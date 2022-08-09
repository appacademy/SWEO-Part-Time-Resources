# Practice: React Forms

As you've learned in earlier lessons, HTML forms are an essential and ubiquitous
part of the web. Forms are used to search, create resources such as accounts and
posts, update resources, and more. Learning how to create forms using React is
an invaluable skill for you to learn and practice.

When you finish this practice, you should be able to

- Create a React functional component containing a simple form
- Define controlled inputs with the `useState` hook for different form inputs

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Creating a simple form

To learn how to create HTML forms in React, you will create a `ContactUs`
functional component that will contain a simple `Contact Us` form. The form will
initially contain just three fields:

- Name  - The name of the user filling out the form
- Email - The user's email
- Phone - The user's phone number

## Defining the `ContactUs` form component

To start, add a functional component named `ContactUs` and render the HTML form:

```js
// ./src/ContactUs.js
function ContactUs() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='text' />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input id='phone' type='text' />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
```

So far, there's nothing particularly interesting about this form. The only thing
that looks different from regular HTML is that the `<label>` element's `for`
attribute is `htmlFor` in React.

Be sure to update your __App.js__ to render the `ContactUs` component:

```js
// ./src/App.js
import ContactUs from './ContactUs'

function App() {
  return (
    <ContactUs />
  );
}

export default App;
```

Look at the form in your sandbox browser. You can fill out the form, but the
component currently doesn't know what the form input values are. To keep track
of each of the input values, you will need to initialize and maintain component
state.

## Adding state to the component

To add state to the `ContactUs` component, import `useState` from React.
Initialize three state variables--`name`, `email`, and `phone`--as empty
strings. Then use them to set the `value` attributes on the corresponding form
field `<input>` elements:

```js
// ./src/ContactUs.js
import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' value={name} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='text' value={email} />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input id='phone' type='text' value={phone} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
```

If you refresh the sandbox browser now, then you will get a warning in your
console saying:

```text
 You provided a `value` prop to a form field without an `onChange` handler. This
 will render a read-only field.
```

Also, if you try typing in any of the fields, they won't update anymore. This is
because the `value` attribute for each input will always be an empty string.

For example, the `Name` field will always be an empty string because the `value`
attribute on that field is set to the `name` state variable. The `name` state
variable is initialized to an empty string and is never updated. To fix this,
you need to update the `name` state variable whenever the user types into the
field.

When a form field element value is changed, the associated component state
variable needs to be updated. Adding or removing a character within an `<input>`
element raises the `onChange` event, which makes it a natural choice for keeping
the component state in sync:

```js
<input
  id='name'
  type='text'
  onChange={e => setName(e.target.value)}
  value={name}
/>
```

Remember that when an event is raised, the associated event handler method is
called and passed an instance of the `event` object. A reference to the element
that raised the event is available through the `event` object's `target`
property. Using the reference to the form field element, you can retrieve the
current value as the `value` property on the target object.

Use the same approach to add an `onChange` event handler to the `Email` and
`Phone` form fields as well:

```js
// ./src/ContactUs.js
import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
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
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
```

Click the `Open in New Window` button in your sandbox browser (upper right) and
open the React DevTools in the new window, you can see the component's state
update as you type within each of the form fields (i.e., the `<input>`
elements). You can `console.log(name)` above your return to see this change in
real time in the console.

![onchange event handler]

## Handling form submissions

Now that the `ContactUs` component is initializing and updating state when form
field values are changed, it's time to handle form submissions! To start, create
an `onSubmit` function and attach it to the `onSubmit` event listener for the
form. Within the `onSubmit` event handler prevent the default behavior so that
the page doesn't reload:

```js
const onSubmit = e => {
  // Prevent the default form behavior so the page doesn't reload.
  e.preventDefault();
};
...
<form onSubmit={onSubmit}>
...
```

Then use the `name`, `email`, and `phone` values from state to create a new
`contactUsInformation` object literal:

```js
const onSubmit = e => {
  // Prevent the default form behavior so the page doesn't reload.
  e.preventDefault();

  // Create a new object for the contact us information.
  const contactUsInformation = {
    name,
    email,
    phone,
    submittedOn: new Date()
  };

  // Ideally, we'd persist this information to a database using a RESTful API.
  // For now, though, just log the contact us information to the console.
  console.log(contactUsInformation);
};
```

Notice that an additional property, `submittedOn`, is being added to the
`contactUsInformation` object literal to indicate the date/time that the
information was submitted. Ideally, the `contactUsInformation` object would be
persisted to a database using a RESTful API, but for now, just log the object to
the console.

Now that the form submission has been processed, reset the `name`, `email`, and
`phone` values to empty strings:

```js
const onSubmit = e => {
  // Prevent the default form behavior so the page doesn't reload.
  e.preventDefault();

  // Create a new object for the contact us information.
  const contactUsInformation = {
    name,
    email,
    phone,
    submittedOn: new Date()
  };

  // Ideally, we'd persist this information to a database using a RESTful API.
  // For now, though, just log the contact us information to the console.
  console.log(contactUsInformation);

  // Reset the form state.
  setName('');
  setEmail('');
  setPhone('');
};
```

Putting all of that together gives you this:

```js
// ./src/ContactUs.js
import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const contactUsInformation = {
      name,
      email,
      phone,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <h2>Contact Us</h2>
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
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
```

You can now fill out each form field in your sandbox browser. When you click
`Submit`, an object containing your `Contact Us` information should appear in
the console! Also, note that the page doesn't reload.

## Controlled components

You've now completed your first React form! In doing so, you used what are known
as _controlled components_.

HTML form elements naturally maintain their own state. For example, an `input`
element will track the state of the value that's typed within it (without any
help from libraries like React). But a React component keeps track of its own
internal state. To keep a component's state as the "one source of truth",
`onChange` event handlers are used on form field elements to update the
component's state when a form element's state has changed.

This approach of making the component's state the "one source of truth" is
called _controlled components_. Inputs in a controlled component are called
_controlled inputs_.

To help you understand how this works, here's an overview of the flow:

1. A user types a character within a form `<input>` element.
2. The `<input>` element's `onChange` event is raised.
3. The event handler method associated with the `<input>` element's `onChange`
   event is called.
4. The event handler method updates the form field's value in state.
5. Updating the component's state causes React to re-render the component, i.e.,
   the `render` method is called.
6. The form `<input>` element is rendered with its `value` attribute set to the
   updated value from the state.

While the above steps might **feel** like a lot, in reality, the entire process
happens very quickly. You can test this yourself by playing around with the
`ContactUs` component. Typing within each of the form fields feels completely
natural; you won't notice the difference!

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Create a React functional component containing a simple form
2. Define controlled inputs with the `useState` hook

[onchange event handler]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/react-class-components/assets/react-forms-onchange-event-handler.png
[CodeSandbox]: https://www.codesandbox.io