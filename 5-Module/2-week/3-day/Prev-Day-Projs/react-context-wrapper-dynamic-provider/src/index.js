import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//!!START SILENT
import HoroscopeProvider from './context/HoroscopeContext';
//!!END
//!!ADD
// import { HoroscopeContext } from './context/HoroscopeContext';
//!!END_ADD

const Root = () => {
  return (
    //!!ADD
    // <HoroscopeContext.Provider value={{ sign: 'Leo' }}>
    //!!END_ADD
    //!!START SILENT
    <HoroscopeProvider>
    {/*!!END */}
      <App />
    {/*!!START SILENT */}
    </HoroscopeProvider>
    //!!END
    //!!ADD
    // </HoroscopeContext.Provider>
    //!!END_ADD
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
