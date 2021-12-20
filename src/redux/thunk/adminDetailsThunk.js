import {
    updateAdminDetailsRequested,
    updateAdminDetailsSucceeded,
    updateAdminDetailsFailed,
} from "../actions/adminDetailsAction";

import { updateAdminData } from "../service/adminDetailsService";

export const updateAdminDetail = (payload) => {
    return async (dispatch) => {
        await dispatch(updateAdminDetailsRequested(payload));
        try {
            const response = await updateAdminData(payload);
            dispatch(updateAdminDetailsSucceeded(response.data));
        } catch (error) {
            dispatch(updateAdminDetailsFailed(error));
        }
    };
};
