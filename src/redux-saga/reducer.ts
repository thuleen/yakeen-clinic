import { combineReducers } from "redux";

import reducerApp from "../app/redux-saga/reducer";
import reducerDengue from "../dengue-testkit/redux-saga/reducer";

const reducer = combineReducers({
  app: reducerApp,
  dengue: reducerDengue,
});

export default reducer;
