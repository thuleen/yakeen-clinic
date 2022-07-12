import {
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  RESTART_STEP,
  NEXT_STEP,
  NEW_SAMPLE,
  NEW_SAMPLE_OK,
  NEW_PATIENT_OK,
  SET_SMPLPHOTO_DATAURI,
  INTERPRET_OK,
} from "../../common/constants/action-type";
import { DengueSample } from "./payload-type";

export interface AppReducerState {
  count: number;
  formActiveStep: number;
  selectSmplPhoto: string | null;
  samples: Array<DengueSample>;
}

const initialState = {
  count: 0,
  selectSmplPhoto: null,
  formActiveStep: 0,
  samples: [],
};

export default function dengueReducer(
  state: AppReducerState = initialState,
  action: any
) {
  let nuSamples: Array<DengueSample> = [];
  switch (action.type) {
    case RESTART_STEP:
      return {
        ...state,
        formActiveStep: 0,
      };

    case NEXT_STEP:
      return {
        ...state,
        formActiveStep: state.formActiveStep + 1,
      };

    case NEW_SAMPLE_OK:
      // console.log(action);
      nuSamples = [...state.samples, { ...action.payload }];
      return {
        ...state,
        samples: nuSamples,
        selectSmplPhoto: null,
        formActiveStep: 0,
      };

    case NEW_PATIENT_OK:
      nuSamples = [...state.samples];
      let sampleWithPatient = nuSamples.filter(
        (s) => s.tagNo === action.payload.tagNo
      )[0];
      sampleWithPatient.name = action.payload.name;
      sampleWithPatient.idType = action.payload.idType;
      sampleWithPatient.socialId = action.payload.socialId;
      sampleWithPatient.mobileNo = action.payload.mobileNo;
      return {
        ...state,
        samples: nuSamples,
        formActiveStep: state.formActiveStep + 1,
      };

    case SET_SMPLPHOTO_DATAURI:
      nuSamples = [...state.samples];
      let sampleWithPhoto = nuSamples.filter(
        (s) => s.tagNo === action.payload.tagNo
      );
      sampleWithPhoto[0].samplePhotoDataUri = action.payload.dataUri;
      nuSamples = [...nuSamples, { ...sampleWithPhoto[0] }];
      return {
        ...state,
        // samples: nuSamples,
        selectSmplPhoto: action.payload.dataUri,
        formActiveStep: state.formActiveStep + 1,
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
        samples: nuSamples,
      };

    default:
      return state;
  }
}
