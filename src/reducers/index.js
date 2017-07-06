import {
  START_GAME,
  CLICK_BUBBLE,
} from '../actions/types';

const INIT_STATE = {
  step: 0,
  steps: [],
  isBusy: true,
  mode: 'normal',
  intervalHighlightStart: null,
  intervalHighlightEnd: null,
};

const sounds = [
  new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound1.mp3`),
  new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound2.mp3`),
  new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound3.mp3`),
  new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound4.mp3`),
];

const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case START_GAME: {
      // select a random bubble
      const bubbleNumber = Math.floor(Math.random() * 4) + 1;
      const bubble = document.querySelector(`.bubble-${bubbleNumber}`);
      // clear previous timeout
      window.clearTimeout(state.intervalHighlightStart);
      window.clearTimeout(state.intervalHighlightEnd);
      // play sound & highlight a proper bubble
      const startHighlighting = () => {
        bubble.classList.add('highlight');
        sounds[bubbleNumber - 1].play();
      };
      // remove highlight after a short time
      const endHighlighting = () => bubble.classList.remove('highlight');

      return {
        ...state,
        step: 1,
        steps: [bubbleNumber],
        isBusy: true,
        intervalHighlightStart: window.setTimeout(startHighlighting, 900),
        intervalHighlightEnd: window.setTimeout(endHighlighting, 1400),
      };
    }
    case CLICK_BUBBLE:
      if (!state.isBusy) {
        sounds[action.payload - 1].play();
      }
      return state;
    default:
      return state;
  }
  return state;
};

export default rootReducer;
