import { ENDPOINTS } from '../utils/api/constants';
import { createApiRequest } from '../utils/api/request';

export function getCities(params) {
  const { cityName } = params;

  const requestParams = {
    q: encodeURI(cityName),
    limit: 5,
  };
  const api = createApiRequest();

  return api.get(ENDPOINTS.geocoding.direct, requestParams);
}

export function getCityByCoords(params) {
  const { lat, lon } = params;

  const requestParams = {
    lat,
    lon,
    limit: 1,
  };
  const api = createApiRequest();

  return api.get(ENDPOINTS.geocoding.direct, requestParams);
}
