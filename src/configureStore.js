import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

export const configureStore = () => {
  const middlewares = [];

  if (process.env.MODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );
};
