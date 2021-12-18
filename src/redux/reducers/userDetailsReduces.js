import {
    SET_USER_DETAILS,
    UPDATE_USER_DETAILS_SUCCEEDED,
} from "../actions/userDetailsAction";

const initialState = {
    userDetails: {},
    userDataSuccessfullyUpdated: false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DETAILS:
            return { ...state, userDetails: action.payload };
        case UPDATE_USER_DETAILS_SUCCEEDED:
            return {
                ...state.userDetails,
                userDetails: {
                    address: action.payload.address,
                    email: action.payload.email,
                    username: action.payload.username,
                    mobileNumber: action.payload.mobileNumber,
                },
                userDataSuccessfullyUpdated: true,
            };
        default:
            return state;
    }
};
