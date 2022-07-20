import { combineReducers } from "redux";
import reducerDengue from "../dengue-testkit/redux-saga/reducer";
import {
  INIT_OK,
  INIT_ERR,
  RESET,
  REGISTER,
  REGISTER_OK,
  REGISTER_ERR,
  LOGIN_OK,
  LOGOUT_OK,
} from "../common/constants/action-type";

export interface AppReducerState {
  pending: boolean;
  initialised: boolean;
  token: string | null;
  errMsg: string | null;
}

const initialState = {
  initialised: false,
  token: null,
};

function reducerApp(state: AppReducerState = initialState, action: any) {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        pending: false,
        errMsg: null,
      };
    case REGISTER:
      return {
        ...state,
        pending: true,
        errMsg: null,
      };
    case REGISTER_OK:
      return {
        ...state,
        pending: false,
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
    case LOGIN_OK:
      return {
        ...state,
        token: action.payload.token,
      };
    case LOGOUT_OK:
      return {
        ...state,
        token: null,
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
