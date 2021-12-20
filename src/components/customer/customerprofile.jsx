import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
    Box,
    Grid,
    Stack,
} from "@mui/material";
import GasStockDetails from "./gasstockdetails";
import CustomerDetails from "./customerdetails";
import CustomerBankDetails from "./customerbankdetails";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetails } from '../../redux/actions/userDetailsAction'




function CustomerProfile() {
    // const [open, setOpen] = React.useState(false);
    // const handleGasBookModalOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const history = useHistory();
    const { userDetails: { id } } = useSelector((state) => state.userData)
    const dispatch = useDispatch()
    useEffect(() => {
        const isLogin = localStorage.getItem('isLogin')
        if (!isLogin) {
            history.push('/login')
        }
    }, [])
    useEffect(() => {
        //to get userdetails
        axios.get(`http://localhost:8080/customer/getSingleCustomer/${id}`)
            .then((res) => {
                console.log(res);
                dispatch(getUserDetails(res.data))
            });
    }, []);

    return (

        <div className="landing">
            <div className="wrapper">
                <Box sx={{ flexGrow: 1 }}>

                    <Grid container spacing={2}>
                        <Grid
                            item
                            xs={4}
                            md={3}
                            style={{ border: "2px solid orange", height: "92.5vh" }}
                        >
                            <Stack
                                spacing={5}
                                direction="column"
                                style={{ marginTop: "20px" }}
                            >
                                <CustomerDetails />
                                <CustomerBankDetails />

                            </Stack>
                        </Grid>
                        <Grid item xs={8} md={9} style={{ border: "2px solid orange" }}>
                            <GasStockDetails />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>

    );
}

export default CustomerProfile;
