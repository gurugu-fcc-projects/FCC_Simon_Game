import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/Controls.css';
import * as actions from '../actions';
import { activateBubble } from '../utilities/game';

class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.startGame = this.startGame.bind(this);
  }

  startGame = () => {
    this.props.playBubbles(true);
  }

  render() {
    return (
      <div className="Controls">
        <div className="start-restart-button" onClick={this.startGame}>Start</div>
        <div className="current-step">!!</div>
        <div className="game-mode">strict</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  steps: state.steps,
});

export default connect(mapStateToProps, actions)(Controls);
