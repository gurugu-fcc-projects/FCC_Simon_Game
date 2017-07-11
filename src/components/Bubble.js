import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import '../styles/Bubble.css';

const Bubble = ({ number, isBusy, clickBubble }) => {
  return (
    <div
      className={`prevent-mobile-highlighting bubble-${number} ${isBusy ? 'unclickable' : 'clickable'}`}
      onClick={() => clickBubble(number)}></div>
  );
};

const mapStateToProps = (state) => ({
  isBusy: state.isBusy,
});

export default connect(mapStateToProps, actions)(Bubble);
