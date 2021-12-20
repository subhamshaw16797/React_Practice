import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Box,
    Button,
    Typography,
    Modal,
    Paper,
    TextField,
    Stack,
} from '@mui/material'
import { AlertNotificationContext } from '../../alert-context/alert-state';
import { updateAdminDetail } from '../../redux/thunk/adminDetailsThunk';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export default function FormModalAdmin(props) {
    const { setAlert } = useContext(AlertNotificationContext)
    const dispatch = useDispatch()
    const { adminDataSuccessfullyUpdated , adminDetailss} = useSelector(
        (state) => state.adminData
    )
    const [adminDetails, setAdminDetails] = useState({
        username: adminDetailss?.username || '',
        email: adminDetailss?.email || '',
        mobileNo: adminDetailss?.mobileNumber || '',
        address: adminDetailss?.address || '',
    })

    const handleAdminDetailsUpdater = () => {
        dispatch(
            updateAdminDetail({
                "id" : adminDetailss.id,
                "username": adminDetails.username,
                "address": adminDetails.address,
                "mobileNumber": adminDetails.mobileNo,
                "email": adminDetails.email,
            }),
        )
    }
    useEffect(() => {
        if (adminDataSuccessfullyUpdated) {
            setAlert('success', 'Successfully Updated!')
        }
    }, [adminDataSuccessfullyUpdated])

    return (
        <>
            {props.formType === 'adminDetails' && (
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
                                style={{ textAlign: 'center' }}
                                variant="h6"
                                component="h2"
                            >
                                Update Details
                            </Typography>
                            <Paper elevation={3}>
                                <Box component="form" noValidate autoComplete="off" padding={2}>
                                    <TextField
                                        id="filled-basic"
                                        label="User Name"
                                        variant="filled"
                                        type="text"
                                        style={{ marginBottom: 10 }}
                                        fullWidth
                                        required
                                        onChange={(e) =>
                                            setAdminDetails({
                                                ...adminDetails,
                                                username: e.target.value,
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
                                            setAdminDetails({
                                                ...adminDetails,
                                                email: e.target.value,
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
                                            setAdminDetails({
                                                ...adminDetails,
                                                mobileNo: e.target.value,
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
                                            setAdminDetails({
                                                ...adminDetails,
                                                address: e.target.value,
                                            })
                                        }
                                    />
                                    <Stack spacing={2} direction="row">
                                        <Button
                                            variant="contained"
                                            style={{ marginTop: '10px' }}
                                            onClick={handleAdminDetailsUpdater}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            style={{ marginTop: '10px' }}
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
            )}
        </>
    )
}