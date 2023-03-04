import './UseState.css';

import { useState } from 'react';

const UseState = () => {
  // console.log('usestate', useState);
  const [logged, setLogged] = useState(false);
  const [inputValue, setInputValue] = useState('initial state');

  const handlLogin = () => {
    setLogged(true);
    setInputValue('');
  };

  const handleLogout = () => {
    setLogged(false);
  };

  const handleInputChange = (e) => {
    // console.log('e ---------------------->', e.target.value);
    setInputValue(e.target.value);
  };

  // if (logged) {
  //   return (
  //     <div>
  //       <h1>we are logged in</h1>
  //       <button onClick={handleLogout}>logout</button>
  //     </div>
  //   );
  // }

  return (
    <>
      <h2>{inputValue}</h2>
      {!logged ? (
        <div>
          <h1>you are not logged in</h1>
          <input onChange={(e) => handleInputChange(e)}></input>
          <button onClick={handlLogin}>login</button>
        </div>
      ) : (
        <div>
          <h1>we are logged in</h1>
          <button onClick={handleLogout}>logout</button>
        </div>
      )}
    </>
  );
};

export default UseState;
