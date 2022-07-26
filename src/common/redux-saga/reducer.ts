import * as ActionType from "../constants/action-type";
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
    case ActionType.RESET:
      return {
        ...state,
        pending: false,
        errMsg: null,
        okMsg: null,
      };
    case ActionType.REGISTER:
      return {
        ...state,
        pending: true,
        errMsg: null,
        okMsg: null,
      };
    case ActionType.REGISTER_OK:
      return {
        ...state,
        pending: false,
        okMsg: action.payload.okMsg,
      };
    case ActionType.REGISTER_ERR:
      return {
        ...state,
        pending: false,
        errMsg: action.payload.errMsg,
      };
    case ActionType.INIT_OK:
      return {
        ...state,
        initialised: true,
      };
    case ActionType.INIT_ERR:
      return {
        ...state,
        initialised: false,
      };
    case ActionType.LOGIN:
      return {
        ...state,
        pending: true,
        clinic: null,
        user: null,
      };
    case ActionType.LOGIN_OK:
      return {
        ...state,
        pending: false,
        clinic: action.payload.clinic,
        user: action.payload.user,
      };
    case ActionType.LOGIN_ERR:
      return {
        ...state,
        pending: false,
      };
    case ActionType.LOGOUT_OK:
      return {
        ...state,
        clinic: null,
        user: null,
      };
    case ActionType.SAVE_USR:
      return {
        ...state,
        pending: true,
      };
    case ActionType.SAVE_USR_OK:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
      };
    case ActionType.SAVE_CLNC_NME:
      return {
        ...state,
        pending: true,
      };
    case ActionType.SAVE_CLNC_NME_OK:
      return {
        ...state,
        clinic: action.payload.clinic,
        pending: false,
      };
    case ActionType.SAVE_CLNC_ADDR:
      return {
        ...state,
        pending: true,
      };
    case ActionType.SAVE_CLNC_ADDR_OK:
      return {
        ...state,
        clinic: action.payload.clinic,
        pending: false,
      };
    case ActionType.SAVE_CLNC_POSTCD:
      return {
        ...state,
        pending: true,
      };
    case ActionType.SAVE_CLNC_POSTCD_OK:
      return {
        ...state,
        clinic: action.payload.clinic,
        pending: false,
      };
    default:
      return state;
  }
}

export default reducerApp;
