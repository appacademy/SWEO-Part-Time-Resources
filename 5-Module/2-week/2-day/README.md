# Learing Boost (5 Minutes)

    - Take 5 minutes to do the learning boost!

# React Form Validations Discussion

- Validating React forms is known as client-side validation. The validations are happening through the users browser, and not through our backend server code aka server-side validation.
- We can validate react forms through state, we can keep track of any form errors, by tracking the values of our controlled inputs.
- Client-side validations have different goals then server-side validations. Generally client-side validations are only checking to see if a user properly formats their data and makes sure they are not submitting an empty form/empty fields.
- Client-side validations are optional, as long as your server-side validations catch all relevent errors then technically that's all you need.
- The major benefit of client-side validation is a better user experience, as the user will recieve feedback from their submission much better.
- Once the client-side validation has been verified to have no errors, then you can proceed as normal and send a POST request to the server.


# Long Practice: Into to React Forms (1 hr)

<br>

# React Context Discussion

- Context provides "global" data to all components. Examples of global data we might want to track are: current user, theme(dark/light mode), or a preferred language. We can create context by using the react `createContext()` function.
- Instead of passing props down from component to component, we can create context, then "consume"(use) that context with the `useContext()` hook.
- To create a dynamic context that is accessible to all our necessary components, we must create a wrapper component.
- In our wrapper component, we pass `props.children` as a prop to our component. This property is an array of all child components that are wrapped by our parent component.

```js
export function PupProvider(props) {
  return (
    <PupContext.Provider>
      {props.children}
    </PupContext.Provider>
  )
}
```
