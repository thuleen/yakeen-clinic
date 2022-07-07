import { all } from "redux-saga/effects";

import dengueSaga from "./testdengue/redux-saga/saga";

export default function* rootSaga() {
  yield all([dengueSaga()]);
}
