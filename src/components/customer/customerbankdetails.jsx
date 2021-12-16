import React from 'react';
import {
    CardContent,
    Card,
    Typography,
} from "@mui/material";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import FormModal from './formmodal';

function CustomerBankDetails() {
    const [open, setOpen] = React.useState(false);
    const handleGasBookModalOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        }} /></span>

                        <Typography variant="h6" component="div">
                            Bank Details
                        </Typography>
                        <Typography variant="subtitle1">
                            Username : subhamshaw
                        </Typography>
                        <Typography variant="subtitle1">
                            Email : subham@gmail.com
                        </Typography>
                        <Typography variant="subtitle1">
                            Address : Baripada
                        </Typography>
                        <Typography variant="subtitle1">
                            Mobile Number : 7008342858
                        </Typography>
                        <Typography variant="subtitle1">
                            PAN Number : IORPS5530A
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
