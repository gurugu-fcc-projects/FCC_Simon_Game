import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/App.css';
import {
  moveTestBall,
  testSetCanvas,
  clearDisplay,
  drawCircle,
  animateCircle,
  Circle,
} from '../utilities/test';

class App extends Component {
  componentDidMount() {
    const ball1 = Object.create(Circle);
    ball1.init();

    testSetCanvas();

    setInterval(() => {
      clearDisplay();
      ball1.draw();
    }, 50);
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
        <canvas></canvas>
      </div>
    );
  }
}

export default App;
