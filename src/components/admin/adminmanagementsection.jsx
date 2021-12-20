import React from 'react'
import { Box, Grid, Stack, Paper } from '@mui/material'

//import AdminProfileDetails from './adminprofiledetails'
import AdminProfileDetailsOne from './adminprofiledetails1'
import AdminProfile from './adminmanagementfunctions'
//import GasStockDetails from './gasstockdetails'

//import CustomerBankDetails from './customerbankdetails'

function AdminManagement() {
    // const [open, setOpen] = React.useState(false);
    // const handleGasBookModalOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
        <div className="landing">
            <div className="wrapper">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid
                            item
                            xs={4}
                            md={3}
                            style={{ border: '2px solid black', height: '93vh' }}
                        >
                            <Stack spacing={5} direction="column" style={{ marginTop: '20px' }}>
                                <AdminProfileDetailsOne />
                                {/* <CustomerBankDetails /> */}
                            </Stack>
                        </Grid>

                        <Grid item xs={8} md={9} style={{ border: '2px solid black' }}>
                            <AdminProfile />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default AdminManagement