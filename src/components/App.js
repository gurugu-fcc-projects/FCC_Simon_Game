import React, { Component } from 'react';

import '../styles/App.css';
import {
  testSetCanvas,
  clearDisplay,
  setBubbles,
  drawBubbles,
  addColoredBubbles,
} from '../utilities/animation';

class App extends Component {
  componentDidMount() {
    const bubbles = setBubbles(200);

    testSetCanvas();
    addColoredBubbles();

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
