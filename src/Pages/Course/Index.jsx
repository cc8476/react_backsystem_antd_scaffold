import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { Component } from "react";
import routes from "../../Routers/course";

export default class index extends Component {
  render() {
    return (
      <div>
        <div> course ...header...</div>
        <div style={{border:"1px solid blue"}}>

          course-首页。。
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
        </div>
      </div>
    );
  }
}
