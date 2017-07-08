import {
  // START_GAME,
  CLICK_BUBBLE,
  PLAY_BUBBLES,
} from './types';
import {
  getPreviousBubbles,
} from '../reducers';
import {
  activateBubble
} from '../utilities/game';

let playBubblesIntervalID;

// export const startGame = () => {
//   return {
//     type: START_GAME,
//   };
// };
//
export const clickBubble = (id) => {
  activateBubble(id);

  return {
    type: CLICK_BUBBLE,
    payload: id,
  };
};

export const playBubbles = (isGameStart) => (dispatch, getState) => {
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

      dispatch({
        type: PLAY_BUBBLES,
        payload: newBubbles,
      });
    }

    activateBubble(newBubbles[counter]);
    counter += 1;
  }, 1000);

};
