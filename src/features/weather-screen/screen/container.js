import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadWeatherAction } from '../store/actions';
import WeatherView from './component';
import { currentWeather, isWeatherLoading } from '../store/selectors';

const mapDispatchToProps = (dispatch) => ({
  loadWeather: () => dispatch(loadWeatherAction()),
});

const mapStateToProps = createStructuredSelector({
  current: currentWeather,
  isLoading: isWeatherLoading,
});

export const WeatherViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherView);
