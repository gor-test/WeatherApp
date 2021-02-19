import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { requestLocationAction } from './actions';

import LocationSelectorView from './component';
import { isLocationLoading, isLocationPermissionDenied, locationDataSelector } from './selectors';

const mapDispatchToProps = (dispatch) => ({
  requestLocation: () => dispatch(requestLocationAction()),
});

const mapStateToProps = createStructuredSelector({
  isLoading: isLocationLoading,
  isPermissionDenied: isLocationPermissionDenied,
  locationData: locationDataSelector,
});

export const LocationSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationSelectorView);
