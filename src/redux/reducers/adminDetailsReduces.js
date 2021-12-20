import {
    SET_ADMIN_DETAILS,
    UPDATE_ADMIN_DETAILS_SUCCEEDED,
} from "../actions/adminDetailsAction";

const initialState = {
    adminDetails: {},
    adminDataSuccessfullyUpdated: false,
};

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN_DETAILS:
            return { ...state, adminDetails: action.payload };
        case UPDATE_ADMIN_DETAILS_SUCCEEDED:
            return {
                ...state.adminDetails,
                adminDetails: {
                    address: action.payload.address,
                    email: action.payload.email,
                    username: action.payload.username,
                    mobileNumber: action.payload.mobileNumber,
                },
                adminDataSuccessfullyUpdated: true,
            };
        default:
            return state;
    }
};
