import React from 'react';
import {
    CardContent,
    Card,
    Typography,
} from "@mui/material";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import FormModal from './formmodal';
import { useSelector } from 'react-redux';

function CustomerBankDetails() {
    const [open, setOpen] = React.useState(false);
    const handleGasBookModalOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { userDetails } = useSelector((state) => state.userData)
    return (
        <>
            <Card sx={{ maxWidth: 275 }} style={{ margin: "8px" }}>
                <CardContent>
                    <div>
                        {!(userDetails && userDetails.bank) && <span onClick={handleGasBookModalOpen}><ModeEditTwoToneIcon style={{
                            position: "absolute",
                            left: "250px",
                            color: "orange",
                            cursor: "pointer"
                        }} /></span>
                        }

                        <Typography variant="h6" component="div">
                            Bank Details
                        </Typography>
                        <Typography variant="subtitle1">
                            Bank Name : {userDetails?.bank?.bankName || ''}
                        </Typography>
                        <Typography variant="subtitle1">
                            Account Number : {userDetails?.bank?.accountNo || ''}
                        </Typography>
                        <Typography variant="subtitle1">
                            IFSC No : {userDetails?.bank?.ifscNo || ''}
                        </Typography>
                        <Typography variant="subtitle1">
                            PAN Number : {userDetails?.bank?.pan || ''}
                        </Typography>
                        <Typography variant="subtitle1">
                            Address : {userDetails?.bank?.address || ''}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
            <FormModal
                isModalOpen={open}
                handleCloseGasModal={handleClose}

                formType="bankDetails" />
        </>
    );
}

export default CustomerBankDetails;
