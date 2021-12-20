import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Cylinder extends React.Component {

    constructor(props){
        super(props)
        this.state={
            cylinders : [],
            errorMsg : ""
        };
    }

    componentDidMount(){
        console.log("componentDidMount()");
        const dataUrl = `http://localhost:8080/cylinder/viewCylinders`;
        axios.get(dataUrl).then((response) => {
            this.setState({
                ...this.state,
                cylinders : response.data
            })
        })
        .catch((err) => console.log(err));
    }

    deleteCylinder = (cylinderId) => {
        const dataUrl = `http://localhost:8080/cylinder/deleteCylinder/${cylinderId}`;
        axios.delete(dataUrl).then((response) => {
            const cylinder = this.state.cylinders.filter((c) => c.cylinderId !==cylinderId);
            this.setState({
                ...this.state,
                cylinders : cylinder
            });
            alert(response.data.cylinderId + " delete successfully !!!");
        })
        .catch((err) => console.log(err));

    }

    render() { 
        let { cylinders } = this.state;
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Link
                                    to="/cylinder/add"
                                    className="btn btn-success mt-3 btn-md float-end mb-3"
                                >
                                    <i class="fas fa-user"/>
                                    Add Cylinder
                                </Link>
                                <table className="table table-condensed table-sm table-light table-hover table-striped text-center border-warning">
                                    <thead className="table table-warning">
                                        <tr>
                                            <th>cylinderId</th>
                                            <th>type</th>
                                            <th>weight</th>
                                            <th>strapColor</th>
                                            <th>price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.cylinders.map((s) => {
                                                return (
                                                    <tr>
                                                        <td>{s.cylinderId}</td>
                                                        <td>
                                                            {s.type}
                                                        </td>
                                                        <td>
                                                            {
                                                                s.weight
                                                            }
                                                        </td>
                                                        <td>
                                                            {s.strapColor}
                                                        </td>
                                                        <td>
                                                            {s.price}
                                                        </td>
                                                      
                                                        <td>
                                                           <Link to={`cylinder/updateCylinder/${s.cylinderId}`}
                                                           className="btn btn-primary"
                                                           >
                                                               Update
                                                           </Link>
                                                            <button
                                                                className="btn  btn-danger"            
                                                                onClick={() =>
                                                                    this.deleteCylinder(
                                                                        s.cylinderId
                                                                    )
                                                                }
                                                            >
                                                                <i class="fas fa-trash" />
                                                                &nbsp;&nbsp;
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Cylinder;
