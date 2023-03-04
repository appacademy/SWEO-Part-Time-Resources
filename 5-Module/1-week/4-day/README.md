# M5W1D4 React

## Hooks
- Hooks let you use state and additional react features without writing the traditional class component for react
- most common hooks you will use
    - useState()
    - useEffect()

## React State
- React State is a components memory
- Local to the component, but can be passed down as a porp to another component
- Can hold anything in local component memory that you may want to update or render differently
[React State Docs](https://beta.reactjs.org/learn/state-a-components-memory)



## useState()
```
import {useState} from 'react

//inside of component
const [state, setState] = useState()
```
- used to track/set/update current components state to change rendered items

[useState Docs](https://beta.reactjs.org/reference/react/useState)

# Paired Practice 30 min [Practice: useState](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-27---react-basics-and-hooks/practice--usestate)

- Short Practice Q&A 15 min


## useEffect()
```
import {useEffect} from 'react

//inside of component before return
const useEffect(() => {//code here}, ["dependency array here"])
```
- Useffects will handle asynchronous functions and invoke any side effects in functional components
- Useffects will run after the component has rendered and on any additional renders of this component
- uses a dependency array that will trigger re renders which additionaly will run the useEffect again

[useEffect Docs](https://reactjs.org/docs/hooks-effect.html)
[additional useEffect Docs](https://beta.reactjs.org/reference/react/useEffect)

# Paired Practice 30 min [Practice: useEffect Api](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-27---react-basics-and-hooks/practice--useeffect-api)

- Short Practice Q&A 15 min

# Paired Short Practice 30 minutes [Practice useEffect Debug](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-27---react-basics-and-hooks/practice--useeffect-debug)

- Short Practice Q&A 15 min

# Paired Long Practice 1 Hr: 30 minutes [Long Practice: useEffect](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-27---react-basics-and-hooks/long-practice--useeffect)

# Paired Long Practice 1 Hr: 30 minutes [Long Practice: Explore Hooks](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-27---react-basics-and-hooks/long-practice--explore-hooks)
# EOD
