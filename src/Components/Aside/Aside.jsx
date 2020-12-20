import React, { Component } from "react";
import logo from "../../Common/logo.png";
import { BrowserRouter as Router, Link} from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="left">
          <div>
            <img alt="hahaha" style={{ width: "100px" }} src={logo} /><br></br>
            <a href="/home">home</a> <br></br>
            <a href="/about">about</a> <br></br>
            <a href="/mine">mine</a><br></br>
            <a href="/course/index">course-index</a><br></br>
            <a href="/course/detail">course-detail</a><br></br>
            <a href="/course/add">course-add</a><br></br>
            <a href="/course/list">course-list</a><br></br>

            <Router>
              <Link to="/home">home</Link>
              <br></br>
              <Link to="/about">about</Link>
            </Router>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
