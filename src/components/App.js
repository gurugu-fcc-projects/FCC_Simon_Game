import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/App.css';
import {
  moveTestBall,
  testSetCanvas,
  clearDisplay,
  drawCircle,
  animateCircle,
} from '../utilities/test';

class App extends Component {
  componentDidMount() {
    let yOffset = 0;

    moveTestBall();
    testSetCanvas();
    setInterval(() => {
      const canvas = document.querySelector('canvas');

      if (yOffset > canvas.height + 20) {
        yOffset = -40;
      }
      
      yOffset += 1;
      clearDisplay();
      drawCircle({x: 200, y: yOffset});
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
