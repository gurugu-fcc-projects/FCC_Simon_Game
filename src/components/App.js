import React, { Component } from 'react';
import { connect } from 'react-redux';

import Controls from './Controls';
import Bubble from './Bubble';
import '../styles/App.css';
import * as actions from '../actions';
import { drawBgAnimation } from '../utilities/animation';
import { touchOrMouse } from '../utilities/touchOrMouse';

class App extends Component {
  componentDidMount() {
    drawBgAnimation(200);
  }

  render() {
    const { showMessage, message } = this.props;

    touchOrMouse();
    window.onresize = () => drawBgAnimation(200);

    return (
      <div className="App">
        <Controls />
        <canvas></canvas>
        {[1, 2, 3, 4].map(number => {
          return <Bubble key={number} number={number} />;
        })}
        <div className={`floating-message ${showMessage && 'shown'}`}>
          {message}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isRepeating: state.isRepeating,
  showMessage: state.showMessage,
  message: state.message,
});

export default connect(mapStateToProps, actions)(App);
