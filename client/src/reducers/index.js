import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
// ROOT REDUCER
export default combineReducers({
  alert,
  auth,
});
