import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography, Modal, Paper, TextField, Stack } from "@mui/material";
import { AlertNotificationContext } from '../../alert-context/alert-state';
import { updateUserDetail } from '../../redux/thunk/userDetailsThunk';
import { updateUserBankDetail } from '../../redux/thunk/userBankDetailsThunk';
import axios from 'axios';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function FormModal(props) {
    const { setAlert } = useContext(AlertNotificationContext);
    const dispatch = useDispatch();
    const { userDataSuccessfullyUpdated, userDetails } = useSelector((state) => state.userData)
    const { userBankDataSuccessfullyUpdated} = useSelector((state) => state.userBankData)
    const [userDetail, setUserDetail] = useState({
        username: userDetails?.username || '',
        email: userDetails?.email || '',
        mobileNo: userDetails?.mobileNumber || '',
        address: userDetails?.address || '',
    })

    const [bankDetails, setUserBankDetails] = useState({
        bankName: userDetails?.bank?.bankName || '',
        accountNo: userDetails?.bank?.bankName || '',
        confirmAccountNo: '',
        ifscNo: userDetails?.bank?.bankName || '',
        pan: userDetails?.bank?.bankName || '',
        address: userDetails?.bank?.bankName || ''
    })

    const [gasBookingDetails, setUserGasBookingDetails] = useState({
        username: userDetails?.username || '',
        email: userDetails?.email || '',
        mobileNo: userDetails?.mobileNumber || '',
        address: userDetails?.address || '',
        accountNo: userDetails?.bank?.accountNo || ''
    })

    const handleUserDetailsUpdater = () => {
        dispatch(updateUserDetail(
            {
                "id" : userDetails.id,
                "username": userDetail.username,
                "address": userDetail.address,
                "mobileNumber": userDetail.mobileNo,
                "email": userDetail.email,
            }
        ))
    }
    const handleUserBankDetailsUpdater = () => {
        dispatch(updateUserBankDetail(
            {
                "bankName": bankDetails.bankName,
                "accountNo": bankDetails.accountNo,
                "confirmAccountNo": bankDetails.confirmAccountNo,
                "ifscNo": bankDetails.ifscNo,
                "pan": bankDetails.pan,
                "address": bankDetails.address
            }
        ))
    }
    useEffect(() => {
        if (userDataSuccessfullyUpdated) {
            setAlert('success', 'Profile Updated Successfully!');
        }
        if (userBankDataSuccessfullyUpdated) {
            setAlert('success', 'Successfully Updated Bank Details !');
        }
    }, [userDataSuccessfullyUpdated, userBankDataSuccessfullyUpdated]);

    const handleUserGasBookingDetails = () => {
        if (!gasBookingDetails.username.length) {
            return setAlert('warning', 'Username cannnot be blank')

        }
        if (gasBookingDetails.username.length <= 7) {
            return setAlert('warning', 'Username should be greater than 8 character')
        }
        if (!gasBookingDetails.email.length) {
            return setAlert('warning', 'Email cannnot be blank')
        }
        if (!gasBookingDetails.mobileNo.length) {
            return setAlert('warning', 'Mobile Number cannnot be blank')
        }
        if (gasBookingDetails.mobileNo.length <= 9) {
            return setAlert('warning', 'Mobile Number should be 10 digit')
        }
        if (!gasBookingDetails.address.length) {
            return setAlert('warning', 'Address cannnot be blank')
        }
        if (gasBookingDetails.address.length <= 6) {
            return setAlert('warning', 'Give Proper Address !')
        }
        if (!gasBookingDetails.accountNo.length) {
            return setAlert('warning', 'role cannnot be blank')
        }
        if (!gasBookingDetails.accountNo.length <= 5) {
            return setAlert('warning', 'Account Number should be greater than 5 digit !')
        }
        const autoGenerateCylinderID = props.cylinderDetails[Math.floor(Math.random() * props.cylinderDetails.length)]
        console.log(autoGenerateCylinderID);
        const dataUrl = `http://localhost:8080/customer/profile/addCustomerWithCylinder/${userDetails?.id}/${autoGenerateCylinderID?.cylinderId}`;
        axios.put(dataUrl).then((res) => {
            console.log(res);
            if (res.status === 200) {
                setAlert('success', 'Successfully Booked Gas !');
                setUserGasBookingDetails({
                    username: '',
                    email: '',
                    mobileNo: '',
                    address: '',
                    accountNo: ''
                })
                props.handleClose()

            }
        })
    }
    return (
        <>
            {
                props.formType === "gasBooking" &&
                <div>
                    <Modal
                        open={props.isModalOpen}
                        onClose={props.handleCloseGasModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography
                                id="modal-modal-title"
                                className="mb-2"
                                style={{ textAlign: "center" }}
                                variant="h6"
                                component="h2"
                            >
                                Add Booking Details
                            </Typography>
                            <Paper elevation={3}>
                                <Box
                                    component="form"
                                    noValidate
                                    autoComplete="off"
                                    padding={2}
                                >
                                    <TextField
                                        id="filled-basic"
                                        label="Name"
                                        variant="filled"
                                        type="text"
                                        style={{ marginBottom: 10 }}
                                        fullWidth
                                        required
                                        value={gasBookingDetails?.username || ''}
                                        onChange={(e) =>
                                            setUserGasBookingDetails({
                                                ...gasBookingDetails,
                                                username:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Email"
                                        variant="filled"
                                        type="email"
                                        fullWidth
                                        style={{ marginBottom: 10 }}
                                        required
                                        value={gasBookingDetails.email || ''}
                                        onChange={(e) =>
                                            setUserGasBookingDetails({
                                                ...gasBookingDetails,
                                                email:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Mobile No."
                                        variant="filled"
                                        type="tel"
                                        fullWidth
                                        style={{ marginBottom: 10 }}
                                        required
                                        value={gasBookingDetails?.mobileNo || ''}
                                        onChange={(e) =>
                                            setUserGasBookingDetails({
                                                ...gasBookingDetails,
                                                mobileNo:
                                                    e.target.value,
                                            })
                                        }
                                        inputProps={{ maxLength: 10 }}
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Address"
                                        variant="filled"
                                        type="text"
                                        fullWidth
                                        required
                                        style={{ marginBottom: 10 }}
                                        value={gasBookingDetails?.address}
                                        onChange={(e) =>
                                            setUserGasBookingDetails({
                                                ...gasBookingDetails,
                                                address:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Bank Account Number"
                                        variant="filled"
                                        type="text"
                                        fullWidth
                                        required
                                        style={{ marginBottom: 10 }}
                                        value={gasBookingDetails?.accountNo}
                                        onChange={(e) =>
                                            setUserGasBookingDetails({
                                                ...gasBookingDetails,
                                                accountNo:
                                                    e.target.value,
                                            })
                                        }
                                    />

                                    <Stack spacing={2} direction="row">
                                        <Button
                                            variant="contained"
                                            style={{ marginTop: "10px" }}
                                            onClick={handleUserGasBookingDetails}
                                        >
                                            Book
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                            onClick={props.handleCloseGasModal}
                                        >
                                                Cancel
                                        </Button>
                                    </Stack>
                                </Box>
                            </Paper>
                            {/* </div> */}
                        </Box>
                    </Modal>
                </div>
            }
            {
                props.formType === "userDetails" &&
                <div>
                    <Modal
                        open={props.isModalOpen}
                        onClose={props.handleCloseGasModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography
                                id="modal-modal-title"
                                className="mb-2"
                                style={{ textAlign: "center" }}
                                variant="h6"
                                component="h2"
                            >
                                Update Details
                            </Typography>
                            <Paper elevation={3}>
                                <Box
                                    component="form"
                                    noValidate
                                    autoComplete="off"
                                    padding={2}
                                >
                                    <TextField
                                        id="filled-basic"
                                        label="Username"
                                        variant="filled"
                                        type="text"
                                        style={{ marginBottom: 10 }}
                                        fullWidth
                                        required
                                        onChange={(e) =>
                                            setUserDetail({
                                                ...userDetail,
                                                username:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Email"
                                        variant="filled"
                                        type="email"
                                        fullWidth
                                        style={{ marginBottom: 10 }}
                                        required
                                        onChange={(e) =>
                                            setUserDetail({
                                                ...userDetail,
                                                email:
                                                    e.target.value,
                                            })
                                        } />
                                    <TextField
                                        id="filled-basic"
                                        label="Mobile No."
                                        variant="filled"
                                        type="tel"
                                        fullWidth
                                        style={{ marginBottom: 10 }}
                                        required
                                        onChange={(e) =>
                                            setUserDetail({
                                                ...userDetail,
                                                mobileNo:
                                                    e.target.value,
                                            })
                                        }
                                        inputProps={{ maxLength: 10 }}
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Address"
                                        variant="filled"
                                        type="text"
                                        fullWidth
                                        required
                                        style={{ marginBottom: 10 }}
                                        onChange={(e) =>
                                            setUserDetail({
                                                ...userDetail,
                                                address:
                                                    e.target.value,
                                            })
                                        } />
                                    <Stack spacing={2} direction="row">
                                        <Button
                                            variant="contained"
                                            style={{ marginTop: "10px" }}
                                            onClick={handleUserDetailsUpdater}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                            onClick={props.handleCloseGasModal}
                                        >
                                            Cancel
                                        </Button>
                                    </Stack>
                                </Box>
                            </Paper>
                            {/* </div> */}
                        </Box>
                    </Modal>
                </div>
            }
            {
                props.formType === "bankDetails" &&
                <div>
                    <Modal
                        open={props.isModalOpen}
                        onClose={props.handleCloseGasModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography
                                id="modal-modal-title"
                                style={{ textAlign: "center" }}
                                className="mb-2"
                                variant="h6"
                                component="h2"
                            >
                                Fill Bank Details
                            </Typography>
                            <Paper elevation={3}>
                                <Box
                                    component="form"
                                    noValidate
                                    autoComplete="off"
                                    padding={2}
                                >
                                    <TextField
                                        id="filled-basic"
                                        label="Bank Name"
                                        variant="filled"
                                        type="text"
                                        style={{ marginBottom: 10 }}
                                        fullWidth
                                        required
                                        onChange={(e) =>
                                            setUserBankDetails({
                                                ...bankDetails,
                                                bankName:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Enter Account Number"
                                        variant="filled"
                                        type="text"
                                        fullWidth
                                        style={{ marginBottom: 10 }}
                                        required
                                        onChange={(e) =>
                                            setUserBankDetails({
                                                ...bankDetails,
                                                accountNo:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Re-Enter Account Number"
                                        variant="filled"
                                        type="text"
                                        fullWidth
                                        style={{ marginBottom: 10 }}
                                        required
                                        onChange={(e) =>
                                            setUserBankDetails({
                                                ...bankDetails,
                                                confirmAccountNo:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="IFSC Number"
                                        variant="filled"
                                        type="text"
                                        fullWidth
                                        style={{ marginBottom: 10 }}
                                        required
                                        onChange={(e) =>
                                            setUserBankDetails({
                                                ...bankDetails,
                                                ifscNo:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="PAN Number"
                                        variant="filled"
                                        type="text"
                                        fullWidth
                                        style={{ marginBottom: 10 }}
                                        required
                                        onChange={(e) =>
                                            setUserBankDetails({
                                                ...bankDetails,
                                                pan:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Address"
                                        variant="filled"
                                        type="text"
                                        fullWidth
                                        style={{ marginBottom: 10 }}
                                        required
                                        onChange={(e) =>
                                            setUserBankDetails({
                                                ...bankDetails,
                                                address:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                    <Stack spacing={2} direction="row">
                                        <Button
                                            variant="contained"
                                            style={{ marginTop: "10px" }}
                                            onClick={handleUserBankDetailsUpdater}
                                        >
                                            Add
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                            onClick={props.handleCloseGasModal}
                                        >
                                                Cancel
                                        </Button>
                                    </Stack>
                                </Box>
                            </Paper>
                            {/* </div> */}
                        </Box>
                    </Modal>
                </div>
            }

        </>
    );
}