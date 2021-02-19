import { createSelector } from 'reselect';

// const appState = (state) => state.app;

const location = (state) => state.location;

export const isLocationLoading = createSelector(
  location,
  (l) => l && l.isLoading,
);

export const isLocationPermissionDenied = createSelector(
  location,
  (l) => l && l.error && l.error.PERMISSION_DENIED,
);

export const locationDataSelector = createSelector(
  location,
  (l) => l && l.data && l.data.coords,
);

export const citiesSelector = createSelector(
  location,
  (l) => l && l.cities,
);

export const savedCitiesSelector = createSelector(
  location,
  (l) => l && l.savedCities,
);
