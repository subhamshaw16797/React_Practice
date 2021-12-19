import {
    SET_USER_BANK_DETAILS,
    UPDATE_USER_BANK_DETAILS_SUCCEEDED,
} from "../actions/userBankDetailsAction";

const initialState = {
    userBankDetails: {},
    userBankDataSuccessfullyUpdated: false,
};

export const userBankReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_BANK_DETAILS:
            return { ...state, userBankDetails: action.payload };
        case UPDATE_USER_BANK_DETAILS_SUCCEEDED:
            return {
                ...state.userBankDetails,
                userBankDetails: {
                    bankName: action.payload.bankName,
                    accountNo: action.payload.accountNo,
                    confirmAccountNo: action.payload.confirmAccountNo,
                    ifscNo: action.payload.ifscNo,
                    pan: action.payload.pan,
                    address: action.payload.address,
                },
                userBankDataSuccessfullyUpdated: true,
            };
        default:
            return state;
    }
};
