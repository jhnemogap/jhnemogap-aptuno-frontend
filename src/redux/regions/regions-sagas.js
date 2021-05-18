import { put, call } from "redux-saga/effects";

import { getRegionsSuccess, getRegionsError } from "./regions-actions";

export function* getRegionsSaga({ payload }) {
  const URL = "/api/regions";
  try {
    const response = yield call(fetch, URL, { method: "GET", body: payload, });
    const data = yield response.json();
    yield put(getRegionsSuccess(data));
  } catch (error) {
    yield put(getRegionsError());
  }
}
