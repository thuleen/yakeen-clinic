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
  LOGOUT,
  LOGOUT_OK,
  SELECT_SAMPLE,
  BACK_STEP,
  NEXT_STEP,
} from "../common/constants/action-type";
import {
  Sample,
  SampleSelection,
  Register,
  RegisterErr,
  Login,
  LoginOK,
} from "../common/constants/payload-type";

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

export const registerOK = () => ({
  type: REGISTER_OK,
});

export const registerErr = (payload: RegisterErr) => ({
  type: REGISTER_ERR,
  payload,
});

export const login = (payload: Login) => ({
  type: LOGIN,
  payload,
});

export const loginOK = (payload: LoginOk) => ({
  type: LOGIN_OK,
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
