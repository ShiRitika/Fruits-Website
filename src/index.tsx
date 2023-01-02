import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { getTotal } from "./store";

// store.subscribe(() => (console.log(store.getState())));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
store.dispatch(getTotal());

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> 
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
