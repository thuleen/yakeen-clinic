import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { loginOK, logoutOK } from "./actions";
import { LOGIN, LOGOUT } from "../../common/constants/action-type";

function* login(action: any) {
  // TODO Call login API
  yield put(loginOK({ token: "dummyToken" }));
}

function* logout() {
  // TODO Call login API
  yield put(logoutOK());
}

export default function* appSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
}
