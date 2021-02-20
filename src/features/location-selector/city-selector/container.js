import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadCitiesAction, loadSavedCitiesAction, setLocationAction } from '../store/actions';

import {
  citiesSelector, savedCitiesSelector,
} from '../store/selectors';

import CitySelectorView from './component';

const mapDispatchToProps = (dispatch) => ({
  loadCities: (name) => dispatch(loadCitiesAction(name)),
  selectCity: (cityItem) => dispatch(setLocationAction(cityItem)),
  loadSavedCities: () => dispatch(loadSavedCitiesAction()),
});

const mapStateToProps = createStructuredSelector({
  cities: citiesSelector,
  savedCities: savedCitiesSelector,
});

export const CitySelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CitySelectorView);
