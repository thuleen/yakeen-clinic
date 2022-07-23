import { Buffer } from "buffer";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import dengueSaga from "../../dengue-testkit/redux-saga/saga";
import {
  registerOK,
  registerErr,
  initOK,
  initErr,
  loginOK,
  loginErr,
  logoutOK,
  savePatientOK,
  savePhotoOK,
} from "./actions";
import {
  INIT,
  REGISTER,
  LOGIN,
  LOGOUT,
  SAVE_PATIENT,
  SAVE_PHOTO,
  GET_SAMPLES,
} from "../constants/action-type";
import * as apiApp from "../api/app";
import * as apiClinic from "../api/clinic";
import * as apiSample from "../api/sample";
import store from "../../store";

function* registerClinic(action: any): any {
  const { name, address, postcode, email } = action.payload;
  const res = yield call(apiClinic.register, {
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
  const res = yield call(apiApp.initialize);
  if (!res) {
    yield put(initErr());
    return;
  }
  yield put(initOK());
}

function* login(action: any): any {
  const { email, password } = action.payload;
  const res = yield call(apiClinic.login, { email: email, password: password });
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

function* savePatient(action: any): any {
  let payload = action.payload;
  const clinicId = store.getState().app.clinic.id;
  payload = { ...payload, clinicId: clinicId };
  const res = yield call(apiSample.create, { ...payload }); // at API level a sample is only created when patient info is submitted
  const { sample } = res.result;
  yield put(savePatientOK({ ...sample }));
}

function arrayBufferToBase64(buffer: any) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

function* savePhoto(action: any): any {
  let payload = action.payload;
  const clinicId = store.getState().app.clinic.id;
  payload = { ...payload, clinicId: clinicId };
  console.log(payload);
  const res = yield call(apiSample.savePhoto, { ...payload }); // at API level a sample is only created when patient info is submitted

  if (!res) {
    return;
  }

  yield put(
    savePhotoOK({
      ...res.result.sample,
    })
  );
}

function* getSamples(): any {
  const clinicId = store.getState().app.clinic.id;
  const res = yield call(apiSample.getSamples, { clinicId });
  console.log(res);
}

export default function* appSaga() {
  yield takeEvery(INIT, init);
  yield takeEvery(REGISTER, registerClinic);
  yield takeEvery(LOGIN, login);
  yield takeEvery(SAVE_PATIENT, savePatient);
  yield takeEvery(SAVE_PHOTO, savePhoto);
  yield takeEvery(GET_SAMPLES, getSamples);
  yield takeEvery(LOGOUT, logout);
}
