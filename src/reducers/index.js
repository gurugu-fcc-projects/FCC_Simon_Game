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

const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case START_GAME:
      window.setTimeout(() => {
        const bubble = Math.floor(Math.random() * 4) + 1;
        console.log(bubble);
        const snd = new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound${bubble}.mp3`);
        snd.play();
      }, 1000);
    case CLICK_BUBBLE:
      if (!state.isBusy) {
        const snd = new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound${action.payload}.mp3`);
        snd.play();
      }
      return state;
    default:
      return state;
  }
  return state;
};

export default rootReducer;
