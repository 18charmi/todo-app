import { combineReducers } from "redux";
import todos from "./todos";

const rootReducer = combineReducers({
  todo: todos,
});

export default rootReducer;