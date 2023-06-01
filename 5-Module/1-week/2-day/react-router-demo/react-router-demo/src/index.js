import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// npm install --save react-router-dom@^5.1.2
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
