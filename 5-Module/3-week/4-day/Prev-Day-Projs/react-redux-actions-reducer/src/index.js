import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store';
import './index.css';
//!!START SILENT
import { loadArticles } from './store/articleReducer';
//!!END

const store = configureStore();

//!!START SILENT
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.loadArticles = loadArticles;
}

//!!END
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
