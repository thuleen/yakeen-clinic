import {
  INIT,
  INIT_OK,
  INIT_ERR,
  RESET,
  REGISTER,
  REGISTER_OK,
  REGISTER_ERR,
  LOGIN,
  LOGIN_OK,
  LOGIN_ERR,
  LOGOUT,
  LOGOUT_OK,
  SELECT_SAMPLE,
  GET_SAMPLES,
  GET_SAMPLES_OK,
  BACK_STEP,
  NEXT_STEP,
  SAVE_PATIENT,
  SAVE_PATIENT_OK,
  SAVE_PHOTO,
  SAVE_PHOTO_OK,
  SAVE_RESULT,
  SAVE_RESULT_OK,
  UPDATE_USR,
  UPDATE_USR_OK,
} from "../constants/action-type";
import {
  User,
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
  type: INIT,
});

export const initOK = () => ({
  type: INIT_OK,
});

export const initErr = () => ({
  type: INIT_ERR,
});

export const reset = () => ({
  type: RESET,
});

export const register = (payload: Register) => ({
  type: REGISTER,
  payload,
});

export const registerOK = (payload: RegisterOK) => ({
  type: REGISTER_OK,
  payload,
});

export const registerErr = (payload: RegisterErr) => ({
  type: REGISTER_ERR,
  payload,
});

export const login = (payload: Login) => ({
  type: LOGIN,
  payload,
});

export const loginOK = (payload: LoginOK) => ({
  type: LOGIN_OK,
  payload,
});

export const loginErr = (payload: LoginErr) => ({
  type: LOGIN_ERR,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutOK = () => ({
  type: LOGOUT_OK,
});

export const selectSample = (payload: SampleSelection) => ({
  type: SELECT_SAMPLE,
  payload,
});

export const backStep = (payload: Sample) => ({
  type: BACK_STEP,
  payload,
});

export const nextStep = (payload: Sample) => ({
  type: NEXT_STEP,
  payload,
});

export const savePatient = (payload: Sample) => ({
  type: SAVE_PATIENT,
  payload,
});

export const savePatientOK = (payload: Sample) => ({
  type: SAVE_PATIENT_OK,
  payload,
});

export const savePhoto = (payload: Sample) => ({
  type: SAVE_PHOTO,
  payload,
});

export const savePhotoOK = (payload: Sample) => ({
  type: SAVE_PHOTO_OK,
  payload,
});

export const saveResult = (payload: Sample) => ({
  type: SAVE_RESULT,
  payload,
});

export const saveResultOK = (payload: Sample) => ({
  type: SAVE_RESULT_OK,
  payload,
});

export const getSamples = () => ({
  type: GET_SAMPLES,
});

export const getSamplesOK = (payload: GetSamplesOK) => ({
  type: GET_SAMPLES_OK,
  payload,
});

export const updateUsr = (payload: {
  email: string;
  name?: string;
  usrPassword?: string;
  usrNewPassword?: string;
}) => ({
  type: UPDATE_USR,
  payload,
});

export const updateUsrOK = (payload: User) => ({
  type: UPDATE_USR_OK,
  payload,
});
