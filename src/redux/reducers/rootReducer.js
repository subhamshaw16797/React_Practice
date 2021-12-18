import { combineReducers } from "redux";
import { userReducer } from "../reducers/userDetailsReduces";

export default combineReducers({
    userData: userReducer,
});
