# M5W2D1 React Forms

## Create React App/Install React Router Commands
```
//create react app
npx create-react-app <your directory name> --template @appacademy/react-v17 --use-npm

// install react router
npm install react-router-dom@^5
```

## Strictly Paired Long Practice 1 hour [Intro to React Forms](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-28---react-forms-and-context/long-practice--intro-to-react-forms)

- Short Practice Q&A 15 min

# React Context
## What is React Context?
- Similar to our useState, but instead of being local component memory/state, we can use React Context to create Global Application memory/State, or partioned memory/state (using on a specefic component tree in yoru application)
- Provides a way to pass data through component trees without prop drilling
- Generally used instead of trying to prop drill through 4 or more components.

## Main Parts of React Context API
- Provider
    - A component that is used to wrap other components in in order to give access to the context's value.
    - If you are doing global application context, then you would wrap our app component with this context.
- Consumer
    - A react component that read the context's value.
    - Must be nested under the the Provider component.
    - You may not nesecarilly see this in our code, but you will use it when grabbing/setting our information from/for our provider
- Context
    - Allows global data in a react application and store a single value
```
createContext() // create a global object

useContext() // consumes/uses that global information
```

## Important things to remember about React Context
- Any component that is subscribed or connected to this context will re-render when this context is changed.
- Use it sparingly, or only when needed to avoid unnecessary re-renders


### [React Context Docs](https://reactjs.org/docs/context.html)

## Loosely Paired Practice 30 min [Practice: Create Context](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-28---react-forms-and-context/practice--create-context)

- Short Practice Q&A 15 min

## Paired Practice 30 min [Practice: Context Wrapper - Dynamic Provider](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-28---react-forms-and-context/practice--context-wrapper---dynamic-provider)

- Short Practice Q&A 15 min

## Paired Practice 30 min [Practice: Context Wrapper - Dynamic Consumer](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-28---react-forms-and-context/practice--context-wrapper---dynamic-consumer)

- Short Practice Q&A 15 min

## [Formative Quiz - Tuesday(Recall)](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-28---react-forms-and-context/formative-quiz---tuesday--recall-)

# EOD
