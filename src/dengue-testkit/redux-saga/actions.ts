import {
  NEW_SAMPLE,
  NEW_SAMPLE_OK,
  SAVE_PATIENT,
  SAVE_PATIENT_OK,
  SET_SMPLPHOTO_DATAURI,
  INTERPRET,
  INTERPRET_OK,
} from "../../common/constants/action-type";
import { DengueSample, Patient, Photo } from "./payload-type";

export const createSample = () => ({
  type: NEW_SAMPLE,
});

export const createSampleOK = (payload: DengueSample) => ({
  type: NEW_SAMPLE_OK,
  payload,
});

export const savePatient = (payload: Patient) => ({
  type: SAVE_PATIENT,
  payload,
});

export const savePatientOK = (payload: Patient) => ({
  type: SAVE_PATIENT_OK,
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
