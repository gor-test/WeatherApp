export const REQUEST_LOCATION = {
  REQUEST: 'REQUEST_LOCATION/REQUEST',
  SUCCESS: 'REQUEST_LOCATION/SUCCESS',
  FAILURE: 'REQUEST_LOCATION/FAILURE',
};

export const requestLocationAction = () => ({
  type: REQUEST_LOCATION.REQUEST,
});

export const requestLocationSuccess = (data) => ({
  type: REQUEST_LOCATION.SUCCESS,
  data,
});

export const requestLocationFailure = (error) => ({
  type: REQUEST_LOCATION.FAILURE,
  error,
});
