import { ENDPOINTS } from '../utils/api/constants';
import { createApiRequest } from '../utils/api/request';

export function getWeatherByLatLong(params) {
  const { lat, lon } = params;

  const requestParams = { lat, lon };
  const api = createApiRequest();
  return api.get(ENDPOINTS.weather.onecall, requestParams);
}

export function getWeatherByCity(params) {
  const { lat, lon } = params;

  const requestParams = { lat, lon };
  const api = createApiRequest();
  return api.get(ENDPOINTS.weather.onecall, requestParams);
}
