import './UseState.css';
import { useState } from 'react';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);


  const themeHandler = () => {
    return theme === 'light' ? 'dark' : 'light';
  };

  return (
		<div className={theme}>
			<h1>UseState Component</h1>
			<button onClick={() => setTheme(themeHandler())}>Change theme</button>
			<h1>{count}</h1>
			<button onClick={() => setCount(prevTheme => prevTheme + 1)}>Increment</button>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
		</div>
  );
};

export default UseState;