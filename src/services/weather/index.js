import { ENDPOINTS } from '../utils/api/constants';
import { createApiRequest } from '../utils/api/request';
// import { mockData } from './fixtures';

export function getWeatherByLatLong(params) {
  const { lat, lon } = params;

  const requestParams = {
    lat,
    lon,
    units: 'metric',
    exclude: 'minutely',
  };
  const api = createApiRequest();

  return api.get(ENDPOINTS.weather.onecall, requestParams);
}
