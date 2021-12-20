import React, { useEffect, useState } from 'react'
import {
    Button,
    CardContent,
    Card,
    CardActions,
    Typography
} from "@mui/material";
import FormModal from './formmodal';
import axios from 'axios';

function GasStockDetails() {
    const [open, setOpen] = React.useState(false);
    const handleGasBookModalOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [cylinderDetails, setCylinderDetails] = useState([])

    useEffect(() => {
        const dataUrl = `http://localhost:8080/cylinder/viewCylindersByType/LPG`;
        axios.get(dataUrl).then((res) => {
            setCylinderDetails(res.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const availableGas = cylinderDetails?.filter((arr) => arr.booked === false)
    const CNGgasStock = cylinderDetails?.filter((gas) => {
        return gas.type === "CNG"
    })

    return (
        <Card sx={{ minWidth: 275 }} style={{ marginTop: "20px", marginRight: "10px" }}>
            <CardContent>
                <Typography variant="h5" style={{ textAlign: "left", color: "#808080" }}>
                    LPG  Gas Stocks: {availableGas?.length}
                </Typography>
                {CNGgasStock.length > 0 &&
                    <Typography variant="h5" style={{ textAlign: "left", color: "#808080" }}>
                        CNG  Gas Stocks: {CNGgasStock?.length}
                    </Typography>
                }
            </CardContent>
            <CardActions>
                <Button
                    onClick={handleGasBookModalOpen}
                    size="small"
                    color='secondary'
                >
                    Book Your Gas
                </Button>
            </CardActions>
            <FormModal
                isModalOpen={open}
                handleClose={handleClose}
                handleCloseGasModal={handleClose}
                formType="gasBooking"
                cylinderDetails={cylinderDetails}
            />
        </Card>
    )
}

export default GasStockDetails
