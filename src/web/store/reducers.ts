import { combineReducers } from "redux";
import { AuthorizationReducer } from "./Authorization/reducers";

export default combineReducers({
  Authorization: AuthorizationReducer,
});
