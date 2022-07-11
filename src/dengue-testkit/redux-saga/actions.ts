import {
  NEW_SAMPLE,
  NEW_SAMPLE_OK,
  NEW_PATIENT,
  NEW_PATIENT_OK,
  SET_SMPLPHOTO_DATAURI,
  INTERPRET,
  INTERPRET_OK,
  RESTART_STEP,
  NEXT_STEP,
} from "../../common/constants/action-type";
import { Sample, Patient, Photo } from "./payload-types";

export const createSample = () => ({
  type: NEW_SAMPLE,
});

export const sampleCreated = (payload: Sample) => ({
  type: NEW_SAMPLE_OK,
  payload,
});

export const restartStep = () => ({
  type: RESTART_STEP,
});

export const nextStep = () => ({
  type: NEXT_STEP,
});

export const createPatient = (payload: Patient) => ({
  type: NEW_PATIENT,
  payload,
});

export const patientCreated = (payload: Patient) => ({
  type: NEW_PATIENT_OK,
  payload,
});

export const setSamplePhotoDataUri = (payload: Photo) => ({
  type: SET_SMPLPHOTO_DATAURI,
  payload,
});

export const interpretTest = (payload: Sample) => ({
  type: INTERPRET,
  payload: payload,
});

export const saveInterpretation = (payload: Sample) => ({
  type: INTERPRET_OK,
  payload: payload,
});
