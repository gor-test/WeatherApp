import { createSelector } from 'reselect';

// const appState = (state) => state.app;

const weather = (state) => state.weather;

export const isWeatherLoading = createSelector(
  weather,
  (w) => w && w.isLoading,
);

const weatherData = createSelector(
  weather,
  (w) => w && w.data,
);

export const currentWeather = createSelector(
  weatherData,
  (wd) => wd && wd.current,
);

export const hourlyWeather = createSelector(
  weatherData,
  (wd) => wd && wd.hourly,
);

export const dailyWeather = createSelector(
  weatherData,
  (wd) => wd && wd.daily,
);

const location = (state) => state.location;

export const cityNameSelector = createSelector(
  location,
  (l) => l && l.cityName,
);
