import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Controls from './Controls';
import Bubble from './Bubble';
import '../styles/App.css';
// import * as actions from '../actions';
import {
  setCanvas,
  clearDisplay,
  setBubbles,
  drawBubbles,
} from '../utilities/animation';

class App extends Component {
  componentDidMount() {
    const bubbles = setBubbles(200);

    setCanvas();

    setInterval(() => {
      clearDisplay();
      drawBubbles(bubbles);
    }, 60);
  }

  render() {
    return (
      <div className="App">
        <Controls />
        <canvas></canvas>
        {[1, 2, 3, 4].map(number => {
          return <Bubble key={number} number={number} />;
        })}
      </div>
    );
  }
}

// export default connect(null, actions)(App);
export default App;
