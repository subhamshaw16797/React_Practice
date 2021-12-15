import React from "react";
import {
    Box,
    Grid,
    Stack,
    Button,
    CardContent,
    Card,
    CardActions,
    Typography,
} from "@mui/material";
import GasBookModal from "./gasbookingmodal";

function CustomerProfile() {
    const [open, setOpen] = React.useState(false);
    const handleGasBookModalOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={4}
                    md={3}
                    style={{ border: "2px solid black", height: "93vh" }}
                >
                    <Stack spacing={5} direction="column">
                        <Button variant="contained">
                            Update Profile Details
                        </Button>
                        <Button variant="contained">Update Bank Details</Button>
                    </Stack>
                    {/* <Stack spacing={2} direction="row"></Stack> */}
                </Grid>
                <Grid item xs={8} md={9} style={{ border: "2px solid black" }}>
                    <h1>Right</h1>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            {/* <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Word of the Day
                            </Typography> */}
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
                        <GasBookModal
                            isModalOpen={open}
                            handleCloseGasModal={handleClose}
                        />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CustomerProfile;