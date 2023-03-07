import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//!!START SILENT
import { HoroscopeContext } from './context/HoroscopeContext';
//!!END

const Root = () => {
  return (
    //!!START SILENT
    <HoroscopeContext.Provider value={{ sign: 'Leo' }}>
    {/*!!END */}
      <App />
    {/*!!START SILENT */}
    </HoroscopeContext.Provider>
    //!!END
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
