import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//!!START SILENT
import { Provider } from 'react-redux';
import configureStore from './store';
import { populateProduce } from './store/produce';
//!!END
import './index.css';
import App from './App';

//!!START SILENT
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
}

//!!END
function Root() {
  return (
    //!!START SILENT
    <Provider store={store}>
    {/*!!END */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/*!!START SILENT */}
    </Provider>
    //!!END
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
