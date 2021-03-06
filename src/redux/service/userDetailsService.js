import axios from "axios";

export const updateUserData = (payload) => {
    try {
        const response = axios.put(
            `http://localhost:8080/customer/updateCustomer/${payload.id}`,
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
