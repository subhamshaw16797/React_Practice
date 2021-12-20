import React from 'react'
import axios from 'axios'
import Joi, { errors } from 'joi-browser'

class BetweenBookings extends React.Component {
    state = {
        bookings: [],
        dates: {
            fromDate: '',
            toDate: '',
        },
        custId: '',
        errors: {},
        errMsg: '',
    }

    schema = {
        custId: Joi.number().integer().required(),
        fromDate: Joi.date().raw().required(),
        toDate: Joi.date().raw().required(),
    }
    validate = () => {
        const errors = {}
        const result = Joi.validate(this.state.dates, this.schema, {
            abortEarly: false,
        })
        console.log(result)
        if (result.error != null)
            for (let item of result.error.details) {
                errors[item.path[0]] = item.message
            }
        return Object.keys(errors).length === 0 ? null : errors
    }

    handleChange = (event) => {
        const dt = { ...this.state.dates }
        dt[event.target.name] = event.target.value
        // update state object using setState method
        this.setState({ dates: dt })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ errors: this.validate() })
        axios
            .get(
                `http://localhost:8080/admin/customer/getBookings/betweenDays/${this.state.dates.custId}/${this.state.dates.fromDate}/${this.state.dates.toDate}`,
                this.state.dates.toDate,
            )
            .then((res) => {
                console.log(res)
                this.setState({ bookings: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        //const { fromDate, toDate } = this.state.dates
        const { errors } = this.state

        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
                >
                    <div className="mb-3">
                        <h3 className="bg-secondary text-white text-center">
                            Please Provide From And To Dates
                        </h3>
                        <label htmlFor="fullName" className="form-label text-center">
                            <h2>CUSTOMER ID</h2>
                        </label>
                        <input
                            placeholder="Enter CustomerId"
                            type="number"
                            className="form-control "
                            id="customerId"
                            name="custId"
                            aria-describedby="emailHelp"
                            onChange={this.handleChange}
                        />
                        <div className="text-danger">
                            {errors && <small>{errors.custId}</small>}
                        </div>
                        <div>
                            <label htmlFor="fullName" className="form-label text-center">
                                <h2>FROM DATE</h2>
                            </label>
                            <input
                                // placeholder="Enter Date in yyyy-MM-dd"
                                type="date"
                                className="form-control"
                                id="customerId"
                                name="fromDate"
                                aria-describedby="emailHelp"
                                onChange={this.handleChange}
                            />
                            <div className="text-danger">
                                {errors && <small>{errors.fromDate}</small>}
                            </div>
                        </div>
                    </div>
                    <label htmlFor="fullName" className="form-label text-center">
                        <h2>To DATE</h2>
                    </label>
                    <input
                        // placeholder="Enter Date in yyyy-MM-dd"
                        type="date"
                        className="form-control"
                        id="customerId"
                        name="toDate"
                        aria-describedby="emailHelp"
                        onChange={this.handleChange}
                    />
                    <div className="text-danger">
                        {errors && <small>{errors.toDate}</small>}
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
                {this.state.bookings.length > 0 && (
                    <table className="table w-75 mx-auto ">
                        <thead>
                            <tr className="bg-dark text-white">
                                <th>Gas Booking_id</th>
                                <th>Bill</th>
                                <th>Local Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.bookings.map((data) => (
                                <tr className="bg-secondary text-info">
                                    <td>{data.gasBookingId}</td>
                                    <td>{data.bill}</td>
                                    <td>{data.localDate}</td>
                                    <td>{data.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        )
    }
}

export default BetweenBookings;