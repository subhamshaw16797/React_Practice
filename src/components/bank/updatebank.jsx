import React from "react";
import axios from "axios";

class UpdateBank extends React.Component {
    state = {
        bank: {
            bankId: "",
            bankName: "",
            address: "",
        },
    };
    componentDidMount() {
        axios
            .get(
                `http://localhost:8080/bank/getBankById/${this.props.match.params.bankId}`
            )
            .then((res) => {
                console.log(res.data);
                this.setState({ bank: res.data });
            })
            .catch((err) => console.log(err));
    }
    handleChange = (event) => {
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
        axios
            .put(
                `http://localhost:8080/bank/updateBank/${this.props.match.params.bankId}`,
                this.state.bank
            )
            .then((res) => {
                console.log(res.data);
                alert(
                    "Updated bank " + this.state.bank.bankId + " successfully!"
                );
                this.props.history.push("/bank");
            })
            .catch((err) => console.log(err));
    };
    render() {
        // Object Destructuring
        const { bankId, bankName, address } = this.state.bank;

        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
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
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bankName" className="form-label">
                            Bank Name
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

export default UpdateBank;
