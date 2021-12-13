import React from "react";
import axios from "axios";

class UpdateCustomer extends React.Component {
    state = {
        customer: {
            username: "",
            mobileNumber: "",
            email: "",
            accountNo: "",
            pan: "",
        },
        errors: {},
        errorMsg: "",
    };

    componentDidMount() {
        const dataUrl = `http://localhost:8080/customer/getSingleCustomer/${this.props.match.params.id}`;
        axios.get(dataUrl).then((response) => {
            console.log(response.data);
            this.setState({
                ...this.state.customer,
                customer : response.data
            })
        }).catch((error) => {
            console.log(error);
            this.setState({
                ...this.state,
                error : error.response.data.message
            });
        });
    }

    updateInput = (event) => {
        this.setState({
            customer: {
                ...this.state.customer,
                [event.target.name]: event.target.value,
            },
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handle Submit");

        // //validate before sending request
        // this.setState({
        //     errors: this.validate()
        // });
        // console.log(this.state.errors);

        // if (this.state.errors)
        //     return;

        // sending request
        const dataUrl = `http://localhost:8080/customer/updateCustomer/${this.props.match.params.id}`;
        axios
            .put(dataUrl, this.state.customer)
            .then((response) => {
                console.log(response.data);
                alert(
                    "Update Customer details " +
                        this.state.customer.username +
                        " successfully !!!"
                );
                this.props.history.push("/customer");
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    errorMsg: error.response.data.message,
                });
            });
    };

    render() {
        const { customer } = this.state;
        const { errors, errorMsg } = this.state;
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mx-auto">
                                <div className="card mt-3">
                                    <div className="card-header bg-warning text-black text-center">
                                        <h4 className="fw-bolder">
                                            Update Customer
                                        </h4>
                                    </div>
                                    {errorMsg && (
                                        <div
                                            className="alert alert-danger"
                                            role="alert"
                                        >
                                            {errorMsg}
                                        </div>
                                    )}
                                    <form
                                        className="shadow p-3 mt-1 bg-warning rounded text-center"
                                        onSubmit={this.handleSubmit}
                                    >
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
                                                value={customer.username}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.username}</small>
                                            )}
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
                                                value={customer.mobileNumber}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.mobileNumber}
                                                </small>
                                            )}
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
                                                value={customer.email}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.email}</small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="accountNo"
                                                className="form-label fw-bold text-black"
                                            >
                                                Account Number
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="Account Number"
                                                id="accountNo"
                                                name="accountNo"
                                                value={customer.accountNo}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.accountNo}
                                                </small>
                                            )}
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
                                                value={customer.pan}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.pan}</small>
                                            )}
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

export default UpdateCustomer;
