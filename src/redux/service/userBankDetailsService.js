import axios from "axios";
// import { getUserBankDetails } from "../actions/userBankDetailsAction";

export const updateUserBankData = (payload) => {
    try {
        const response = axios.post(
            `http://localhost:8080/bank/profile/insertBank/${payload.id}`,
            {
                bankName: payload.bankName,
                accountNo: payload.accountNo,
                confirmAccountNo: payload.confirmAccountNo,
                ifscNo: payload.ifscNo,
                pan: payload.pan,
                address: payload.address,
            }
        );
        return response;
    } catch (error) {
        return Promise.reject(error);
    }
};
