import {
  CLICK_BUBBLE,
} from './types';

export const clickBubble = (id) => {
  return {
    type: CLICK_BUBBLE,
    payload: id,
  };
};
