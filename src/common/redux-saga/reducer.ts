import {
  INIT_OK,
  INIT_ERR,
  RESET,
  REGISTER,
  REGISTER_OK,
  REGISTER_ERR,
  LOGIN,
  LOGIN_OK,
  LOGIN_ERR,
  LOGOUT_OK,
  UPDATE_USR,
  UPDATE_USR_OK,
} from "../constants/action-type";
import { Clinic, User } from "../constants/payload-type";

export interface AppReducerState {
  pending: boolean;
  initialised: boolean;
  errMsg: string | null;
  okMsg: string | null;
  clinic: Clinic | null;
  user: User | null;
}

const initialState = {
  pending: false,
  initialised: false,
  errMsg: null,
  okMsg: null,
  clinic: null,
  user: null,
};

function reducerApp(state: AppReducerState = initialState, action: any) {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        pending: false,
        errMsg: null,
        okMsg: null,
      };
    case REGISTER:
      return {
        ...state,
        pending: true,
        errMsg: null,
        okMsg: null,
      };
    case REGISTER_OK:
      return {
        ...state,
        pending: false,
        okMsg: action.payload.okMsg,
      };
    case REGISTER_ERR:
      return {
        ...state,
        pending: false,
        errMsg: action.payload.errMsg,
      };
    case INIT_OK:
      return {
        ...state,
        initialised: true,
      };
    case INIT_ERR:
      return {
        ...state,
        initialised: false,
      };
    case LOGIN:
      return {
        ...state,
        pending: true,
        clinic: null,
        user: null,
      };
    case LOGIN_OK:
      return {
        ...state,
        pending: false,
        clinic: action.payload.clinic,
        user: action.payload.user,
      };
    case LOGIN_ERR:
      return {
        ...state,
        pending: false,
      };
    case LOGOUT_OK:
      return {
        ...state,
        clinic: null,
        user: null,
      };
    case UPDATE_USR:
      return {
        ...state,
        pending: true,
      };
    case UPDATE_USR_OK:
      return {
        ...state,
        pending: false,
      };
    default:
      return state;
  }
}

export default reducerApp;
