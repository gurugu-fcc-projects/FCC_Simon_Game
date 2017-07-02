import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/App.css';
import {
  testSetCanvas,
  clearDisplay,
  setBalls,
  drawBalls,
} from '../utilities/animation';

class App extends Component {
  componentDidMount() {
    const balls = setBalls(200);

    testSetCanvas();

    setInterval(() => {
      clearDisplay();
      drawBalls(balls);
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
