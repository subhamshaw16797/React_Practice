import {
    SET_USER_DETAILS,
    UPDATE_USER_DETAILS_SUCCEEDED,
    USER_LOGGING_OUT,
} from "../actions/userDetailsAction";

const initialState = {
    userDetails: {},
    userDataSuccessfullyUpdated: false,
    isLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DETAILS:
            return { ...state, userDetails: action.payload, isLoggedIn: true };
        case UPDATE_USER_DETAILS_SUCCEEDED:
            return {
                ...state,
                userDetails: {
                    ...state.userDetails,
                    address: action.payload.address,
                    email: action.payload.email,
                    username: action.payload.username,
                    mobileNumber: action.payload.mobileNumber,
                },
                userDataSuccessfullyUpdated: true,
            };
        case USER_LOGGING_OUT:
            return { ...state, isLoggedIn: false, userDetails: {} };

        default:
            return state;
    }
};
