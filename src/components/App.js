import React, { Component } from 'react';
// import { Link } from 'react-router'
import logo from '../../res/logo.svg';
import '../../res/App.css';
import NavLink from './NavLink'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>React Router Tutorial</h1>
          <ul role="nav">
              <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/repos">Repos</NavLink></li>
          </ul>
          {this.props.children || <Home/>}
      </div>
    );
  }
}

export default App;
