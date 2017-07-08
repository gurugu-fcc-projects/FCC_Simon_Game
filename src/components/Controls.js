import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/Controls.css';
import * as actions from '../actions';

class Controls extends Component {
  componentDidUpdate() {
    if (this.props.isNextTurn) {
      this.props.incrementBubbles();
    }
  }

  startGame = () => {
    this.props.incrementBubbles(true);
  }

  render() {
    const { level } = this.props;

    return (
      <div className="Controls">
        <div className="start-restart-button" onClick={this.startGame}>{level > 0 ? 'Restart' : 'Start'}</div>
        <div className="current-step">{level === 0 ? '--' : level}</div>
        <div className="game-mode">strict</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  level: state.level,
  steps: state.steps,
  isNextTurn: state.isNextTurn,
});

export default connect(mapStateToProps, actions)(Controls);
