export const SET_USER_BANK_DETAILS = "SET_USER_BANK_DETAILS";

export const UPDATE_USER_BANK_DETAILS_REQUESTED = "UPDATE_USER_BANK_DETAILS_REQUESTED";
export const UPDATE_USER_BANK_DETAILS_SUCCEEDED = "UPDATE_USER_BANK_DETAILS_SUCCEEDED";
export const UPDATE_USER_BANK_DETAILS_FAILED = "UPDATE_USER_BANK_DETAILS_FAILED";

export const getUserBankDetails = (payload) => ({
    type: SET_USER_BANK_DETAILS,
    payload,
});

export const updateUserBankDetailsRequested = (payload) => ({
    type: UPDATE_USER_BANK_DETAILS_REQUESTED,
    payload,
});

export const updateUserBankDetailsSucceeded = (payload) => ({
    type: UPDATE_USER_BANK_DETAILS_SUCCEEDED,
    payload,
});

export const updateUserBankDetailsFailed = (payload) => ({
    type: UPDATE_USER_BANK_DETAILS_FAILED,
    payload,
});
