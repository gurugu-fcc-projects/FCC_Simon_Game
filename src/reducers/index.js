import {
  START_GAME,
  CLICK_BUBBLE,
  PLAY_BUBBLES,
} from '../actions/types';

const INIT_STATE = {
  level: 0,
  steps: [1, 2, 3, 4],
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
    case START_GAME: {
      return {
        ...state,
        steps: [],
        isBusy: true,
      };
    }
    case PLAY_BUBBLES:
      return {
        ...state,
        level: action.payload.length,
        steps: action.payload,
        isBusy: false,
      }
    case CLICK_BUBBLE: {
      if (!state.isBusy) {
        sounds[action.payload - 1].play();
      }
      return state;
    }
    default:
      return state;
  }
};

export const getPreviousBubbles = (state) => state.steps;

export default rootReducer;
