import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HourlyView from './component';

import { hourlyWeather } from '../store/selectors';

const mapStateToProps = createStructuredSelector({
  hourlyData: hourlyWeather,
});

export const HourlyViewContainer = connect(
  mapStateToProps,
  null,
)(HourlyView);
