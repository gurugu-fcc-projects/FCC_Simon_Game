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
    const { isBusy } = this.props;

    return (
      <div className="App">
        <Controls />
        <canvas></canvas>
        <div className={`bubble-1 ${isBusy ? 'unclickable' : 'clickable'}`} onClick={() => this.props.clickBubble(1)}></div>
        <div className={`bubble-2 ${isBusy ? 'unclickable' : 'clickable'}`} onClick={() => this.props.clickBubble(2)}></div>
        <div className={`bubble-3 ${isBusy ? 'unclickable' : 'clickable'}`} onClick={() => this.props.clickBubble(3)}></div>
        <div className={`bubble-4 ${isBusy ? 'unclickable' : 'clickable'}`} onClick={() => this.props.clickBubble(4)}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isBusy: state.isBusy,
});

export default connect(mapStateToProps, actions)(App);
