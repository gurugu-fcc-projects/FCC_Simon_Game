import {
  START_GAME,
  CLICK_BUBBLE,
} from '../actions/types';

const INIT_STATE = {
  step: 0,
  steps: [],
  isBusy: true,
  mode: 'normal',
};

const sounds = [
  new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound1.mp3`),
  new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound2.mp3`),
  new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound3.mp3`),
  new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound4.mp3`),
];

const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case START_GAME:
      window.setTimeout(() => {
        const bubble = Math.floor(Math.random() * 4) + 1;
        sounds[bubble - 1].play();
      }, 1000);
      break;
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
