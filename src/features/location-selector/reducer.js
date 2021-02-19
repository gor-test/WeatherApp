import { createReducer } from 'reduxsauce';
import { REQUEST_LOCATION } from './actions';

const initialState = {
  isLoading: false,
  data: {},
};

const handleRequestRequest = (state) => ({
  ...state,
  isLoading: true,
});

const handleRequestSuccess = (state, { data }) => ({
  ...state,
  isLoading: false,
  data,
  error: undefined,
});

const handleRequestFailure = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

const handlers = {
  [REQUEST_LOCATION.REQUEST]: handleRequestRequest,
  [REQUEST_LOCATION.SUCCESS]: handleRequestSuccess,
  [REQUEST_LOCATION.FAILURE]: handleRequestFailure,
};

export const locationLoaderReducer = createReducer(initialState, handlers);
