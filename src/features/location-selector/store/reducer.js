import { createReducer } from 'reduxsauce';
import {
  LOAD_CITIES, LOAD_SAVED_CITIES, REQUEST_LOCATION, RESET_LOCATION, SET_LOCATION,
} from './actions';

const initialState = {
  isLoading: false,
  data: {},
  cities: {
    isLoading: false,
    data: [],
  },
  savedCities: [],
};

const handleRequestRequest = (state) => ({
  ...state,
  isLoading: true,
});

const handleRequestSuccess = (state, { data }) => ({
  ...state,
  isLoading: false,
  data,
  cityName: '✧ Current Location',
  error: undefined,
});

const handleRequestFailure = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

const handleResetLocation = (state) => ({
  ...state,
  isLoading: false,
  data: {},
  error: undefined,
});

const handleSetLocation = (state, { data }) => ({
  ...state,
  isLoading: false,
  data: {
    coords: {
      latitude: data.lat,
      longitude: data.lon,
    },
  },
  cityName: `${data.name} ${data.country}`,
  error: undefined,
});

const handleLoadCitiesRequest = (state) => ({
  ...state,
  cities: {
    isLoading: true,
    data: state.cities.data,
  },
});

const handleLoadCitiesSuccess = (state, { data }) => ({
  ...state,
  cities: {
    isLoading: false,
    data,
  },
});

const handleLoadCitiesFailure = (state, { error }) => ({
  ...state,
  ...state,
  cities: {
    isLoading: false,
    data: state.cities.data,
    error,
  },
});

const handleLoadSavedCitiesSuccess = (state, { data }) => ({
  ...state,
  savedCities: data,
});

const handlers = {
  [REQUEST_LOCATION.REQUEST]: handleRequestRequest,
  [REQUEST_LOCATION.SUCCESS]: handleRequestSuccess,
  [REQUEST_LOCATION.FAILURE]: handleRequestFailure,
  [RESET_LOCATION]: handleResetLocation,
  [SET_LOCATION]: handleSetLocation,
  [LOAD_CITIES.REQUEST]: handleLoadCitiesRequest,
  [LOAD_CITIES.SUCCESS]: handleLoadCitiesSuccess,
  [LOAD_CITIES.FAILURE]: handleLoadCitiesFailure,
  [LOAD_SAVED_CITIES.SUCCESS]: handleLoadSavedCitiesSuccess,
};

export const locationLoaderReducer = createReducer(initialState, handlers);
