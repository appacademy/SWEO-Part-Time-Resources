# Monday

# React Forms

Forms are important in React. Remember, React is about letting us replace DOM manipulation through vanilla Javascript, but it also is heavily used to help us create single-page applications. One of the things we want to aim to do is to tell users about their form data dynamically. Have you ever gone to a site to sign up/login, and the form dynamically renders errors like "password must contain xyz items", or "username is already in use". Eventually, we will want to handle some of the logic for this with the backend, but forms is one of those areas we can start to add validations on the frontend.


## JSX for Form

We will be using `<form>` tag. This will allow us to make a block of jsx where every child is part of the form item. This is important to note, as we can get some unexpected behaviors if we are not careful with form items and how we want them to behave. One of these things is the use of `buttons` inside of the form. These will inherit the behavior of `<form>`, which will cause them to want to submit by default. We may not want the "submit" functionality to happen automatically, like if we need to check for information.

We will also heavily be using `state` to manage the form inputs.


```jsx
import { useEffect, useState } from 'react';

const FormExampleComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);



    const handleFormSubmit = async (e) => {
        // prevent default button behavior
        e.preventDefault();
        // prevent propagation
        e.stopPropagation();

        // create a new errors array to force rerender on state change
        const newErrors = [];
        if (username.length < 6) {
            newErrors.push("username must be longer than 6 characters");
        }
        if (password.length < 5) {
            newErrors.push("password must be longer than 6 characters");
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
        } else {

            const form = {
                username,
                password
            };

            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            };

            // const res = await fetch("https://someAPI.com/signup", options);
            // const data = await res.json();
            // console.log(data)
            console.log("form submitted")
        }
    }


    return (
        <form onSubmit={(e) => handleFormSubmit(e)}>
            {errors.length ? errors.map((err, idx) => (
                <div key={`${err}-${idx}`}>
                    <p style={{ color: 'red' }}>{err}</p>
                </div>
            )) :
                null
            }
            <div className="input-label-div">
                <label htmlFor='username'>Username:</label>
                <input
                    id='username'
                    type='text'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div className="input-label-div">
                <label htmlFor='password'>Password:</label>
                <input
                    id='password'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button onClick={(e) => handleFormSubmit(e)}>Submit</button>
        </form>
    )
};

export default FormExampleComponent

```
