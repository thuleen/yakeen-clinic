import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { createSampleOK, saveInterpretation } from "./actions";
import {
  NEW_SAMPLE,
  INTERPRET,
  INTERPRET_OK,
} from "../../common/constants/action-type";
import store from "../../store";
import * as apiSample from "../../common/api/sample";

const PATIENT_APP_URL = import.meta.env.VITE_APP_URL_PATIENT;
const TESTKIT_NAME = import.meta.env.VITE_APP_DENGUE_TESTKIT_NAME;

function* interpret(action: any) {
  let result = "";
  const { tagNo, c, igM, igG, cC, ns1Ag } = action.payload;

  if (c && igM && !igG && cC && ns1Ag) {
    result = "Acute early dengue infection";
    yield put(
      saveInterpretation({ ...action.payload, interpretation: result })
    );
    return;
  }
  if (c && igM && !igG && cC && !ns1Ag) {
    result = "Primary infection";
    yield put(
      saveInterpretation({ ...action.payload, interpretation: result })
    );
    return;
  }
  if (c && igM && igG && cC && !ns1Ag) {
    result = "Repeated dengue infection";
    yield put(
      saveInterpretation({ ...action.payload, interpretation: result })
    );
    return;
  }
  if (c && igM && igG && cC && ns1Ag) {
    result = "Acute dengue infection, repeated dengue infection";
    yield put(
      saveInterpretation({ ...action.payload, interpretation: result })
    );
    return;
  }
  if (c && !igM && !igG && cC && ns1Ag) {
    result = "Acute primary dengue, early phase";
    yield put(
      saveInterpretation({ ...action.payload, interpretation: result })
    );
    return;
  }
  if (c && !igM && !igG && cC && !ns1Ag) {
    result = "Negative for dengue infection";
    yield put(
      saveInterpretation({ ...action.payload, interpretation: result })
    );
    return;
  }
  if (c && !igM && igG && cC && ns1Ag) {
    result = "Early dengue infection, repeated infection";
    yield put(
      saveInterpretation({ ...action.payload, interpretation: result })
    );
    return;
  }
  if (c && !igM && igG && cC && !ns1Ag) {
    result = "Past infection";
    yield put(
      saveInterpretation({ ...action.payload, interpretation: result })
    );
    return;
  }

  result = "Invalid";
  yield put(saveInterpretation({ ...action.payload, interpretation: result }));
}

const generataRandTagNo = () => {
  return Math.floor(1000000 + Math.random() * 9000000);
};

function* createSample(): any {
  const clinicId = store.getState().app.clinic.id;
  const tagNo = generataRandTagNo();
  const payload = {
    clinicId: clinicId,
    testType:`${TESTKIT_NAME}`,
    tagNo: tagNo.toString(),
    lastActiveStep: 0,
  };
  const res = yield call(apiSample.create, { ...payload });
  if (!res) {
    console.log("Todo - handle error.");
    return;
  }

  const { sample } = res.result;

  const createdAt = sample.createdAt;
  yield put(
    createSampleOK({
      ...sample,
      name: "",
      mobileNo: "",
      socialId: "",
      idType: "Nric",
      c: false,
      igM: false,
      igG: false,
      cC: false,
      ns1Ag: false,
      interpretation: "",
      photoUri: null,
      lastActiveStep: 0,
      createdAt: createdAt,
      interpretedAt: createdAt,
      photoTakenAt: createdAt,
      shareLink: `${PATIENT_APP_URL}/123`,
    })
  );
}

export default function* dengueSaga() {
  yield takeEvery(NEW_SAMPLE, createSample);
  yield takeEvery(INTERPRET, interpret);
}
