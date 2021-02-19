export const REQUEST_LOCATION = {
  REQUEST: 'REQUEST_LOCATION/REQUEST',
  SUCCESS: 'REQUEST_LOCATION/SUCCESS',
  FAILURE: 'REQUEST_LOCATION/FAILURE',
};

export const RESET_LOCATION = 'RESET_LOCATION';
export const SET_LOCATION = 'SET_LOCATION';

export const LOAD_CITIES = {
  REQUEST: 'LOAD_CITIES/REQUEST',
  SUCCESS: 'LOAD_CITIES/SUCCESS',
  FAILURE: 'LOAD_CITIES/FAILURE',
};

export const LOAD_SAVED_CITIES = {
  REQUEST: 'LOAD_SAVED_CITIES/REQUEST',
  SUCCESS: 'LOAD_SAVED_CITIES/SUCCESS',
  FAILURE: 'LOAD_SAVED_CITIES/FAILURE',
};

export const ADD_TO_SAVED_CITIES = 'ADD_TO_SAVED_CITIES';

export const requestLocationAction = () => ({
  type: REQUEST_LOCATION.REQUEST,
});

export const requestLocationSuccess = (data) => ({
  type: REQUEST_LOCATION.SUCCESS,
  data,
});

export const requestLocationFailure = (error) => ({
  type: REQUEST_LOCATION.FAILURE,
  error,
});

export const resetLocationAction = () => ({
  type: RESET_LOCATION,
});

export const setLocationAction = (data) => ({
  type: SET_LOCATION,
  data,
});

export const loadCitiesAction = (name) => ({
  type: LOAD_CITIES.REQUEST,
  cityName: name,
});

export const loadCitiesSuccess = (data) => ({
  type: LOAD_CITIES.SUCCESS,
  data,
});

export const loadCitiesFailure = (error) => ({
  type: LOAD_CITIES.FAILURE,
  error,
});

export const loadSavedCitiesAction = () => ({
  type: LOAD_SAVED_CITIES.REQUEST,
});

export const loadSavedCitiesSuccess = (data) => ({
  type: LOAD_SAVED_CITIES.SUCCESS,
  data,
});

export const loadSavedCitiesFailure = (error) => ({
  type: LOAD_SAVED_CITIES.FAILURE,
  error,
});

export const addToSavedCitiesAction = (cityData) => ({
  type: ADD_TO_SAVED_CITIES,
  cityData,
});
