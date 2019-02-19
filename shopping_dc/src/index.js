import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import reducer from "./reducers/index";
// import cartReducer from "./reducers/cartReducer";
import { composeWithDevTool } from "redux-devtools-extension";

import App from "./App";
import Cart from "./components/Cart";

const store = createStore(
  reducer,
  window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Cart} />
          <Route path="/app" component={App} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
