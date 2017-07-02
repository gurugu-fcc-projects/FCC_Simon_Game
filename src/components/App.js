import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/App.css';
import {
  testSetCanvas,
  clearDisplay,
  setBubbles,
  drawBubbles,
} from '../utilities/animation';

class App extends Component {
  componentDidMount() {
    const bubbles = setBubbles(200);

    testSetCanvas();

    setInterval(() => {
      clearDisplay();
      drawBubbles(bubbles);
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
