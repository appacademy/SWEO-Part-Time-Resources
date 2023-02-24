import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//!!START SILENT
import { BrowserRouter } from 'react-router-dom';
//!!END
import App from './App';

//!!START SILENT
const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

//!!END
ReactDOM.render(
  <React.StrictMode>
    {/*!!START SILENT */} 
    <Root />
    {/*!!END */}
    {/*!!ADD */}
    {/* <App />  */}
    {/*!!END_ADD */}
  </React.StrictMode>,
  document.getElementById('root')
);
