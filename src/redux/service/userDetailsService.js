import axios from "axios";
import { getUserDetails } from "../actions/userDetailsAction";

export const updateUserData = (payload) => {
    try {
        const response = axios.put(
            `http://localhost:8080/customer/updateCustomer/${getUserDetails.payload.id}`, // customer id will come from redux store
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
