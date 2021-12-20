import axios from "axios";

export const updateUserBankData = (payload) => {
    try {
        const response = axios.post(
            `http://localhost:8080/bank/profile/insertBank/35`,
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
