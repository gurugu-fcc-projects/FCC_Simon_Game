import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/App.css';
import { moveTestBall, canvasTest } from '../utilities/test';

class App extends Component {
  componentDidMount() {
    const app = document.querySelector('.App');

    moveTestBall();
    canvasTest(app);
  }

  render() {
    return (
      <div className="App">
        <div className="test-ball"></div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
