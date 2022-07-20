import { combineReducers } from "redux";
import reducerDengue from "../dengue-testkit/redux-saga/reducer";
import {
  INIT_OK,
  INIT_ERR,
  LOGIN_OK,
  LOGOUT_OK,
} from "../common/constants/action-type";

export interface AppReducerState {
  initialised: boolean;
  token: string | null;
}

const initialState = {
  initialised: false,
  token: null,
};

function reducerApp(state: AppReducerState = initialState, action: any) {
  switch (action.type) {
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
