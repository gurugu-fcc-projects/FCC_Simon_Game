import {
  START_GAME,
  CLICK_BUBBLE,
} from './types';

export const startGame = () => {
  return {
    type: START_GAME,
  };
};

export const clickBubble = (id) => {
  return {
    type: CLICK_BUBBLE,
    payload: id,
  };
};
