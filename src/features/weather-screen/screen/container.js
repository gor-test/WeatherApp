import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadWeatherAction } from '../store/actions';
import WeatherView from './component';
import { cityNameSelector, currentWeather, isWeatherLoading } from '../store/selectors';
import { resetLocationAction } from '../../location-selector/store/actions';

const mapDispatchToProps = (dispatch) => ({
  loadWeather: () => dispatch(loadWeatherAction()),
  resetLocation: () => dispatch(resetLocationAction()),
});

const mapStateToProps = createStructuredSelector({
  current: currentWeather,
  isLoading: isWeatherLoading,
  cityName: cityNameSelector,
});

export const WeatherViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherView);
