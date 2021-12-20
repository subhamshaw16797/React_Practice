import React, { Component } from "react";
import axios from "axios";
import Joi from "joi-browser";
class UpdateSurrenderCylinder extends React.Component {
    state = {
        surrendercylinder: {
          surrenderId:"",
          surrenderDate:" ",
        },
        errors: {},
        errMsg: "",
      };
      schema = {
        surrenderId:Joi.number().integer(),
        surrenderDate:Joi.date().raw(),
    
      };
    
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.surrendercylinder, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/surrendercylinder/getSingleCylinder/${this.props.match.params.surrenderId}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ surrendercylinder: res.data });
      })
      .catch((err) => console.log(err));
  }
 updateInput = (event) => {
        this.setState({
            surrendercylinder: {
                ...this.state.surrendercylinder,
                [event.target.name]: event.target.value,
            },
        });
        
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handle Submit");
    
    
    
        // sending request
        const dataUrl = "http://localhost:8080/surrendercylinder/insertSurrenderCylinder";
        axios
            .post(dataUrl, this.state.surrendercylinder)
            .then((response) => {
                console.log(response.data);
                alert(
                    "Added cylinder " +
                        this.state.surrendercylinder.surrenderDate+
                        " successfully !!!"
                );
                this.props.history.push("/surrendercylinder")
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    errorMsg: error.response.data.message,
                });
            });
    };
    
  
   render() {
        const { surrendercylinder } = this.state;
        const { errors, errorMsg } = this.state;
        console.log(this.state.surrendercylinder);
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mx-auto">
                                <div className="card mt-3">
                                    <div className="card-header bg-warning text-black text-center">
                                        <h4 className="fw-bolder">
                                            Add Cylinder Details
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
                                        method="post" required
                                    >
                                        <div className="mb-2">
                                            <label
                                                htmlFor="surrenderId"
                                                className="form-label fw-bold text-black"
                                            >
                                                SurrenderId
                                            </label>
                                            <input
                                                type="Integer"
                                                className="form-control"
                                                // placeholder="Username"
                                                id="surrenderId"
                                                name="surrenderId"
                                                value={surrendercylinder.surrenderId}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.surrenderId}</small>
                                            )}
                                        </div>
                                        <div className="mb-2"  onsubmit="return validateForm()" method="post" required>
                                            <label
                                                htmlFor="Date"
                                                className="form-label fw-bold text-black"
                                            >
                                                surrenderDate
                                            </label>
                                            <input
                                                type="Date"
                                                className="form-control"
                                                id="surrenderDate"
                                                name="surrenderDate"
                                                value={surrendercylinder.surrenderDate}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.surrenderDate}
                                                </small>
                                            )}
                                        </div>
                                                               <div class="col-12">
                                                    <button class="btn btn-primary" type="submit">Submit form</button>
                                                     </div>
                                        </form>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       );
                                            }}


export default UpdateSurrenderCylinder;