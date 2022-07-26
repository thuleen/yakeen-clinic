import { Buffer } from "buffer";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import dengueSaga from "../../dengue-testkit/redux-saga/saga";
import * as Action from "./actions";
import * as ActionType from "../constants/action-type";
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
    yield put(Action.registerErr({ errMsg: res.message }));
    return;
  }
  if (res.status === "Error") {
    yield put(Action.registerErr({ errMsg: res.message }));
    return;
  }
  yield put(Action.registerOK({ okMsg: res.message }));
}

function* init(): any {
  const res = yield call(apiApp.initialize);
  if (!res) {
    yield put(Action.initErr());
    return;
  }
  yield put(Action.initOK());
}

function* login(action: any): any {
  const { email, password } = action.payload;
  const res = yield call(apiClinic.login, { email: email, password: password });
  if (!res) {
    yield put(Action.loginErr({ errMsg: res.message }));
    return;
  }
  if (res.status === "Error") {
    yield put(Action.loginErr({ errMsg: res.message }));
    return;
  }
  yield put(
    Action.loginOK({
      okMsg: res.message,
      clinic: res.result.clinic,
      user: res.result.user,
    })
  );
}

function* logout() {
  // TODO Call login API
  yield put(Action.logoutOK());
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
  yield put(Action.savePatientOK({ ...sample }));
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
    Action.savePhotoOK({
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
  yield put(Action.saveResultOK({ ...res.result.sample }));
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
  yield put(Action.deleteSampleOK({ samples: res.result.samples }));
}

function* getSamples(): any {
  const clinicId = store.getState().app.clinic.id;
  const res = yield call(apiSample.getSamples, { clinicId });
  if (!res) {
    console.log("Todo implement error getSamples");
    return;
  }
  yield put(Action.getSamplesOK({ samples: res.result.samples }));
}

function* saveUsr(action: any): any {
  const clinicId = store.getState().app.clinic.id;
  const email = store.getState().app.user.email;
  const payload = {
    ...action.payload,
    email: email,
    clinicId: clinicId,
  };
  const res = yield call(apiClinic.saveUsr, { ...payload });
  yield put(Action.saveUsrOK(res.result));
}

function* saveClinicNme(action: any): any {
  let payload = action.payload;
  const clinicId = store.getState().app.clinic.id;
  payload = { ...payload, id: clinicId };
  const res = yield call(apiClinic.saveClinicNme, { ...payload });
  if (!res) {
    console.log("Todo implement saveClinicNmeErr");
    return;
  }
  yield put(Action.saveClinicNmeOK({ clinic: res.result.clinic }));
}

function* saveClinicAddr(action: any): any {
  let payload = action.payload;
  const clinicId = store.getState().app.clinic.id;
  payload = { ...payload, id: clinicId };
  const res = yield call(apiClinic.saveClinicAddr, { ...payload });
  if (!res) {
    console.log("Todo implement saveClinicNmeErr");
    return;
  }
  yield put(Action.saveClinicAddrOK({ clinic: res.result.clinic }));
}

function* saveClinicPostcd(action: any): any {
  let payload = action.payload;
  const clinicId = store.getState().app.clinic.id;
  payload = { ...payload, id: clinicId };
  const res = yield call(apiClinic.saveClinicPostcd, { ...payload });
  if (!res) {
    console.log("Todo implement saveClinicPostcdErr");
    return;
  }
  yield put(Action.saveClinicPostcdOK({ clinic: res.result.clinic }));
}

export default function* appSaga() {
  yield takeEvery(ActionType.INIT, init);
  yield takeEvery(ActionType.REGISTER, registerClinic);
  yield takeEvery(ActionType.LOGIN, login);
  yield takeEvery(ActionType.SAVE_PATIENT, savePatient);
  yield takeEvery(ActionType.SAVE_PHOTO, savePhoto);
  yield takeEvery(ActionType.SAVE_RESULT, saveResult);
  yield takeEvery(ActionType.GET_SAMPLES, getSamples);
  yield takeEvery(ActionType.DELETE_SAMPLE, deleteSample);
  yield takeEvery(ActionType.SAVE_USR, saveUsr);
  yield takeEvery(ActionType.SAVE_CLNC_NME, saveClinicNme);
  yield takeEvery(ActionType.SAVE_CLNC_ADDR, saveClinicAddr);
  yield takeEvery(ActionType.SAVE_CLNC_POSTCD, saveClinicPostcd);
  yield takeEvery(ActionType.LOGOUT, logout);
}
