import { combineReducers } from "redux";
import { userReducer } from "../reducers/userDetailsReduces";
import { userBankReducer } from "../reducers/userBankDetailsReducer";
import { adminReducer } from "../reducers/adminDetailsReduces";

export default combineReducers({
    userData: userReducer,
    userBankData: userBankReducer,
    adminData: adminReducer,
});
