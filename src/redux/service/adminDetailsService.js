import axios from "axios";

export const updateAdminData = (payload) => {
    try {
        const response = axios.put(
            `http://localhost:8080/admin/update/${payload.id}`,
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
