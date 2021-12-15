import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Bank extends React.Component {
    state = {
        bank: [],
    };

    // class component life cycle methods
    componentDidMount(bankId) {
        console.log("componentDidMount");
        axios
            .get(`http://localhost:8080/bank/getAllBank`)
            .then((res) => {
                console.log(res);
                this.setState({ bank: res.data });
            })
            .catch((err) => console.log(err));
    }

    handleDelete = (bankId) => {
        //axios.delete("http://localhost:8082/students/" + rollNo);
        axios
            .delete(`http://localhost:8080/bank/deleteBank/${bankId}`)
            .then((res) => {
                console.log(res);
                // Update front end parallely
                const bank = this.state.bank.filter((d) => d.bankId !== bankId);
                this.setState({ bank: bank });
                alert(res.data.bankId + " deleted succussfully!");
            })
            .catch((err) => console.log(err));
    };

    render() {
        console.log(this.state.bank);
        return (
            <div className="w-75 mx-auto shadow p-3 mb-5 bg-body rounded">
                <Link to="/bank/insertBank" className="btn btn-info float-end">
                    Insert
                </Link>

                <table className="table w-75 mx-auto shadow-sm p-3 mb-5 bg-body rounded ">
                    <thead>
                        <tr className="shadow-sm p-3 mb-5 bg-body rounded">
                            . <th>bankId</th>
                            <th>bankName</th>
                            <th>address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.bank.map((d) => (
                            <tr key={d.bankId}>
                                <td>{d.bankId}</td>
                                <td>{d.bankName}</td>
                                <td>{d.address}</td>
                                <td>
                                    <Link
                                        to={`/bank/updateBank/${d.bankId}`}
                                        className="btn btn-primary"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            this.handleDelete(d.bankId)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Bank;
