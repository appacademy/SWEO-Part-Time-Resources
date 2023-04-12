import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HoroscopeContext } from './context/HoroscopeContext';

const Root = () => {
  return (
      <App />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <HoroscopeContext.Provider value={{ sign: "Leo" }}>
    <Root />
    </HoroscopeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
