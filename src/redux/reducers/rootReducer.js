import { combineReducers } from "redux";
import { userReducer } from "../reducers/userDetailsReduces";
import { userBankReducer } from "../reducers/userBankDetailsReducer";

export default combineReducers({
    userData: userReducer,
    userBankData: userBankReducer,
});
