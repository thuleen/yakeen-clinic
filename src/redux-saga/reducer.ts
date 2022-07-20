import { combineReducers } from "redux";
import reducerDengue from "../dengue-testkit/redux-saga/reducer";
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
} from "../common/constants/action-type";
import { Clinic } from "../common/constants/payload-type";

export interface AppReducerState {
  pending: boolean;
  initialised: boolean;
  errMsg: string | null;
  okMsg: string | null;
  clinic: Clinic | null;
}

const initialState = {
  pending: false,
  initialised: false,
  errMsg: null,
  okMsg: null,
  clinic: null,
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
      };
    case LOGIN_OK:
      return {
        ...state,
        pending: false,
        clinic: action.payload.clinic,
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
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  app: reducerApp,
  dengue: reducerDengue,
});

export default reducer;
