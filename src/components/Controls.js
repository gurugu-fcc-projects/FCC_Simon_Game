import React from 'react';
import { connect } from 'react-redux';

import '../styles/Controls.css';
import * as actions from '../actions';

const Controls = ({ startGame }) => {
  return (
    <div className="Controls">
      <div className="start-restart-button" onClick={startGame}>Start</div>
      <div className="current-step">!!</div>
      <div className="game-mode">strict</div>
    </div>
  );
};

export default connect(null, actions)(Controls);
