import React from 'react';
import {
    CardContent,
    Card,
    Typography,
} from "@mui/material";
import { useSelector } from 'react-redux'
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import FormModal from './formmodal';

function CustomerDetails() {
    const [open, setOpen] = React.useState(false);
    const handleGasBookModalOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { userDetails: { username, email, address, mobileNumber } } = useSelector((state) => state.userData)
    return (
        <>
            <Card sx={{ maxWidth: 275 }} style={{ margin: "8px" }}>
                <CardContent>
                    <div>
                        <span onClick={handleGasBookModalOpen}><ModeEditTwoToneIcon style={{
                            position: "absolute",
                            left: "250px",
                            color: "orange",
                            cursor: "pointer"
                        }}
                        /></span>

                        <Typography variant="h6" component="div">
                            Personal Details
                        </Typography>
                        <Typography variant="subtitle1">
                            Username : {username || ''}
                        </Typography>
                        <Typography variant="subtitle1">
                            Email : {email || ''}
                        </Typography>
                        <Typography variant="subtitle1">
                            Address : {address || ''}
                        </Typography>
                        <Typography variant="subtitle1">
                            Mobile Number : {mobileNumber || ''}
                        </Typography>
                    </div>
                </CardContent>

            </Card>
            <FormModal
                isModalOpen={open}
                handleCloseGasModal={handleClose}

                formType="userDetails" />
        </>
    );
}

export default CustomerDetails;
