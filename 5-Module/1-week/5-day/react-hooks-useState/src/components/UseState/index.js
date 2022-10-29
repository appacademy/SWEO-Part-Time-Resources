//!!START SILENT
import { useState } from 'react';
import './UseState.css';

//!!END
const UseState = () => {
  //!!START SILENT
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);
  
  //!!END
  return (
    //!!ADD
    // <div>
    //!!END_ADD
    //!!START SILENT
    <div className={`state ${theme}`}>
    {/*!!END */}
      <h1>UseState Component</h1>
      {/*!!START SILENT */}
      {/* <button onClick={() => setTheme('light')}>Light</button> */}
      {/* <button onClick={() => setTheme('dark')}>Dark</button> */}
      <button onClick={() => (theme === 'dark') ? setTheme('light') : setTheme('dark')}>Toggle Theme</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement
      </button>
      {/*!!END */}
    </div>
  );
};

export default UseState;
