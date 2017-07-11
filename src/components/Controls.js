import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/Controls.css';
import * as actions from '../actions';

class Controls extends Component {
  clearMessage = (isGameStart = false, isRepeat = false) => {
    window.setTimeout(() => {
      this.props.clearMessage();
      this.props.incrementBubbles(isGameStart, isRepeat);
    }, 2000);
  };

  startGame = () => {
    this.props.incrementBubbles(true);
  }

  componentDidUpdate() {
    // start new game after victory
    if (this.props.isNextTurn && this.props.message === 'VICTORY!') {
      this.clearMessage(true);
    }
    // iterate through bubbles at next step or after winning
    if (this.props.isNextTurn && this.props.message !== 'VICTORY!') {
      this.props.incrementBubbles();
    }
    // repeat playing bubbles after incorrect choice
    if (this.props.isRepeating) {
      if (this.props.mode === 'normal') {
        this.clearMessage(false, true);
      } else {
        this.clearMessage(true);
      }
    }
  }

  render() {
    const { mode, level, showMessage, changeMode } = this.props;

    return (
      <div className="Controls">
        <div
          className={`start-restart-button prevent-mobile-highlighting ${showMessage ? 'unclickable' : 'clickable'}`}
          onClick={this.startGame}>
          {level === 0 ? 'Start' : 'Restart'}
        </div>
        <div className={`current-step`}>
          {level === 0 ? '--' : level}
        </div>
        <div
          className={`game-mode prevent-mobile-highlighting ${showMessage ? 'unclickable' : 'clickable'}`}
          onClick={changeMode}>
          {mode}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  mode: state.mode,
  level: state.level,
  steps: state.steps,
  showMessage: state.showMessage,
  isNextTurn: state.isNextTurn,
  isRepeating: state.isRepeating,
  message: state.message,
});

export default connect(mapStateToProps, actions)(Controls);
