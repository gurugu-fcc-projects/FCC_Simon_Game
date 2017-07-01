import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/App.css';
import {
  moveTestBall,
  testSetCanvas,
  clearDisplay,
  drawCircle,
  animateCircle,
  AnimatedObject,
} from '../utilities/test';

class App extends Component {
  componentDidMount() {
    let ball1 = Object.create(AnimatedObject);
    let ball2 = Object.create(AnimatedObject);
    let ball3 = Object.create(AnimatedObject);
    ball1.init({x: 200});
    ball2.init({x: 10, speed: 2});
    ball3.init({x: 120, xShift: 3, speed: 0.5, size: 5});


    testSetCanvas();

    setInterval(() => {
      clearDisplay();
      ball1.draw();
      ball2.draw();
      ball3.draw();
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
