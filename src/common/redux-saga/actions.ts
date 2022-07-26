import * as ActionType from "../constants/action-type";
import {
  User,
  Clinic,
  Sample,
  SampleSelection,
  Register,
  RegisterErr,
  RegisterOK,
  Login,
  LoginOK,
  LoginErr,
  GetSamplesOK,
} from "../constants/payload-type";

export const init = () => ({
  type: ActionType.INIT,
});

export const initOK = () => ({
  type: ActionType.INIT_OK,
});

export const initErr = () => ({
  type: ActionType.INIT_ERR,
});

export const reset = () => ({
  type: ActionType.RESET,
});

export const register = (payload: Register) => ({
  type: ActionType.REGISTER,
  payload,
});

export const registerOK = (payload: RegisterOK) => ({
  type: ActionType.REGISTER_OK,
  payload,
});

export const registerErr = (payload: RegisterErr) => ({
  type: ActionType.REGISTER_ERR,
  payload,
});

export const login = (payload: Login) => ({
  type: ActionType.LOGIN,
  payload,
});

export const loginOK = (payload: LoginOK) => ({
  type: ActionType.LOGIN_OK,
  payload,
});

export const loginErr = (payload: LoginErr) => ({
  type: ActionType.LOGIN_ERR,
  payload,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const logoutOK = () => ({
  type: ActionType.LOGOUT_OK,
});

export const selectSample = (payload: SampleSelection) => ({
  type: ActionType.SELECT_SAMPLE,
  payload,
});

export const backStep = (payload: Sample) => ({
  type: ActionType.BACK_STEP,
  payload,
});

export const nextStep = (payload: Sample) => ({
  type: ActionType.NEXT_STEP,
  payload,
});

export const savePatient = (payload: Sample) => ({
  type: ActionType.SAVE_PATIENT,
  payload,
});

export const savePatientOK = (payload: Sample) => ({
  type: ActionType.SAVE_PATIENT_OK,
  payload,
});

export const savePhoto = (payload: Sample) => ({
  type: ActionType.SAVE_PHOTO,
  payload,
});

export const savePhotoOK = (payload: Sample) => ({
  type: ActionType.SAVE_PHOTO_OK,
  payload,
});

export const saveResult = (payload: Sample) => ({
  type: ActionType.SAVE_RESULT,
  payload,
});

export const saveResultOK = (payload: Sample) => ({
  type: ActionType.SAVE_RESULT_OK,
  payload,
});

export const getSamples = () => ({
  type: ActionType.GET_SAMPLES,
});

export const getSamplesOK = (payload: GetSamplesOK) => ({
  type: ActionType.GET_SAMPLES_OK,
  payload,
});

export const updateUsr = (payload: {
  email: string;
  name?: string;
  usrPassword?: string;
  usrNewPassword?: string;
}) => ({
  type: ActionType.UPDATE_USR,
  payload,
});

export const updateUsrOK = (payload: User) => ({
  type: ActionType.UPDATE_USR_OK,
  payload,
});

export const deleteSample = (payload: { id: number }) => ({
  type: ActionType.DELETE_SAMPLE,
  payload,
});

export const deleteSampleOK = (payload: GetSamplesOK) => ({
  type: ActionType.DELETE_SAMPLE_OK,
  payload,
});

export const saveClinicNme = (payload: { id: number; name: string }) => ({
  type: ActionType.SAVE_CLNC_NME,
  payload,
});

export const saveClinicNmeOK = (payload: {clinic : Clinic}) => ({
  type: ActionType.SAVE_CLNC_NME_OK,
  payload,
});
