import React from 'react';
import ReactDOM from 'react-dom';

// To see the Form with Bonus features implemented, comment out the first two
// imports below and comment in the latter two.
import './index.css';
import Form from './components/Form';
// import './indexBonus.css';
// import Form from './components/FormBonus';

ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);