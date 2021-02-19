import { createReducer } from 'reduxsauce';
import { LOAD_WEATHER } from './actions';

const initialState = {
  isLoading: false,
  data: {},
};

const handleLoadRequest = (state) => ({
  ...state,
  isLoading: true,
});

const handleLoadSuccess = (state, { data }) => ({
  ...state,
  isLoading: false,
  data,
});

const handleLoadFailure = (state, { message }) => ({
  ...state,
  isLoading: false,
  errorMessage: message,
});

const handlers = {
  [LOAD_WEATHER.REQUEST]: handleLoadRequest,
  [LOAD_WEATHER.SUCCESS]: handleLoadSuccess,
  [LOAD_WEATHER.FAILURE]: handleLoadFailure,
};

export const weatherReducer = createReducer(initialState, handlers);
