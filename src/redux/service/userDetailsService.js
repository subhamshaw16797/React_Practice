import axios from "axios";
// import { getUserDetails } from "../actions/userBankDetailsAction";

export const updateUserData = (payload) => {
    try {
        const response = axios.put(
            `http://localhost:8080/customer/updateCustomer/1`, // customer id will come from redux store
            {
                username: payload.username,
                address: payload.address,
                mobileNumber: payload.mobileNumber,
                email: payload.email,
            }
        );
        return response;
    } catch (error) {
        return Promise.reject(error);
    }
};
