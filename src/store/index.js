import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const initialState = {};

export const configureStore = () => {
  const sagaOptions = {};

  const devEnhancers = [];
  // eslint-disable-next-line no-undef
  if (__DEV__) {
    // eslint-disable-next-line global-require
    const tron = require('./reactotron-config').default;
    sagaOptions.sagaMonitor = tron;
    // devEnhancers.push(tron.createEnhancer());
  }

  const sagaMiddleware = createSagaMiddleware(sagaOptions);
  const enhancers = [applyMiddleware(sagaMiddleware), ...devEnhancers];

  const store = createStore(rootReducer, initialState, compose(...enhancers));
  sagaMiddleware.run(rootSaga);

  return store;
};
