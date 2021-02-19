import { combineReducers } from 'redux';
import { appReducer } from '../features/app/reducer';
import { locationLoaderReducer } from '../features/location-selector/store/reducer';
import { weatherReducer } from '../features/weather-screen/store/reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  weather: weatherReducer,
  location: locationLoaderReducer,
});
