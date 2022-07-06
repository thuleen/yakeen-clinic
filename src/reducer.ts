import { combineReducers } from "redux";
import reducerDengue from "./testdengue/redux-saga/reducer";

const reducer = combineReducers({
  dengue: reducerDengue,
});

export default reducer;
