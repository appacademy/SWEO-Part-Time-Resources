import { useState } from 'react';
import './UseState.css';

const UseState = () => {

  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  let handleDarkModeClick = () =>{
if (theme === 'light') setTheme('dark')
if (theme === 'dark') setTheme('light')
  }

  
  return (

    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      {/* <button onClick={() => (theme === 'dark') ? setTheme('light') : setTheme('dark')}>Toggle Theme</button> */}
      <button onClick={handleDarkModeClick}>Toggle Theme</button>

      <h1>{count}</h1>

      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
