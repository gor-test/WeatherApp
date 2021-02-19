export const LOAD_WEATHER = {
  REQUEST: 'LOAD_WEATHER/REQUEST',
  SUCCESS: 'LOAD_WEATHER/SUCCESS',
  FAILURE: 'LOAD_WEATHER/FAILURE',
};

export const loadWeatherAction = () => ({
  type: LOAD_WEATHER.REQUEST,
});

export const loadWeatherSuccess = (data) => ({
  type: LOAD_WEATHER.SUCCESS,
  data,
});

export const loadWeatherFailure = (message) => ({
  type: LOAD_WEATHER.FAILURE,
  message,
});
