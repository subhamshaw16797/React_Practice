import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import {
    TextField,
    Box,
    MenuItem,
    Paper,
    Button,
    // Typography,
} from "@mui/material";

const Register = () => {
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

    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
        address: "",
        role: "",
    });

    const handleRegister = () => {
        if (!registerData.username.length) {
            return alert('username cannnot be blank')
        }
        if (!registerData.email.length) {
            return alert('username cannnot be blank')
        }
        if (!registerData.password.length) {
            return alert('username cannnot be blank')
        }
        if (!registerData.address.length) {
            return alert('username cannnot be blank')
        }
        if (!registerData.role.length) {
            return alert('username cannnot be blank')
        }
        axios
            .post(`http://localhost:8080/customer/addCustomer`, {
                username: registerData.username,
                email: registerData.email,
                mobileNumber: registerData.mobileNumber,
                password: registerData.password,
                confirmPassword: registerData.confirmPassword,
                address: registerData.address,
                role: registerData.role,
            })
            .then((res) => {
                console.log(res);
            });
    };

    return (
        <section className="landing">
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div className="card mt-3">
                                <div className="card-header bg-warning text-black text-center">
                                    <h4 className="fw-bolder">
                                        Registration Form
                                    </h4>

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
                                                    setRegisterData({
                                                        ...registerData,
                                                        username:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                            <TextField
                                                id="filled-basic"
                                                label="Email"
                                                variant="filled"
                                                type="email"
                                                fullWidth
                                                style={{ marginBottom: 10 }}
                                                required
                                                onChange={(e) =>
                                                    setRegisterData({
                                                        ...registerData,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
                                            <TextField
                                                id="filled-basic"
                                                label="Mobile No."
                                                variant="filled"
                                                type="tel"
                                                fullWidth
                                                style={{ marginBottom: 10 }}
                                                required
                                                onChange={(e) =>
                                                    setRegisterData({
                                                        ...registerData,
                                                        mobileNumber:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <TextField
                                                id="filled-basic"
                                                label="Password"
                                                variant="filled"
                                                type="password"
                                                fullWidth
                                                style={{ marginBottom: 10 }}
                                                required
                                                onChange={(e) =>
                                                    setRegisterData({
                                                        ...registerData,
                                                        password:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                            <TextField
                                                id="filled-basic"
                                                // label="Confirm Password"
                                                variant="filled"
                                                type="password"
                                                fullWidth
                                                style={{ marginBottom: 10 }}
                                                required
                                                onChange={(e) =>
                                                    setRegisterData({
                                                        ...registerData,
                                                        confirmPassword:
                                                            e.target.value,
                                                    })
                                                }
                                                label={registerData?.password !== registerData?.confirmPassword ? "Error" : "Confirm Password"}
                                            />
                                            {/* {registerData?.password?.length && <span>{registerData?.password === registerData?.confirmPassword ? "Matched" : "not matched"}</span>} */}
                                            <TextField
                                                id="filled-basic"
                                                label="Address(Optional)"
                                                variant="filled"
                                                type="text"
                                                fullWidth
                                                style={{ marginBottom: 10 }}
                                                onChange={(e) =>
                                                    setRegisterData({
                                                        ...registerData,
                                                        address: e.target.value,
                                                    })
                                                }
                                            />
                                            <TextField
                                                id="outlined-select-currency"
                                                select
                                                variant="filled"
                                                fullWidth
                                                label="Select Role"
                                                required
                                                onChange={(e) =>
                                                    setRegisterData({
                                                        ...registerData,
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
                                                onClick={handleRegister}
                                            >
                                                Register
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

export default Register;
