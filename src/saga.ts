import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import dengueSaga from "./dengue-testkit/redux-saga/saga";
import appSaga from "./common/redux-saga/saga";

export default function* rootSaga() {
  yield all([appSaga(), dengueSaga()]);
}
