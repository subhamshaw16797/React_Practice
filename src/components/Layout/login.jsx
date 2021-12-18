import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { TextField, Box, MenuItem, Paper, Button, IconButton } from "@mui/material";
import axios from "axios";
import { AlertNotificationContext } from '../../alert-context/alert-state';
import { getUserDetails } from '../../redux/actions/userDetailsAction'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Login = () => {

    const { setAlert } = useContext(AlertNotificationContext);
    const dispatch = useDispatch()
    const history = useHistory();
    const roles = [
        {
            value: "Admin",
            label: "Admin",
        },
        {
            value: "Customer",
            label: "Customer",
        },
    ];

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
        role: ""
    });
    const [passwordFlag, setPasswordFlag] = useState(false)
    const handleLogin = () => {
        try {
            axios
                .post(`http://localhost:8080/customer/login`, {
                    username: loginData.username,
                    password: loginData.password,
                    role: loginData.role,
                })
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(getUserDetails(res.data))
                        setAlert('success', 'Successfully Logged In !');
                        history.push("/customer/profile");
                        localStorage.setItem("isLogin", res.data.loggedIn);
                    } else {
                        alert("Something Went Wrong");
                    }
                });
        } catch (error) {
            // alert(error.);
        }
    };
    return (
        <section className="landing">
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div className="card mt-5">
                                <div className="card-header bg-warning text-black text-center">
                                    <h4 className="fw-bolder">Login Form</h4>
                                    <Paper elevation={3}>
                                        <Box
                                            component="form"
                                            noValidate
                                            autoComplete="off"
                                            padding={2}
                                        >
                                            <TextField
                                                id="filled-basic"
                                                label="Username"
                                                variant="filled"
                                                type="text"
                                                style={{ marginBottom: 10 }}
                                                fullWidth
                                                required
                                                onChange={(e) =>
                                                    setLoginData({
                                                        ...loginData,
                                                        username:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                            <TextField
                                                id="filled-basic"
                                                label="Password"
                                                variant="filled"
                                                type={passwordFlag ? "password" : "text"}
                                                fullWidth
                                                style={{ marginBottom: 10 }}
                                                required
                                                onChange={(e) =>
                                                    setLoginData({
                                                        ...loginData,
                                                        password:
                                                            e.target.value,
                                                    })
                                                }
                                                InputProps={{
                                                    maxLength: 20,
                                                    endAdornment: (
                                                        <IconButton
                                                            style={{ padding: '0 0 0 2%' }}
                                                            onClick={() => setPasswordFlag((prev) => !prev)}
                                                        >
                                                            {passwordFlag ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    ),
                                                }}
                                            />
                                            <TextField
                                                id="outlined-select-currency"
                                                select
                                                variant="filled"
                                                fullWidth
                                                label="Select Role"
                                                value={loginData.role}
                                                onChange={(e) =>
                                                    setLoginData({
                                                        ...loginData,
                                                        role: e.target.value,
                                                    })
                                                }
                                            >
                                                {roles.map((option) => (
                                                    <MenuItem
                                                        key={option.value}
                                                        value={option.value}
                                                    >
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                style={{ marginTop: "10px" }}
                                                onClick={handleLogin}
                                            >
                                                Login
                                            </Button>
                                        </Box>
                                    </Paper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
