import { all } from "redux-saga/effects";

import dengueSaga from "../dengue-testkit/redux-saga/saga";

export default function* rootSaga() {
  yield all([dengueSaga()]);
}
