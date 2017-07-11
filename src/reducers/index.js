import {
  INCREMENT_BUBBLES,
  CLICK_SUCCESS,
  CLICK_FAILURE,
  CLEAR_MESSAGE,
  CHANGE_MODE,
} from '../actions/types';

const INIT_STATE = {
  level: 0,
  steps: [],
  stepsForChecking: [],
  isBusy: true,
  isNextTurn: false,
  isRepeating: false,
  showMessage: false,
  mode: 'normal',
  message: '',
};

const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case INCREMENT_BUBBLES:
      return {
        ...state,
        level: action.payload.length,
        steps: action.payload,
        stepsForChecking: action.payload,
        isBusy: false,
        isNextTurn: false,
        isRepeating: false,
        message: '',
      }
    case CLICK_SUCCESS: {
      if (action.payload.length < 1 && state.steps.length === 3) {
        return {
          ...state,
          level: 1,
          steps: [],
          isBusy: true,
          isNextTurn: true,
          showMessage: true,
          message: 'VICTORY!',
        };
      }
      if (action.payload.length < 1) {
        return {
          ...state,
          level: state.steps.length + 1,
          isBusy: true,
          isNextTurn: true,
        };
      }
      return {
        ...state,
        stepsForChecking: action.payload,
      };
    }
    case CLICK_FAILURE:
      return {
        ...state,
        stepsForChecking: state.steps,
        isBusy: true,
        isRepeating: true,
        showMessage: true,
        message: 'WRONG!',
      };
    case CLEAR_MESSAGE: {
      if (state.mode === 'strict') {
        return {
          ...state,
          level: 1,
          isRepeating: false,
          showMessage: false,
        };
      }
      return {
        ...state,
        isRepeating: false,
        showMessage: false,
      };
    }
    case CHANGE_MODE:
      return {
        ...state,
        mode: state.mode === 'normal' ? 'strict' : 'normal',
      };
    default:
      return state;
  }
};

export const getPreviousBubbles = (state) => state.steps;

export const getTestBubbles = (state) => state.stepsForChecking;

export default rootReducer;
