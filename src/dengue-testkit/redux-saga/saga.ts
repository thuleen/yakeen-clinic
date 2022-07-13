import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { sampleCreated, patientCreated, saveInterpretation } from "./actions";
import {
  NEW_SAMPLE,
  NEW_PATIENT,
  INTERPRET,
  INTERPRET_OK,
} from "../../common/constants/action-type";

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

function* createSample() {
  const tagNo = generataRandTagNo();
  yield put(
    sampleCreated({
      testType: "Dengue/NS1",
      pending: true,
      tagNo: tagNo.toString(),
      name: null,
      mobileNo: "",
      socialId: "",
      idType: "",
      c: false,
      igM: false,
      igG: false,
      cC: false,
      ns1Ag: false,
      interpretation: "",
      samplePhotoDataUri: null,
      lastActiveStep: 0,
    })
  );
}

function* createPatient(action: any) {
  yield console.log(action);
  // Fetch api to register the patient
  //
  yield put(patientCreated({ ...action.payload }));
}

export default function* dengueSaga() {
  yield takeEvery(NEW_SAMPLE, createSample);
  yield takeEvery(NEW_PATIENT, createPatient);
  yield takeEvery(INTERPRET, interpret);
}
