import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/Controls.css';
import * as actions from '../actions';

class Controls extends Component {
  componentDidUpdate() {
    // run bubble sounds on next turn
    if (this.props.isNextTurn) {
      this.props.incrementBubbles();
    }
    // run bubbles again after incorrect choice
    if (this.props.isRepeating) {
      window.setTimeout(() => {
        this.props.incrementBubbles(false, true);
      }, 2000);
    }
  }

  startGame = () => {
    this.props.incrementBubbles(true);
  }

  render() {
    const { mode, level, isRepeating } = this.props;

    return (
      <div className="Controls">
        <div className="start-restart-button" onClick={this.startGame}>{level === 0 ? 'Start' : 'Restart'}</div>
        <div className={`current-step ${isRepeating ? 'error' : ''}`}>{level === 0 ? '--' : level}</div>
        <div className="game-mode">{mode}</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  mode: state.mode,
  level: state.level,
  steps: state.steps,
  isNextTurn: state.isNextTurn,
  isRepeating: state.isRepeating,
});

export default connect(mapStateToProps, actions)(Controls);
