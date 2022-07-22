import { combineReducers } from "redux";
import reducerDengue from "./dengue-testkit/redux-saga/reducer";
import reducerApp from "./common/redux-saga/reducer";

const reducer = combineReducers({
  app: reducerApp,
  dengue: reducerDengue,
});

export default reducer;
