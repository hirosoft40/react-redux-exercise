import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./reducer/counter";
import Counter from "./component/Counter";

const store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    
    <Counter />
  </Provider>,
  document.getElementById("root")
);
