import {
  LOGIN,
  LOGIN_OK,
  LOGOUT,
  LOGOUT_OK,
} from "../../common/constants/action-type";

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
