import {
  BACK_STEP,
  NEXT_STEP,
  NEW_SAMPLE,
  NEW_SAMPLE_OK,
  SAVE_PATIENT,
  SAVE_PATIENT_OK,
  SAVE_PHOTO,
  SAVE_PHOTO_OK,
  SAVE_RESULT,
  SAVE_RESULT_OK,
  INTERPRET_OK,
  SELECT_SAMPLE,
  GET_SAMPLES,
  GET_SAMPLES_OK,
} from "../../common/constants/action-type";
import { DengueSample } from "./payload-type";
import { mysqlDateFormatter } from "../../utils/datetime-formatter";

export interface AppReducerState {
  selectSmplPhoto: string | null;
  activeSample: DengueSample | null;
  samples: DengueSample[];
  pending: boolean;
}

const initialState = {
  selectSmplPhoto: null,
  activeSample: null,
  samples: [],
  pending: false,
};

export default function dengueReducer(
  state: AppReducerState = initialState,
  action: any
) {
  let nuSamples: Array<DengueSample> = [];
  switch (action.type) {
    case SELECT_SAMPLE:
      let selectedSample = state.samples.filter(
        (s) => s.tagNo === action.payload
      )[0];
      return {
        ...state,
        activeSample: selectedSample,
      };
    case BACK_STEP:
      nuSamples = [...state.samples];
      let sampleToBack = nuSamples.filter(
        (s) => s.tagNo === action.payload.tagNo
      )[0];
      sampleToBack.lastActiveStep = sampleToBack.lastActiveStep - 1;
      return {
        ...state,
        activeSample: sampleToBack,
        samples: nuSamples,
      };
    case NEXT_STEP:
      nuSamples = [...state.samples];
      let sampleToUpdate = nuSamples.filter(
        (s) => s.tagNo === action.payload.tagNo
      )[0];
      if (sampleToUpdate.lastActiveStep === 2) {
        sampleToUpdate.pending = false;
      }
      sampleToUpdate.lastActiveStep = sampleToUpdate.lastActiveStep + 1;
      return {
        ...state,
        activeSample: sampleToUpdate,
        samples: nuSamples,
      };
    case NEW_SAMPLE_OK:
      nuSamples = [{ ...action.payload }, ...state.samples];
      return {
        ...state,
        samples: nuSamples,
        activeSample: action.payload,
        selectSmplPhoto: null,
      };
    case SAVE_PATIENT_OK:
      nuSamples = [...state.samples];
      let sampleWithPatient = nuSamples.filter(
        (s) => s.tagNo === action.payload.tagNo
      )[0];
      sampleWithPatient.id = action.payload.id;
      sampleWithPatient.name = action.payload.name;
      sampleWithPatient.idType = action.payload.idType;
      sampleWithPatient.socialId = action.payload.socialId;
      sampleWithPatient.mobileNo = action.payload.mobileNo;
      sampleWithPatient.lastActiveStep = action.payload.lastActiveStep;
      return {
        ...state,
        activeSample: sampleWithPatient,
        samples: nuSamples,
      };
    case SAVE_PHOTO_OK:
      nuSamples = [...state.samples];
      let sampleWithPhoto = nuSamples.filter(
        (s) => s.tagNo === action.payload.tagNo
      )[0];
      sampleWithPhoto.photoUri = action.payload.photoUri;
      sampleWithPhoto.photoTakenAt = action.payload.photoTakenAt;
      sampleWithPhoto.lastActiveStep = action.payload.lastActiveStep;
      nuSamples = [...nuSamples, { ...sampleWithPhoto }];
      return {
        ...state,
        activeSample: sampleWithPhoto,
        selectSmplPhoto: action.payload.photoUri,
        samples: nuSamples,
      };

    case INTERPRET_OK:
      nuSamples = [...state.samples];
      let sampleWithTag = nuSamples.filter(
        (i) => i.tagNo === action.payload.tagNo
      )[0];
      sampleWithTag.interpretation = action.payload.interpretation;
      sampleWithTag.c = action.payload.c;
      sampleWithTag.cC = action.payload.cC;
      sampleWithTag.igG = action.payload.igG;
      sampleWithTag.igM = action.payload.igM;
      sampleWithTag.ns1Ag = action.payload.ns1Ag;
      return {
        ...state,
        activeSample: sampleWithTag,
        samples: nuSamples,
      };
    case SAVE_RESULT:
      return {
        ...state,
        pending: true,
      };
    case SAVE_RESULT_OK:
      nuSamples = [...state.samples];
      let sampleWithResult = nuSamples.filter(
        (i) => i.tagNo === action.payload.tagNo
      )[0];
      sampleWithResult.lastActiveStep = action.payload.lastActiveStep;
      return {
        ...state,
        pending: false,
        samples: nuSamples,
      };
    case GET_SAMPLES:
      return {
        ...state,
        pending: true,
        samples: [],
      };
    case GET_SAMPLES_OK:
      nuSamples = action.payload;
      return {
        ...state,
        samples: nuSamples,
        pending: false,
      };
    default:
      return state;
  }
}
