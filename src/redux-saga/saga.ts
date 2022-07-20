import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import dengueSaga from "../dengue-testkit/redux-saga/saga";
import {
  registerOK,
  registerErr,
  initOK,
  initErr,
  loginOK,
  logoutOK,
} from "./actions";
import { INIT, REGISTER, LOGIN, LOGOUT } from "../common/constants/action-type";
import { initialize } from "../common/api/app";
import { register } from "../common/api/clinic";

function* registerClinic(action: any): any {
  const { name, address, postcode, email } = action.payload;
  const res = yield call(register, {
    name,
    address,
    postcode,
    email,
  });
  if (!res) {
    yield put(registerErr({ errMsg: res.message }));
    return;
  }
  if (res.status === "Error") {
    yield put(registerErr({ errMsg: res.message }));
    return;
  }
  yield put(registerOK({ okMsg: res.message }));
}

function* init(): any {
  const res = yield call(initialize);
  if (!res) {
    yield put(initErr());
    return;
  }
  yield put(initOK());
}

function* login(action: any) {
  // TODO Call login API
  yield put(loginOK({ token: "dummyToken" }));
}

function* logout() {
  // TODO Call login API
  yield put(logoutOK());
}

function* appSaga() {
  yield takeEvery(INIT, init);
  yield takeEvery(REGISTER, registerClinic);
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
}

export default function* rootSaga() {
  yield all([appSaga(), dengueSaga()]);
}
