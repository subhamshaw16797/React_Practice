import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography, Modal, Paper, TextField, Stack } from "@mui/material";
import { AlertNotificationContext } from '../../alert-context/alert-state';
import { updateUserDetail } from '../../redux/thunk/userDetailsThunk';
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
    const dispatch = useDispatch()
    const { userDataSuccessfullyUpdated } = useSelector((state) => state.userData)
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        mobileNo: '',
        address: ''
    })

    const [bankDetails, setUserBankDetails] = useState({
        bankName: '',
        accountNo: '',
        confirmAccountNo: '',
        ifscNo: '',
        pan: '',
        address:''
    })

    const [gasBookingDetails, setUserGasBookingDetails] = useState({
        username: "",
        email: "",
        mobileNo: "",
        address: "",
        accountNo: ""
    })

    const handleUserDetailsUpdater = () => {
        dispatch(updateUserDetail(
            {
                "username": userDetails.username,
                "address": userDetails.address,
                "mobileNumber": userDetails.mobileNo,
                "email": userDetails.email,
            }
        ))
    }
    useEffect(() => {
        if (userDataSuccessfullyUpdated) {
            setAlert('success', 'Successfully Updated!')
        }
    }, [userDataSuccessfullyUpdated]);

    const handleUserBankDetails = () => {
        console.log(bankDetails);
        const dataUrl = `http://localhost:8080/bank/profile/insertBank/2`;
        axios.post(dataUrl,
            {
                bankName: bankDetails.bankName,
                accountNo: bankDetails.accountNo,
                confirmAccountNo: bankDetails.confirmAccountNo,
                ifscNo: bankDetails.ifscNo,
                pan: bankDetails.pan,
                address: bankDetails.address,
        }).then((res) => {
            console.log(res);
        })

    }

    const handleUserGasBookingDetails = () => {
        console.log(gasBookingDetails);
        const dataUrl = `http://localhost:8080/customer/profile/addCustomerWithCylinder/2/8`;
        axios.put(dataUrl).then((res) => {
            console.log(res);
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
                                            Cancle
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
                                            setUserDetails({
                                                ...userDetails,
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
                                            setUserDetails({
                                                ...userDetails,
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
                                            setUserDetails({
                                                ...userDetails,
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
                                            setUserDetails({
                                                ...userDetails,
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
                                            Cancle
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
                                            onClick={handleUserBankDetails}
                                        >
                                            Add
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                            onClick={props.handleCloseGasModal}
                                        >
                                            Cancle
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