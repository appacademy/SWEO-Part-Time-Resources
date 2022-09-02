import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

<<<<<<< HEAD

=======
>>>>>>> 2022-Jan-E
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);