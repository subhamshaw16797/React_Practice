import {
    updateUserBankDetailsRequested,
    updateUserBankDetailsSucceeded,
    updateUserBankDetailsFailed,
} from "../actions/userBankDetailsAction";

import { updateUserBankData } from "../service/userBankDetailsService";

export const updateUserBankDetail = (payload) => {
    return async (dispatch) => {
        await dispatch(updateUserBankDetailsRequested(payload));
        try {
            const response = await updateUserBankData(payload);
            dispatch(updateUserBankDetailsSucceeded(response.data));
        } catch (error) {
            dispatch(updateUserBankDetailsFailed(error));
        }
    };
};
