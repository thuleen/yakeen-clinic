import {
  NEW_SAMPLE,
  NEW_SAMPLE_OK,
  NEW_PATIENT,
  NEW_PATIENT_OK,
  SET_SMPLPHOTO_DATAURI,
  INTERPRET,
  INTERPRET_OK,
  NEXT_STEP,
} from "../../common/constants/action-type";
import { DengueSample, Patient, Photo } from "./payload-type";

export const createSample = () => ({
  type: NEW_SAMPLE,
});

export const sampleCreated = (payload: DengueSample) => ({
  type: NEW_SAMPLE_OK,
  payload,
});

export const nextStep = (payload: DengueSample) => ({
  type: NEXT_STEP,
  payload,
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

export const interpretTest = (payload: DengueSample) => ({
  type: INTERPRET,
  payload: payload,
});

export const saveInterpretation = (payload: DengueSample) => ({
  type: INTERPRET_OK,
  payload: payload,
});
