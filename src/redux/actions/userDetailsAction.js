// action constatns
export const SET_USER_DETAILS = "SET_USER_DETAILS";
export const USER_LOGGING_OUT = "USER_LOGGING_OUT";

export const UPDATE_USER_DETAILS_REQUESTED = "UPDATE_USER_DETAILS_REQUESTED";
export const UPDATE_USER_DETAILS_SUCCEEDED = "UPDATE_USER_DETAILS_SUCCEEDED";
export const UPDATE_USER_DETAILS_FAILED = "UPDATE_USER_DETAILS_FAILED";

//action creators
export const getUserDetails = (payload) => ({
    type: SET_USER_DETAILS,
    payload,
});

export const updateUserDetailsRequested = (payload) => ({
    type: UPDATE_USER_DETAILS_REQUESTED,
    payload,
});

export const updateUserDetailsSucceeded = (payload) => ({
    type: UPDATE_USER_DETAILS_SUCCEEDED,
    payload,
});

export const updateUserDetailsFailed = (payload) => ({
    type: UPDATE_USER_DETAILS_FAILED,
    payload,
});

export const logginOutUser = () => ({
    type: USER_LOGGING_OUT,
});
