import * as React from "react";
import { Box, Button, Typography, Modal, Paper, TextField, Stack } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function GasBookModal(props) {

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={props.isModalOpen}
                onClose={props.handleCloseGasModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Booking form
                    </Typography>
                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </Typography> */}
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
                                // onChange={(e) =>
                                //     setRegisterData({
                                //         ...registerData,
                                //         username:
                                //             e.target.value,
                                //     })
                                // }
                            />
                            <TextField
                                id="filled-basic"
                                label="Email"
                                variant="filled"
                                type="email"
                                fullWidth
                                style={{ marginBottom: 10 }}
                                required
                                // onChange={(e) =>
                                //     setRegisterData({
                                //         ...registerData,
                                //         email: e.target.value,
                                //     })
                                // }
                            />
                            <TextField
                                id="filled-basic"
                                label="Mobile No."
                                variant="filled"
                                type="tel"
                                fullWidth
                                style={{ marginBottom: 10 }}
                                required
                                // onChange={(e) =>
                                //     setRegisterData({
                                //         ...registerData,
                                //         mobileNumber:
                                //             e.target.value,
                                //     })
                                // }
                            />
                            <TextField
                                id="filled-basic"
                                label="Address"
                                variant="filled"
                                type="text"
                                fullWidth
                                required
                                style={{ marginBottom: 10 }}
                                // onChange={(e) =>
                                //     setRegisterData({
                                //         ...registerData,
                                //         address: e.target.value,
                                //     })
                                // }
                            />
                            <Stack spacing={2} direction="row">
                                <Button
                                    variant="contained"
                                    style={{ marginTop: "10px" }}
                                    // onClick={handleRegister}
                                >
                                    Book
                                </Button>
                                <Button
                                    variant="outlined"
                                    style={{ marginTop: "10px" }}
                                    onClick={props.handleCloseGasModal}
                                >
                                    Cancle
                                </Button>
                            </Stack>
                        </Box>
                    </Paper>
                    {/* </div> */}
                </Box>
            </Modal>
        </div>
    );
}