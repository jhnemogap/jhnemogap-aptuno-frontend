import { GET_REGIONS, GET_REGIONS_SUCCESS, GET_REGIONS_ERROR } from "./regions-actions";

const regionsInitState = {
  success: false,
  loading: false,
  error: false,
  regions: []
};

export const regionsReducer = (state = regionsInitState, action) => {
  switch (action.type) {
    case GET_REGIONS: {
      return { ...regionsInitState, regionsLoading: true };
    }
    case GET_REGIONS_SUCCESS: {
      return { ...state, regionsLoading: false, success: true, regions: action.payload };
    }
    case GET_REGIONS_ERROR: {
      return { ...regionsInitState, error: true };
    }
    default: return state;
  }
};
