import { ENDPOINTS } from '../utils/api/constants';
import { createApiRequest } from '../utils/api/request';
import { mockData } from './fixtures';

// export function getWeatherByLatLong(params) {
//   const { lat, lon } = params;

//   const requestParams = { lat, lon };
//   const api = createApiRequest();
//   return api.get(ENDPOINTS.weather.onecall, requestParams);
// }

export function getWeatherByLatLong(params) {
  const { lat, lon } = params;

  const requestParams = {
    lat,
    lon,
    units: 'metric',
    exclude: 'minutely',
  };
  const api = createApiRequest();

  // console.log({ API: 'getWeatherByLatLong', params });
  const p1 = new Promise((res) => setTimeout(() => res('p1'), 500));
  // return p1.then(() => api.get(ENDPOINTS.weather.onecall, requestParams));
  return p1.then(() => ({ ok: true, data: mockData }));
}
