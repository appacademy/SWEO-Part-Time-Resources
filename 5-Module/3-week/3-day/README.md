# `M5W3D3`

## Class Components

### Before React 16 / Hooks

- Class components were only way to:
  - Manage component state
  - Lifecycle methods
    - componentDidMount
    - componentDidUpdate
    - componentWillUnmount

### Class vs Function
    
```
import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props); // must be called if creating a constructor method
    
    // Initialize the component state object
    this.state = {
      count: 0
    };
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: 0 });
    }, 1000);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('hello world!');
    };
  };

  componentWillUnmount() {
    console.log('cleanup');
  };

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <div>{this.state.count}</div>
        <button onClick={() => this.setState((state) => ({ count: state.count + 1 }))}>
          Increment
        </button>
    );
  };
};
```

---

```
import { useState, useEffect } from 'react';

function FunctionComponent({ title }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(0);
    }, 1000);
    return () => console.log('cleanup');
  }, []);

  useEffect(() => {
    console.log('hello world!');
  }, [count]);

  return (
    <>
      <h1>{title}</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
};
```

|                   | Class                | Function                            |
|-------------------|----------------------|-------------------------------------|
| Returning JSX     | Define render method | return value                        |
| Props             | this.props           | Passed in as argument               |
| Component State   | this.state           | useState hook                       |
| Initial Render    | componentDidMount    | useEffect (empty dependency array)  |
| Re-renders        | componentDidUpdate   | useEffect (dependency array values) |
| Component Removal | componentDidUnmount  | Return value of useEffect           |
