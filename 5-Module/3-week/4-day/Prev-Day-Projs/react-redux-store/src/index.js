import React from 'react';
import ReactDOM from 'react-dom';
//!!START SILENT
import { Provider } from 'react-redux';
//!!END
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//!!START SILENT
import configureStore from './store';
//!!END
import './index.css';

//!!START SILENT
const store = configureStore();

//!!END
ReactDOM.render(
  <React.StrictMode>
    {/*!!START SILENT */}
    <Provider store={store}>
    {/*!!END */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/*!!START SILENT */}
    </Provider>
    {/*!!END */}
  </React.StrictMode>,
  document.getElementById('root')
);
