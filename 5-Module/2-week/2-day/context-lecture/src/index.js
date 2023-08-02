import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CounterContextProvider from './context/CounterContextProvider';
import ThemeContextProvider from './context/ThemeContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<ThemeContextProvider>
		<CounterContextProvider>
			<App />
		</CounterContextProvider>
	</ThemeContextProvider>
  </React.StrictMode>
);
