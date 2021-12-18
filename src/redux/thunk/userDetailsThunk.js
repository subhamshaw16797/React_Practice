import {
    updateUserDetailsRequested,
    updateUserDetailsSucceeded,
    updateUserDetailsFailed,
} from "../actions/userDetailsAction";

import { updateUserData } from "../service/userDetailsService";

export const updateUserDetail = (payload) => {
    return async (dispatch) => {
        await dispatch(updateUserDetailsRequested(payload));
        try {
            const response = await updateUserData(payload);
            dispatch(updateUserDetailsSucceeded(response.data));
        } catch (error) {
            dispatch(updateUserDetailsFailed(error));
        }
    };
};
