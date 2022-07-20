import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import dengueSaga from "../dengue-testkit/redux-saga/saga";
import {
  registerOK,
  registerErr,
  initOK,
  initErr,
  loginOK,
  loginErr,
  logoutOK,
} from "./actions";
import { INIT, REGISTER, LOGIN, LOGOUT } from "../common/constants/action-type";
import { initialize } from "../common/api/app";
import { register, apiLogin } from "../common/api/clinic";

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

function* login(action: any): any {
  const { email, password } = action.payload;
  const res = yield call(apiLogin, { email: email, password: password });
  if (!res) {
    yield put(loginErr({ errMsg: res.message }));
    return;
  }
  if (res.status === "Error") {
    yield put(loginErr({ errMsg: res.message }));
    return;
  }
  yield put(loginOK({ okMsg: res.message, clinic: res.result.clinic }));
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
