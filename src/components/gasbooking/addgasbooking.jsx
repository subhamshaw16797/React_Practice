import React from "react";
import axios from "axios";
import Joi from "joi-browser";
class AddGasBooking extends React.Component {
  state = {
    gasbooking: {
      customerId: "",
      status: "Active",
      bill: 950,
    },
    errors: {},
    errMsg: "",
  };
  schema = {
    customerId:Joi.number().integer().required(),
    status:Joi.string().min(4).max(10),
    bill:Joi.number().required(),
  };

  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.gasbooking, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleChange = (event) => {
    // copy state student object to local variable student
    const gasbooking = { ...this.state.gasbooking };

    // update local student object with values entered by user
    gasbooking[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ gasbooking: gasbooking });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    // Send post request to rest api
    axios
      .post(
        "http://localhost:8080/gasbooking/insertGasBooking",
        this.state.gasbooking
      )
      .then((res) => {
        console.log(res.data);
        alert(
          "Added student " + this.state.gasbooking.customerId + " successfully!"
        );
        this.props.history.push("/gasbookings");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };
  render() {
    // Object Destructuring
    const { customerId, status, bill } = this.state.gasbooking;
    const { errors, errMsg } = this.state;
    return (
      <div>
        <h3>Add GasBooking Details</h3>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
            <label htmlFor="customerId" className="form-label">
              CustomerId
            </label>
            <input
              type="number"
              className="form-control"
              id="customerId"
              aria-describedby="emailHelp"
              value={customerId}
              name="customerId"
              onChange={this.handleChange}
              
            />
            <div className="text-danger"> {errors && <small>{errors.customerId}</small>}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Booking status
            </label>
            <input
              type="text"
              className="form-control"
              id="status"
              aria-describedby="emailHelp"
              value={status}
              name="status"
              onChange={this.handleChange}
              disabled
            />
             <div className="text-danger">{errors && <small>{errors.status}</small>}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="bill" className="form-label">
              Bill Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="bill"
              aria-describedby="emailHelp"
              value={bill}
              name="bill"
              onChange={this.handleChange}
              disabled
            />
            <div className="text-danger">{errors && <small>{errors.bill}</small>}</div>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddGasBooking;
