import React, { useState } from 'react'
import axios from 'axios';
import {
    TextField,
    Box,
    MenuItem,
    Paper,
    Button,
    // Typography,
} from '@mui/material'

const AdminRegister = () => {
    const roles = [
        {
            value: 'Admin',
            label: 'Admin',
        },
        {
            value: 'Customer',
            label: 'Customer',
        },
    ]
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
        address: '',
        role: '',
    })

    // const [putErrors, setErrors] = useState({
    //   errors: {},
    // })

    // schema = {
    //   userName: Joi.string().min(3).max(20).required(),
    //   password: Joi.string().min(3).required(),
    //   address: Joi.string().min(3).max(20).required(),
    //   mobileNumber: Joi.number()
    //     .integer()
    //     .min(9999999990)
    //     .max(9999999999)
    //     .required(),
    //   email: Joi.string()
    //     .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    //     .required(),
    // }
    // // Step 3: Validate user input with schema
    // validate = () => {
    //   const errors = {}
    //   const result = Joi.validate(registerData, schema, {
    //     abortEarly: false,
    //   })
    //   console.log(result)
    //   if (result.error != null)
    //     for (let item of result.error.details) {
    //       errors[item.path[0]] = item.message
    //     }
    //   return Object.keys(errors).length === 0 ? null : errors
    // }

    const handleRegister = () => {
        //this.setState({ errors: this.validate() })
        console.log(registerData, '===========')
        if (!registerData.username.length) {
            return alert('username cannnot be blank')
        }
        if (!registerData.email.length) {
            return alert('email cannnot be blank')
        }
        if (!registerData.mobileNumber.length) {
            return alert('MobileNumber cannnot be blank')
        }
        if (!registerData.password.length) {
            return alert('password cannnot be blank')
        }
        if (!registerData.address.length) {
            return alert('address cannnot be blank')
        }
        if (!registerData.role.length) {
            return alert('role cannnot be blank')
        }

        // setErrors({
        //   ...putErrors,
        //   errors: validate(),
        // })

        axios
            .post('http://localhost:8080/admin/insert', {
                username: registerData.username,
                email: registerData.email,
                mobileNumber: registerData.mobileNumber,
                password: registerData.password,
                confirmPassword: registerData.confirmPassword,
                address: registerData.address,
                role: registerData.role,
            })
            .then((res) => {
                console.log(res)
            })
    }

    return (
        <section className="landing">
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div className="card mt-3">
                                <div className="card-header bg-warning text-black text-center">
                                    <h4 className="fw-bolder">Registration Form</h4>
                                    {/* <div
            style={{
                width: "50%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20px",
            }}
        >
            <Typography variant="h4">Register Form</Typography> */}
                                    <Paper elevation={3}>
                                        <Box
                                            component="form"
                                            noValidate
                                            autoComplete="off"
                                            padding={2}
                                        >
                                            <TextField
                                                id="filled-basic"
                                                label="UserName"
                                                variant="filled"
                                                type="text"
                                                style={{ marginBottom: 10 }}
                                                fullWidth
                                                required
                                                onChange={(e) =>
                                                    setRegisterData({
                                                        ...registerData,
                                                        userName: e.target.value,
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
                                                        mobileNumber: e.target.value,
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
                                                        password: e.target.value,
                                                    })
                                                }
                                            />
                                            <TextField
                                                id="filled-basic"
                                                label="Confirm Password"
                                                variant="filled"
                                                type="password"
                                                fullWidth
                                                style={{ marginBottom: 10 }}
                                                required
                                                onChange={(e) =>
                                                    setRegisterData({
                                                        ...registerData,
                                                        confirmPassword: e.target.value,
                                                    })
                                                }
                                            />
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
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                style={{ marginTop: '10px' }}
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
    )
}

export default AdminRegister