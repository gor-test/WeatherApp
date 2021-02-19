import {
  call, debounce, put, select, takeLatest,
} from 'redux-saga/effects';
import { requestPosition, watchPosition } from '../../../services/geo-location/geo';
import { getCities } from '../../../services/geocoding';
import { getSavedCities, storeSavedCities } from '../../../services/storage';

import {
  REQUEST_LOCATION, LOAD_CITIES,
  requestLocationFailure, requestLocationSuccess,
  loadCitiesSuccess, loadCitiesFailure,
  loadSavedCitiesSuccess, loadSavedCitiesFailure,
  LOAD_SAVED_CITIES, SET_LOCATION,
} from './actions';

import { savedCitiesSelector } from './selectors';

export function* requestLocation() {
  try {
    const location = yield call(requestPosition);
    yield put(requestLocationSuccess(location));
  } catch (error) {
    yield put(requestLocationFailure(error));
    // watching if user will enable the location
    const location = yield call(watchPosition);
    yield put(requestLocationSuccess(location));
  }
}

export function* loadCities(action) {
  try {
    const { cityName } = action;
    if (cityName === '') {
      yield put(loadCitiesFailure(''));
      return;
    }
    const res = yield call(getCities, { cityName });
    if (res && res.ok) {
      yield put(loadCitiesSuccess(res.data));
      return;
    }
    yield put(loadCitiesFailure(res && res.message));
  } catch (error) {
    yield put(loadCitiesFailure(error));
  }
}

export function* loadSavedCities() {
  try {
    const res = yield call(getSavedCities);
    yield put(loadSavedCitiesSuccess(res));
  } catch (error) {
    yield put(loadSavedCitiesFailure(error));
  }
}

export function* addToSavedCities({ data }) {
  try {
    const savedCities = yield select(savedCitiesSelector);
    const newList = [data];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 2 && i < savedCities.length; i++) {
      newList.push(savedCities[i]);
    }
    yield put(loadSavedCitiesSuccess(newList));
    yield call(storeSavedCities(newList));
  } catch (error) {
    // error
  }
}

export function* locationSagas() {
  yield takeLatest(REQUEST_LOCATION.REQUEST, requestLocation);
  yield debounce(1000, LOAD_CITIES.REQUEST, loadCities);
  yield takeLatest(LOAD_SAVED_CITIES.REQUEST, loadSavedCities);
  yield takeLatest(SET_LOCATION, addToSavedCities);
}
