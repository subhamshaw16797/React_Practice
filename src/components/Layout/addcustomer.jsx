import React from 'react';

class AddCustomer extends React.Component {
    state = {
        customer: {
            username: "",
            password: "",
            address: "",
            mobileNumber: "",
            email: "",
            accountNo: "",
            ifscNo: "",
            pan: "",
            bank: {
                bankName: "",
                address: "",
            },
            cylinder: {
                type: "",
                weight: "",
                strapColor: "",
                price: "",
                surrenderCylinder: {
                    surrenderDate:""
                },
            },
            gasBooking: {
                localDate: "",
                status: "",
                bill:""
            }
        },
        errorMsg:""
    };

    

    render() {
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mx-auto">
                                <div className="card mt-3">
                                    <div className="card-header bg-warning text-black text-center">
                                        <h4 className="fw-bolder">
                                            Add Customer
                                        </h4>
                                    </div>
                                    <form className="shadow p-3 mt-1 bg-warning rounded text-center">
                                        <div className="mb-2">
                                            <label
                                                htmlFor="username"
                                                className="form-label fw-bold text-black"
                                            >
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="Username"
                                                id="username"
                                                name="username"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="mobileNum"
                                                className="form-label fw-bold text-black"
                                            >
                                                Mobile Number
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                // placeholder="Mobile Number"
                                                id="mobileNum"
                                                name="mobileNumber"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="email"
                                                className="form-label fw-bold text-black"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                // placeholder="Email"
                                                id="email"
                                                name="email"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="accountNum"
                                                className="form-label fw-bold text-black"
                                            >
                                                Account Number
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="Account Number"
                                                id="accountNum"
                                                name="accountNumber"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="pan"
                                                className="form-label fw-bold text-black"
                                            >
                                                PAN
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="PAN"
                                                id="pan"
                                                name="pan"
                                            />
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-md text-black fw-bold"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AddCustomer;