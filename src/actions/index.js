import {
  INCREMENT_BUBBLES,
  CLICK_SUCCESS,
  CLICK_FAILURE,
} from './types';
import {
  getPreviousBubbles,
  getTestBubbles,
} from '../reducers';
import {
  activateBubble,
} from '../utilities/game';

let playBubblesIntervalID;

export const clickBubble = (id) => (dispatch, getState) => {
  const testBubbles = getTestBubbles(getState());

  activateBubble(id);

  if (id === testBubbles[0]) {
    dispatch({
      type: CLICK_SUCCESS,
      payload: testBubbles.slice(1),
    });
  } else {
    dispatch({
      type: CLICK_FAILURE,
    });
  }
};

export const incrementBubbles = (isGameStart) => (dispatch, getState) => {
  // clear previously set interval
  window.clearInterval(playBubblesIntervalID);
  // get previous steps
  const previousBubbles = isGameStart ? [] : getPreviousBubbles(getState());
  // randomly generate the next step
  const newBubble = Math.floor(Math.random() * 4) + 1;
  // add new step to previous steps
  const newBubbles = [...previousBubbles, newBubble];
  let counter = 0;

  playBubblesIntervalID = window.setInterval(() => {

    if (counter === newBubbles.length - 1) {
      window.clearInterval(playBubblesIntervalID);

      window.setTimeout(() => {
        dispatch({
          type: INCREMENT_BUBBLES,
          payload: newBubbles,
        });
      }, 1000);
    }

    activateBubble(newBubbles[counter]);
    counter += 1;
  }, 1000);

};
