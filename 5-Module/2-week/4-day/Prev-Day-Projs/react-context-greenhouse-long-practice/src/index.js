import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ThemeProvider from './context/ThemeContext';
//!!START SILENT
import ClimateProvider from './context/ClimateContext';
//!!END

function Root() {
  return (
    //!!START SILENT
    <ClimateProvider>
    {/*!!END */}
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    {/*!!START SILENT */}
    </ClimateProvider>
    //!!END
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
