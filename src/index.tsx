import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import combineReducers from "./web/store/reducers";
import App from "./App";
import { Provider } from "react-redux";

const store = createStore(combineReducers);

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
