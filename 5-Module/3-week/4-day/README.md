# `M5W3D4`

## Redux

- Lightweight JavaScript framework that is used to manage the frontend state of a web app
- Stores information that can be accessed from any component in our app (just like Context)
- Gives us access to powerful development tools to aid the dev & debugging process

### 3 Principles of Redux

- Single source of truth
  - Entire redux state is stored in a single POJO
- State is read only
  - State object is not modifiable directly, you must modify it by "dispatching actions"
- Changes are made with pure functions (no side effects)
  - A "reducer" is a pure function that will receive the dispatched actions and return the updated state

### Redux vs Context

- Context was made avaliable after Redux was released
- Redux is generally used for larger-scale applications than what React Context can be used for
- Context is simpler and requires less boilerplate code
- Redux provides support for middleware, and dev tools that have more features

```js
// Context setup
import { createContext } from 'react';

export const MyContext = createContext();

// Redux setup
import { createStore } from 'redux';

export const MyStore = createStore();
```

---

```js
// Context setup
import { MyContext } from './context/MyContext';

const Root = () => {
    return (
        <MyContext.Provider value={{ ex: ample }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MyContext.Provider>
    );
};

// Redux setup
import { Provider } from 'react-redux';
import { MyStore } from './store';

const Root = () => {
    return (
        <Provider store={MyStore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};
```
