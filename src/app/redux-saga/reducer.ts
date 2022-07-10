import { LOGIN_OK, LOGOUT_OK } from "../../common/constants/action-type";

export interface AppReducerState {
  token: string | null;
}

const initialState = {
  token: null,
};

export default function appReducer(
  state: AppReducerState = initialState,
  action: any
) {
  switch (action.type) {
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
