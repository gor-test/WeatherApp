import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { requestPosition, watchPosition } from '../../services/geo/geo';

import { requestLocationFailure, requestLocationSuccess, REQUEST_LOCATION } from './actions';

export function* requestLocation(options, action) {
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

export function* locationSagas() {
  yield takeLatest(REQUEST_LOCATION.REQUEST, requestLocation);
}
