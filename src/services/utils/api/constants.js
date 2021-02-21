export const API_CONSTANTS = {
  timeout: 3000,
  appid: '544802f65da5f14aaeaa8fd9b321cd80', // need to be moved out from the code
};

export const BASE_URL = 'https://api.openweathermap.org';
export const BASE_IMG_URL = 'https://openweathermap.org/img/wn';

export const ENDPOINTS = {
  weather: {
    onecall: '/data/2.5/onecall',
    forecast: '/data/2.5/forecast',
    weather: '/data/2.5/weather',
  },
  geocoding: {
    direct: '/geo/1.0/direct',
    reverse: '/geo/1.0/reverse',
  },
};
