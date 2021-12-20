import React, { Component } from 'react'
import { Paper, Button } from '@mui/material'
import { Link } from 'react-router-dom'
class AdminProfile extends React.Component {
    render() {
        return (
            <div className="w-50 mx-auto mt-5  ">
                <Paper elevation={3}>
                    <table>
                        <tr>
                            <td>
                                <div className="mb-4 mt-2">
                                    <Link to={'/customer'}>
                                        <button className="btn btn-warning" type="submit">
                                            <Button variant="contained">
                                                PERFORM CUSTOMER MANAGEMENT
                                            </Button>
                                        </button>
                                    </Link>
                                </div>
                            </td>
                            <td>
                                <div className="mb-4 mt-2 float-end">
                                    <Link to={'/gasbookings'}>
                                        <button className="btn btn-warning" type="submit">
                                            <Button variant="contained">
                                                PERFORM GAS BOOKING MANAGEMENT
                                            </Button>
                                        </button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="mb-4 ">
                                    <Link to={'/cylinders'}>
                                        <button className="btn btn-warning" type="submit">
                                            <Button variant="contained">
                                                PERFORM CYLINDER MANAGEMENT
                                            </Button>
                                        </button>
                                    </Link>
                                </div>
                            </td>
                            {/* <td>
                <div className="mb-4">
                  <button className="btn btn-warning" type="submit">
                    <Button variant="contained">CUSTOMER MANAGEMENT</Button>
                  </button>
                </div>
              </td> */}
                        </tr>
                        <tr>
                            <td>
                                <div className="mb-4">
                                    <Link to={'/custIdform'}>
                                        <button className="btn btn-warning" type="submit">
                                            <Button variant="contained">
                                                GET BOOKINGS ON CUSTOMER ID
                                            </Button>
                                        </button>
                                    </Link>
                                </div>
                            </td>
                            <td>
                                <div className="mb-4">
                                    <Link to={'/betweenbookings'}>
                                        <button className="btn btn-warning" type="submit">
                                            <Button variant="contained">
                                                GET BOOKINGS BETWEEN DATES
                                            </Button>
                                        </button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </table>
                </Paper>
            </div>
        )
    }
}

export default AdminProfile