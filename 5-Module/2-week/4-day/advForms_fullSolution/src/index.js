import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ResultsProvider from './context/ResultsContext';

import './index.css';

function Root() {
  return (
    <BrowserRouter>
      <ResultsProvider>
        <App />
      </ResultsProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
