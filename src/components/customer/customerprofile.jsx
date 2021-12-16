import React from "react";
import {
    Box,
    Grid,
    Stack,
} from "@mui/material";
import GasStockDetails from "./gasstockdetails";
import CustomerDetails from "./customerdetails";
import CustomerBankDetails from "./customerbankdetails";

function CustomerProfile() {
    
    // const [open, setOpen] = React.useState(false);
    // const handleGasBookModalOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={4}
                    md={3}
                    style={{ border: "2px solid black", height: "93vh" }}
                >
                    <Stack
                        spacing={5}
                        direction="column"
                        style={{ marginTop: "20px" }}
                    >
                        <CustomerDetails />
                        <CustomerBankDetails/>
                        
                    </Stack>
                </Grid>
                <Grid item xs={8} md={9} style={{ border: "2px solid black" }}>
                    <GasStockDetails/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CustomerProfile;
