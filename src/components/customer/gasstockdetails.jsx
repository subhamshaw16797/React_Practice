import React, { useEffect, useState } from 'react'
import {
    Button,
    CardContent,
    Card,
    CardActions,
    Typography,
    // Paper
} from "@mui/material";
import FormModal from './formmodal';
import axios from 'axios';

function GasStockDetails() {
    const [open, setOpen] = React.useState(false);
    const handleGasBookModalOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const StyledTableCell = styled(TableCell)(({ theme }) => ({
    //     [`&.${tableCellClasses.head}`]: {
    //         backgroundColor: theme.palette.common.black,
    //         color: theme.palette.common.white,
    //     },
    //     [`&.${tableCellClasses.body}`]: {
    //         fontSize: 14,
    //     },
    // }));

    // const StyledTableRow = styled(TableRow)(({ theme }) => ({
    //     '&:nth-of-type(odd)': {
    //         backgroundColor: theme.palette.action.hover,
    //     },
    //     // hide last border
    //     '&:last-child td, &:last-child th': {
    //         border: 0,
    //     },
    // }));

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

        // <TableContainer component={Paper} style={{ marginTop: "27px", marginRight: "20px" }}>
        //     <Table sx={{ minWidth: 700 }} aria-label="customized table">
        //         <TableHead>
        //             <TableRow>
        //                 <StyledTableCell align="right">Cylinder ID</StyledTableCell>
        //                 <StyledTableCell align="right">Gas Type</StyledTableCell>
        //                 <StyledTableCell align="right">Weight</StyledTableCell>
        //                 <StyledTableCell align="right">Color</StyledTableCell>
        //                 <StyledTableCell align="right">Price</StyledTableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {cylinderDetails.map((c) => (
        //                 <StyledTableRow key={c.name}>
        //                     <StyledTableCell align="right">{c.cylinderId}</StyledTableCell>
        //                     <StyledTableCell align="right">{c.type}</StyledTableCell>
        //                     <StyledTableCell align="right">{c.weight}</StyledTableCell>
        //                     <StyledTableCell align="right">{c.strapColor}</StyledTableCell>
        //                     <StyledTableCell align="right">{c.price}</StyledTableCell>
        //                 </StyledTableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </TableContainer>
    )
}

export default GasStockDetails
