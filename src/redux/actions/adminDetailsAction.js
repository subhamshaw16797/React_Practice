export const SET_ADMIN_DETAILS = "SET_ADMIN_DETAILS";
export const ADMIN_LOGGING_OUT = "USER_LOGGING_OUT";

export const UPDATE_ADMIN_DETAILS_REQUESTED = "UPDATE_ADMIN_DETAILS_REQUESTED";
export const UPDATE_ADMIN_DETAILS_SUCCEEDED = "UPDATE_ADMIN_DETAILS_SUCCEEDED";
export const UPDATE_ADMIN_DETAILS_FAILED = "UPDATE_ADMIN_DETAILS_FAILED";

export const getAdminDetails = (payload) => ({
    type: SET_ADMIN_DETAILS,
    payload,
});

export const updateAdminDetailsRequested = (payload) => ({
    type: UPDATE_ADMIN_DETAILS_REQUESTED,
    payload,
});

export const updateAdminDetailsSucceeded = (payload) => ({
    type: UPDATE_ADMIN_DETAILS_SUCCEEDED,
    payload,
});

export const updateAdminDetailsFailed = (payload) => ({
    type: UPDATE_ADMIN_DETAILS_FAILED,
    payload,
});
export const logginOutUser = () => ({
    type: ADMIN_LOGGING_OUT,
});
