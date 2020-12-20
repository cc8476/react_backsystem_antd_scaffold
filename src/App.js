import React, { Component } from 'react'
import {Route,HashRouter,BrowserRouter} from 'react-router-dom'
import Info from './Components/Info'
import Login from './Components/Login'

export default class App extends Component {
  render() {
    return (
      <div>
      <HashRouter>
        <Route path='/' component={Info}></Route>
        <Route path='/login' component={Login}></Route>
      </HashRouter>
      </div>
    )
  }
}
