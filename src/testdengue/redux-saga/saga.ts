import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  decreaseCounter,
  increaseCounter,
  saveInterpretation,
} from "./actions";
import {
  DECREASE_ASYNC,
  INCREASE_ASYNC,
  INTERPRET,
  INTERPRET_OK,
} from "../../common/constants/action-type";

const pauseASecond = () =>
  new Promise((resolve) => setTimeout(() => resolve(null), 1000));

function* delayIncrease() {
  yield call(pauseASecond);
  yield put(increaseCounter());
}

function* delayDecrease() {
  yield call(pauseASecond);
  yield put(decreaseCounter());
}

function* interpret(action: any) {
  let result = "";
  const { tagNo, c, igM, igG, cC, ns1Ag } = action.payload;

  if (c && igM && !igG && cC && ns1Ag) {
    result = "Acute early dengue infection";
    yield put(saveInterpretation({ ...action.payload, result }));
    return;
  }
  if (c && igM && !igG && cC && !ns1Ag) {
    result = "Primary infection";
    yield put(saveInterpretation({ ...action.payload, result }));
    return;
  }
  if (c && igM && igG && cC && !ns1Ag) {
    result = "Repeated dengue infection";
    yield put(saveInterpretation({ ...action.payload, result }));
    return;
  }
  if (c && igM && igG && cC && ns1Ag) {
    result = "Acute dengue infection, repeated dengue infection";
    yield put(saveInterpretation({ ...action.payload, result }));
    return;
  }
  if (c && !igM && !igG && cC && ns1Ag) {
    result = "Acute primary dengue, early phase";
    yield put(saveInterpretation({ ...action.payload, result }));
    return;
  }
  if (c && !igM && !igG && cC && !ns1Ag) {
    result = "Negative for dengue infection";
    yield put(saveInterpretation({ ...action.payload, result }));
    return;
  }
  if (c && !igM && igG && cC && ns1Ag) {
    result = "Early dengue infection, repeated infection";
    yield put(saveInterpretation({ ...action.payload, result }));
    return;
  }
  if (c && !igM && igG && cC && !ns1Ag) {
    result = "Past infection";
    yield put(saveInterpretation({ ...action.payload, result }));
    return;
  }

  result = "Invalid";
  yield put(saveInterpretation({ ...action.payload, result }));
}

export default function* dengueSaga() {
  // yield takeEvery(INCREASE_ASYNC, delayIncrease);
  // yield takeEvery(DECREASE_ASYNC, delayDecrease);
  yield takeEvery(INTERPRET, interpret);
}
