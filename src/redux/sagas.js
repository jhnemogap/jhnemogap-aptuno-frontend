import { all, takeLatest } from "redux-saga/effects";

import { GET_REGIONS } from "@/redux/regions/regions-actions";
import { getRegionsSaga } from "./regions/regions-sagas";

export default function* rootSaga() {
  yield all([
    takeLatest(GET_REGIONS, getRegionsSaga),
  ]);
}
