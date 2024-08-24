import React from "react";
import ReactDOM from "react-dom/client";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
