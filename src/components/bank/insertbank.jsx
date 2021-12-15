import React from 'react';
import axios from "axios";

class InsertBank extends React.Component {
    state = {
        bank: {
            bankId: " ",
            bankName: "",
            address: "",
        },
        //errors: {},
        //errMsg: "",
    };
    // define schema to validate input field values
    /*schema = {
    
bankId: Joi.int().min(3).max(20).required(),
bankName: Joi.string().min(3).max(20).required(),
address: Joi.string().min(1).max(50).required(),
    
  };*/
    // Step 3: Validate user input with schema
    /*validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.bank, this.schema, {
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
  };*/
    handleChange = (event) => {
        //logic to update state object
        // console.log(student);
        // console.log(event.target.name); // name of field - fullName
        // console.log(event.target.value); // value entered in the field -a
        // student[fullName] = a;
        // student.fullName = a;

        // copy state student object to local variable student
        const bank = { ...this.state.bank };

        // update local student object with values entered by user
        bank[event.target.name] = event.target.value;

        // update state object using setState method
        this.setState({ bank: bank });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        // Send post request to rest api
        // this.setState({ errors: this.validate() });
        // console.log(this.state.errors);
        // if (this.state.errors) return;
        axios
            .post("http://localhost:8080/bank/insertBank", this.state.bank)
            .then((res) => {
                console.log(res.data);
                alert(
                    "Added Bank " + this.state.bank.bankId + " successfully!"
                );
                this.props.history.push("/bank");
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data.message);
                this.setState({ errMsg: err.response.data.message });
            });
    };

    render() {
        // Object Destructuring
        const { bankId, bankName, address } = this.state.bank;
        const { errors, errMsg } = this.state;
        return (
            <div className="w-50 mx-auto ">
                <h3 className="fw-bolder">Insert Bank</h3>
                {errMsg && (
                    <div className="alert alert-danger" role="alert">
                        {errMsg}
                    </div>
                )}
                <form
                    onSubmit={this.handleSubmit}
                    className="shadow p-3 mb-5 bg-body rounded mt-3"
                >
                    <div className="mb-3">
                        <label htmlFor="bankId" className="form-label">
                            Bank Id
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="bankId"
                            aria-describedby="emailHelp"
                            value={bankId}
                            name="bankId"
                            onChange={this.handleChange}
                        />
                        {errors && <small>{errors.bankId}</small>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="bankName" className="form-label">
                            BankName
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="bankName"
                            aria-describedby="emailHelp"
                            value={bankName}
                            name="bankName"
                            onChange={this.handleChange}
                        />
                        {errors && <small>{errors.bankName}</small>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            aria-describedby="emailHelp"
                            value={address}
                            name="address"
                            onChange={this.handleChange}
                        />
                        {errors && <small>{errors.address}</small>}
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

export default InsertBank;