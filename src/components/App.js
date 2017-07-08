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
        {[1, 2, 3, 4].map(number => {
          return <div className={`bubble-${number} ${isBusy ? 'unclickable' : 'clickable'}`} onClick={() => this.props.clickBubble(number)}></div>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isBusy: state.isBusy,
});

export default connect(mapStateToProps, actions)(App);
