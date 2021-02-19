import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadCitiesAction, requestLocationAction } from '../store/actions';

import LocationSelectorView from './component';
import {
  citiesSelector, isLocationLoading, isLocationPermissionDenied, locationDataSelector,
} from '../store/selectors';

const mapDispatchToProps = (dispatch) => ({
  requestLocation: () => dispatch(requestLocationAction()),
  loadCities: (name) => dispatch(loadCitiesAction(name)),
});

const mapStateToProps = createStructuredSelector({
  isLoading: isLocationLoading,
  isPermissionDenied: isLocationPermissionDenied,
  locationData: locationDataSelector,
  cities: citiesSelector,
});

export const LocationSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationSelectorView);
