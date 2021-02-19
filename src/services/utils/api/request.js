import { create } from 'apisauce';
import { API_CONSTANTS, BASE_URL } from './constants';

export function createApiRequest() {
  const config = getAxiosConfig();
  return create(config);
}

function getAxiosConfig() {
  const config = {
    baseURL: BASE_URL,
    headers: {
      ...getCommonApiHeaders(),
      'Content-Type': 'application/json',
    },
    timeout: API_CONSTANTS.timeout,
    params: {
      appid: API_CONSTANTS.appid,
    },
  };
  return config;
}

export function getCommonApiHeaders() {
  const headers = {
    // add common headers here, like auth info, device id or timezone info
  };
  return headers;
}
