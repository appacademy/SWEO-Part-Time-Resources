import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//!!START SILENT
import { PupProvider } from './context/PupContext';
//!!END

ReactDOM.render(
  <React.StrictMode>
    {/*!!START SILENT */}
    <PupProvider>
    {/*!!END */}
      <App />
    {/*!!START SILENT */}
    </PupProvider>
    {/*!!END */}
  </React.StrictMode>,
  document.getElementById('root')
);
