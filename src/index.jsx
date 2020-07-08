import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// core componentss
import App from "App";

import "index.css";

import History from "utils/BrowserHistory";
import * as serviceWorker from "serviceWorker";
import configureStore from "_store/configureStore";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router history={History}>
        <Switch>
          <Route>
            <App />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();