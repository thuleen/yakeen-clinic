import { all } from "redux-saga/effects";

import dengueSaga from "../dengue-testkit/redux-saga/saga";
import appSaga from "../app/redux-saga/saga";

export default function* rootSaga() {
  yield all([appSaga(), dengueSaga()]);
}
