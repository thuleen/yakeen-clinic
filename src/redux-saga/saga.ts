import { Buffer } from "buffer";
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
} from "../common/constants/action-type";
import { initialize } from "../common/api/app";
import { register, apiLogin } from "../common/api/clinic";
import { apiCreateSample, apiSavePhoto } from "../common/api/sample";
import store from "../store";

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

function* savePatient(action: any): any {
  let payload = action.payload;
  const clinicId = store.getState().app.clinic.id;
  payload = { ...payload, clinicId: clinicId };
  const res = yield call(apiCreateSample, { ...payload }); // at API level a sample is only created when patient info is submitted
  const { sample } = res.result;
  yield put(
    savePatientOK({
      ...sample,
      idType: sample.pIdType,
      mobileNo: sample.pMobileNo,
      name: sample.pName,
      socialId: sample.pSocId,
    })
  );
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
  const res = yield call(apiSavePhoto, { ...payload }); // at API level a sample is only created when patient info is submitted
  // console.log(res.result.sample.photoUri);
  // const arrayBuffer = res.result.sample.photoUri;
  // const photoUri = Buffer.from(arrayBuffer).toString("base64");
  // console.log(photoUri);

  yield put(
    savePhotoOK({
      ...res.result.sample,
      photoUri: res.result.sample.photoUri,
    })
  );
}

export default function* appSaga() {
  yield takeEvery(INIT, init);
  yield takeEvery(REGISTER, registerClinic);
  yield takeEvery(LOGIN, login);
  yield takeEvery(SAVE_PATIENT, savePatient);
  yield takeEvery(SAVE_PHOTO, savePhoto);
  yield takeEvery(LOGOUT, logout);
}
