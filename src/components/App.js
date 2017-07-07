import React, { Component } from 'react';
import { connect } from 'react-redux';

import Controls from './Controls';
import '../styles/App.css';
import * as actions from '../actions';
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
        <div className="bubble-1 unclickable" onClick={() => this.props.clickBubble(1)}></div>
        <div className="bubble-2 unclickable" onClick={() => this.props.clickBubble(2)}></div>
        <div className="bubble-3 unclickable" onClick={() => this.props.clickBubble(3)}></div>
        <div className="bubble-4 unclickable" onClick={() => this.props.clickBubble(4)}></div>
      </div>
    );
  }
}



export default connect(null, actions)(App);
