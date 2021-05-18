export const GET_REGIONS = "GET_REGIONS";
export const getRegions = (payload = null) => ({
  type: GET_REGIONS,
  payload,
});

export const GET_REGIONS_SUCCESS = "GET_REGIONS_SUCCESS";
export const getRegionsSuccess = (payload) => ({
  type: GET_REGIONS_SUCCESS,
  payload,
});

export const GET_REGIONS_ERROR = "GET_REGIONS_ERROR";
export const getRegionsError = () => ({
  type: GET_REGIONS_ERROR,
  payload: null,
});
