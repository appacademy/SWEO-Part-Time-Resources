import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PupProvider } from './context/PupContext';

ReactDOM.render(
  <React.StrictMode>
    <PupProvider>
      <App />
    </PupProvider>
  </React.StrictMode>,
  document.getElementById('root')
);