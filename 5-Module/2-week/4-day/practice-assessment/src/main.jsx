import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import FavFruitProvider from './context/FavFruitContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavFruitProvider>
      <App />
    </FavFruitProvider>
  </React.StrictMode>
);
