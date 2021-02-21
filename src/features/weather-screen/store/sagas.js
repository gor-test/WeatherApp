import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';
import { getWeatherByLatLong } from '../../../services/weather';
import { locationDataSelector } from '../../location-selector/store/selectors';

import { loadWeatherFailure, loadWeatherSuccess, LOAD_WEATHER } from './actions';

export function* loadWeather() {
  try {
    const locationData = yield select(locationDataSelector);
    if (!locationData) {
      yield put(loadWeatherFailure('No location is selected'));
    }
    const params = {
      lon: locationData.longitude,
      lat: locationData.latitude,
    };
    const response = yield call(getWeatherByLatLong, params);
    if (!response) {
      throw Error('API error');
    }
    if (response.ok !== true) {
      throw Error('API error');
    }
    yield put(loadWeatherSuccess(response.data));
  } catch (error) {
    const { message } = error;
    yield put(loadWeatherFailure(message));
  }
}

export function* weatherSagas() {
  yield takeLatest(LOAD_WEATHER.REQUEST, loadWeather);
}
