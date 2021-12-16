import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Box, MenuItem, Paper, Button } from "@mui/material";
import axios from "axios";
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = () => {
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
        role: "",
    });
    const handleLogin = () => {
        console.log(loginData, "===========");

        try {
            axios
                .post(`http://localhost:8080/customer/login`, {
                    username: loginData.username,
                    password: loginData.password,
                    role: loginData.role,
                })
                .then((res) => {
                    if (res.status === 200) {
                        history.push("/customer/profile");
                        localStorage.setItem("isLogin", res.data.loggedIn);
                    } else {
                        alert("Something Went Wrong");
                        console.log(res, "|||||||||||||||");
                    }
                });
        } catch (error) {
            // alert(error.);
            console.log(error, "============");
        }
        console.log();
    };
    // const [values, setValues] = React.useState({
    //     amount: '',
    //     password: '',
    //     weight: '',
    //     weightRange: '',
    //     showPassword: false,
    // });

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    return (
        <section className="landing">
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div className="card mt-5">
                                <div className="card-header bg-warning text-black text-center">
                                    <h4 className="fw-bolder">Login Form</h4>
                                    {/* <div
                                            style={{
                                                width: "50%",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                marginTop: "20px",
                                            }}
                                        >
                                            <Typography variant="h4">Login Form</Typography> */}
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
                                                type="password"
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
                                                // endAdornment={
                                                //     <InputAdornment position="end">
                                                //         <IconButton
                                                //             aria-label="toggle password visibility"
                                                //             onClick={handleClickShowPassword}
                                                //             onMouseDown={handleMouseDownPassword}
                                                //         >
                                                //             {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                //         </IconButton>
                                                //     </InputAdornment>
                                                // }
                                            />
                                            {/* <FormControl sx={{ m: 1}} variant="standard" >
                                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                <Input
                                                    fullWidth
                                                    id="standard-adornment-password"
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    value={values.password}
                                                    onChange={handleChange('password')}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl> */}

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
