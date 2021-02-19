import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import DailyView from './component';

import { dailyWeather } from '../store/selectors';

const mapStateToProps = createStructuredSelector({
  dailyData: dailyWeather,
});

export const DailyViewContainer = connect(
  mapStateToProps,
  null,
)(DailyView);
