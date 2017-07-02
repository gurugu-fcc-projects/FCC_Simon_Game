import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/App.css';
import {
  testSetCanvas,
  clearDisplay,
  AnimatedObject,
} from '../utilities/animation';

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
        <canvas></canvas>
      </div>
    );
  }
}

export default App;
