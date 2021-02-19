import {
  all,
  call,
  spawn,
} from 'redux-saga/effects';
import { locationSagas } from '../features/location-selector/store/sagas';
import { weatherSagas } from '../features/weather-screen/store/sagas';

export function* rootSaga() {
  const sagas = [
    weatherSagas,
    locationSagas,
  ];

  // eslint-disable-next-line func-names
  yield all(sagas.map((saga) => spawn(function* () {
    try {
      yield call(saga);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`error running saga: ${saga}`, error);
    }
  })));
}
