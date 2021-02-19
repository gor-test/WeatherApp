import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { getWeatherByLatLong } from '../../../services/weather';

import { loadWeatherFailure, loadWeatherSuccess, LOAD_WEATHER } from './actions';

export function* loadWeather(options, action) {
  const params = {
    lon: -79.4685,
    lat: 43.8358,
  };
  try {
    const response = yield call(getWeatherByLatLong, params);
    if (!response) {
      throw Error('API error');
    }
    if (response.ok !== true) {
      throw Error(`API error ${response.status} ${response.data && response.data.message}`);
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
