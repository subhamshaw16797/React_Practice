import React from 'react'
import {
    Button,
    CardContent,
    Card,
    CardActions,
    Typography,
} from "@mui/material";
import FormModal from './formmodal';

function GasStockDetails() {
    const [open, setOpen] = React.useState(false);
    const handleGasBookModalOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card sx={{ minWidth: 275 }} style={{ marginTop: "20px" }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Gas Stocks
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={handleGasBookModalOpen}
                    size="small"
                >
                    Book Now
                </Button>
            </CardActions>
            <FormModal
                isModalOpen={open}
                handleCloseGasModal={handleClose}
                formType="gasBooking"
            />
        </Card>
    )
}

export default GasStockDetails
