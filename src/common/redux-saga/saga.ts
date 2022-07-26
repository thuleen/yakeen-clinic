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
  saveResultOK,
  saveClinicNmeOK,
  getSamplesOK,
  updateUsrOK,
  deleteSampleOK,
} from "./actions";
import {
  INIT,
  REGISTER,
  LOGIN,
  LOGOUT,
  SAVE_PATIENT,
  SAVE_PHOTO,
  GET_SAMPLES,
  UPDATE_USR,
  SAVE_RESULT,
  DELETE_SAMPLE,
  SAVE_CLNC_NME,
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
  yield put(
    loginOK({
      okMsg: res.message,
      clinic: res.result.clinic,
      user: res.result.user,
    })
  );
}

function* logout() {
  // TODO Call login API
  yield put(logoutOK());
}

function* savePatient(action: any): any {
  const clinicId = store.getState().app.clinic.id;
  let payload = { ...action.payload, clinicId: clinicId };
  const res = yield call(apiSample.savePatient, { ...payload }); // at API level a sample is only created when patient info is submitted
  if (!res) {
    console.log("Todo: implement error savePatietErr");
    return;
  }
  const { sample } = res.result;
  yield put(savePatientOK({ ...sample }));
}

function* savePhoto(action: any): any {
  let payload = action.payload;
  const clinicId = store.getState().app.clinic.id;
  payload = { ...payload, clinicId: clinicId };
  const res = yield call(apiSample.savePhoto, { ...payload }); // at API level a sample is only created when patient info is submitted
  console.log(res.result);
  if (!res) {
    return;
  }
  yield put(
    savePhotoOK({
      ...res.result.sample,
    })
  );
}

function* saveResult(action: any): any {
  let payload = action.payload;
  const clinicId = store.getState().app.clinic.id;
  payload = { ...payload, clinicId: clinicId };
  const res = yield call(apiSample.saveResult, { ...payload });
  if (!res) {
    console.log("Todo saveResultErr");
    return;
  }
  yield put(saveResultOK({ ...res.result.sample }));
}

function* deleteSample(action: any): any {
  let payload = action.payload;
  const clinicId = store.getState().app.clinic.id;
  payload = { ...payload, clinicId: clinicId };
  const res = yield call(apiSample.deleteSample, { ...payload });
  if (!res) {
    console.log("Todo deleteSampleErr");
    return;
  }
  yield put(deleteSampleOK({ samples: res.result.samples }));
}

function* getSamples(): any {
  const clinicId = store.getState().app.clinic.id;
  const res = yield call(apiSample.getSamples, { clinicId });
  if (!res) {
    console.log("Todo implement error getSamples");
    return;
  }
  yield put(getSamplesOK({ samples: res.result.samples }));
}

function* updateUsr(action: any): any {
  const clinicId = store.getState().app.clinic.id;
  const email = store.getState().app.user.email;
  const payload = {
    ...action.payload,
    email: email,
    clinicId: clinicId,
  };
  const res = yield call(apiClinic.update, { ...payload });
  yield put(updateUsrOK(res.result));
}

function* saveClinicNme(action: any): any {
  let payload = action.payload;
  const clinicId = store.getState().app.clinic.id;
  payload = { ...payload, id: clinicId };
  console.log(payload);
  const res = yield call(apiClinic.saveClinicNme, { ...payload });
  if (!res) {
    console.log("Todo implement saveClinicNmeErr");
    return;
  }
  yield put(saveClinicNmeOK({ clinic: res.result.clinic }));
}

export default function* appSaga() {
  yield takeEvery(INIT, init);
  yield takeEvery(REGISTER, registerClinic);
  yield takeEvery(LOGIN, login);
  yield takeEvery(SAVE_PATIENT, savePatient);
  yield takeEvery(SAVE_PHOTO, savePhoto);
  yield takeEvery(SAVE_RESULT, saveResult);
  yield takeEvery(GET_SAMPLES, getSamples);
  yield takeEvery(UPDATE_USR, updateUsr);
  yield takeEvery(DELETE_SAMPLE, deleteSample);
  yield takeEvery(SAVE_CLNC_NME, saveClinicNme);
  yield takeEvery(LOGOUT, logout);
}
