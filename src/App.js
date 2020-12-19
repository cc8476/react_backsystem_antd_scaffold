import React, { Component } from "react";

import { BrowserRouter as Router, Route} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Store/index";

import Left from "./Components/Aside/Aside";
import Header from "./Components/Header/Header";

import routes from "./Routers/index";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Left></Left>
          <Header>
            <Router>
                {routes.map((v, key) => {
                  return (
                    <Route
                      exact={v.exact}
                      component={v.component}
                      path={v.path}
                      key={key}
                    ></Route>
                  );
                })}
            </Router>
          </Header>
        </div>
      </Provider>
    );
  }
}
