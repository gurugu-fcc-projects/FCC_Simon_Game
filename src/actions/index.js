import {
  INCREMENT_BUBBLES,
  CLICK_SUCCESS,
  CLICK_FAILURE,
  CLEAR_MESSAGE,
  CHANGE_MODE,
  TIMEOUT,
} from './types';
import {
  getPreviousBubbles,
  getTestBubbles,
} from '../reducers';
import {
  activateBubble,
} from '../utilities/game';

let playBubblesIntervalID;
let timerID;

export const clickBubble = (id) => (dispatch, getState) => {
  const testBubbles = getTestBubbles(getState());

  window.clearTimeout(timerID);
  activateBubble(id);

  window.setTimeout(() => {
    if (id === testBubbles[0]) {
      timerID = window.setTimeout(() => {
        dispatch({
          type: TIMEOUT,
        });
      }, 10000);
      dispatch({
        type: CLICK_SUCCESS,
        payload: testBubbles.slice(1),
      });
    } else {
      dispatch({
        type: CLICK_FAILURE,
      });
    }
  }, 500);
};

export const incrementBubbles = (isGameStart = false, isRepeat = false) => (dispatch, getState) => {
  // clear previously set interval
  window.clearInterval(playBubblesIntervalID);
  // clear previously set timeout
  window.clearTimeout(timerID);
  // get previous steps
  const previousBubbles = isGameStart ? [] : getPreviousBubbles(getState());
  // randomly choose a bubble for the next step
  const newBubble = Math.floor(Math.random() * 4) + 1;
  // add a new bubble to previous bubbles unless the sequence is repeated
  const newBubbles = isRepeat ? previousBubbles : [...previousBubbles, newBubble];
  let counter = 0;

  playBubblesIntervalID = window.setInterval(() => {
    // clear previously set timeout
    window.clearTimeout(timerID);
    timerID = window.setTimeout(() => {
      dispatch({
        type: TIMEOUT,
      });
    }, 10000);
    // send action to reducer when all bubbles are iterated over
    if (counter === newBubbles.length - 1) {
      window.clearInterval(playBubblesIntervalID);

      window.setTimeout(() => {
        dispatch({
          type: INCREMENT_BUBBLES,
          payload: newBubbles,
        });
      }, 900);
    }

    activateBubble(newBubbles[counter]);
    counter += 1;
  }, 1000);

};

export const clearMessage = () => {
  return {
    type: CLEAR_MESSAGE,
  };
};

export const changeMode = () => {
  return {
    type: CHANGE_MODE,
  };
};
