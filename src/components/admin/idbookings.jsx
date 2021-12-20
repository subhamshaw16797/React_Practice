import axios from 'axios'
import React from 'react'
import Joi, { errors } from 'joi-browser'
class IdBookings extends React.Component {
    state = {
        gasBooking: [],
        custId: '',
        errors: {},
        errMsg: '',
    }

    schema = {
        custId: Joi.number().integer().required(),
    }
    validate = () => {
        const errors = {}
        const result = Joi.validate(this.state, this.schema, {
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
        // update state object using setState method
        this.setState({ custId: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ errors: this.validate() })
        axios
            .get(
                `http://localhost:8080/admin/customer/getBookings/${this.state.custId}`,
            )
            .then((res) => {
                console.log(res)
                this.setState({ gasBooking: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { errors } = this.state
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
                >
                    <div className="mb-3">
                        <h3 className="bg-secondary text-white text-center">
                            Please Provide CustomerId
                        </h3>
                        <label htmlFor="fullName" className="form-label text-center">
                            <h2>CustomerId</h2>
                        </label>
                        <input
                            placeholder="Enter CustomerId"
                            type="number"
                            className="form-control"
                            id="customerId"
                            name="custId"
                            aria-describedby="emailHelp"
                            onChange={this.handleChange}
                        />
                        <div className="text-danger">
                            {errors && <small>{errors.custId}</small>}
                        </div>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
                {this.state.gasBooking.length > 0 && (
                    <table className="table w-75 mx-auto">
                        <thead>
                            <tr className="bg-dark text-white">
                                <th>Gas Booking_id</th>
                                <th>Bill</th>
                                <th>Local Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.gasBooking.map((data) => (
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

export default IdBookings;