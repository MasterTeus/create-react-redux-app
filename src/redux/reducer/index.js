import { combineReducers } from "redux";
import { userReducer } from "../ducks/userReducer";
import { menuReducer } from "../ducks/menuReducer";

export const Reducers = combineReducers({
  userReducer,
  menuReducer,
});
