import { combineReducers } from "redux";

import { regionsReducer } from "./regions/regions-reducer";

export default function rootReducer() {
  return combineReducers({
    regionsGS: regionsReducer,
  });
}
