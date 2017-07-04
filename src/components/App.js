import React, { Component } from 'react';

import Controls from './Controls';
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
        <Controls />
        <div className="test-element"></div>
        <canvas></canvas>
      </div>
    );
  }
}

export default App;
