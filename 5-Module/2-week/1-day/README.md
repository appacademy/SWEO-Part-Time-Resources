# Learning Boost (5 Minutes)

    Take 5 minutes to do the learning boost!

# Event listeners in React recap
- React has many different types of event listeners (AKA event handlers), the most common one you will be using as a student at AA will be the `onClick` event handler.
- The `onClick` event handler is assigned a callback function, and when the event listener is triggered, the callback function will execute.
- Remember to put your callback function in JSX, as event handlers are attached to HTML elements and to use javascript in an HTML element, you must use a JSX expression.

```js
function exampleComponent(){

  const handleClick = () => {
    console.log('hello from handleClick callback function');
  }

  return (
      <button onClick={() => handleClick()}> Submit </button>
  )
}
```

## Prevent an html elements default behavior

- Certain html elements, have their own built in "event listeners" that run their own callback functions, such as buttons contained within a form.
- Sometimes we want to stop this default behavior, and instead execute our own callback function.
- You can prevent the default behavior of an html element by calling `preventDefault()` on the event object.
- Every event handler is provided with an event object. There is a lot going on in that object, if you want to take a look at it, try console logging the object and explore its many properties! Or you can look at the Event object on MDN!

```js
function exampleComponent(){

  const handleClick = (event) => {
    // event.preventDefault()
    console.log('hello from handleClick callback function');
  }

  return (
    <form action='/submit'>
      <button onClick={(event) => handleClick(event)}> Submit </button>
    </form>
  )
}
```

## React Forms

- A react form is almost completely identical to a normal HTML form.
- The `<label>` element replaces the `for` attribute with the `htmlFor` attribute
- We create controlled components to give our variables "one source of truth". HTML element inputs naturally keep track of their current values as state. We want React to provide us with all of our state to adhere to the "one source of truth" policy that React likes.
- We do this by creating controlled inputs, each value of an input will be stored as a state using the hook `useState()`
- We will set the natural state of an html element using our own React state.
- Each input will be given an event handler called `onChange`, this event handler will have a callback function to update our React state's value whenever it detects user input.
- The event object has a property in it that stores the value of its current target, we can access this value and pass it in as an argument to our state updater functions.

```js
function exampleComponent(){

    const [firstName, setFirstName] = useState('');
    const [bio, setBio] = useState('');

    const handleClick = (event) => {
        event.preventDefault()
        console.log('form successfully submitted');
    }

    return (
        <form>
            <label htmlFor='firstName'> First Name </label>
            <input onChange={(event) => setFirstName(event.target.value)} type='text' value={firstName}/>
            <label htmlFor='bio'> Bio </label>
            <textarea onChange={(event) => setBio(event.target.value)} value={bio}/>
            <button onClick={(event) => handleClick(event)}> Submit </button>
        </form>
    )
}
```

# Short Practice: Forms (30 Minutes)

<br>

- ## Short Practice: Forms Walkthrough (10 Minutes)

<br>
<br>

# Short Practice: Forms - Add Fields (30 Minutes)

<br>

- ## Short Practice: Forms - Add Fields Walkthrough (10 Minutes)
