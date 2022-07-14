import {
  LOGIN,
  LOGIN_OK,
  LOGOUT,
  LOGOUT_OK,
  SELECT_SAMPLE,
  BACK_STEP,
  NEXT_STEP,
} from "../../common/constants/action-type";
import { Sample } from "../../common/constants/payload-type";

export interface LoginPayload {
  clinicId: string;
  password: string;
}
export const login = (payload: LoginPayload) => ({
  type: LOGIN,
  payload,
});

export interface LoginOkPayload {
  token: string;
}
export const loginOK = (payload: LoginOkPayload) => ({
  type: LOGIN_OK,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutOK = () => ({
  type: LOGOUT_OK,
});

export interface SelectSamplePayload {
  tagNo: string;
}

export const selectSample = (payload: SelectSamplePayload) => ({
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
