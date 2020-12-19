import { Fragment } from "react"
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <div id="right">
              <div id="rightTop">right-top</div>
              <div style={{border:"1px solid red"}}>{this.props.children}</div>
            </div>
            </React.Fragment>
        )
    }
}
