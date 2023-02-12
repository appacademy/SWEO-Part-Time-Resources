import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import FavFruitProvider from './context/FavFruitContext';

const Root = () => {
  return (
    <FavFruitProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavFruitProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
