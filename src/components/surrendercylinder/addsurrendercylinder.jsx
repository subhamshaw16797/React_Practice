import React, { Component } from 'react';
import axios from "axios";
import Joi from "joi-browser";

class Addsurrendercylinder extends React.Component {
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
      handleChange = (event) => {
      // copy state student object to local variable student
      const surrendercylinder = { ...this.state.surrendercylinder };
  
      // update local student object with values entered by user
      surrendercylinder[event.target.name] = event.target.value;
  
      // update state object using setState method
      this.setState({ surrendercylinder: surrendercylinder });
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
            "http://localhost:8080/surrendercylinder/insertSurrenderCylinder",
          this.state.surrendercylinder
        )
        .then((res) => {
          console.log(res.data);
          alert(
            "Added cylinder " + this.state.surrendercylinder.surrenderDate + " successfully!"
          );
          this.props.history.push("/surrendercylinder");
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.data.message);
          this.setState({ errMsg: err.response.data.message });
        });
    };
    render() {
      // Object Destructuring
      const { surrenderId, surrenderDate } = this.state.surrendercylinder;
      const { errors, errMsg } = this.state;
      return (
        <div>
          <h3>Add surrendercylinder details</h3>
          {errMsg && (
            <div className="alert alert-danger" role="alert">
              {errMsg}
              </div>
              )}
          <form
            onSubmit={this.handleSubmit}
            className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
          >
            <div className="mb-3">
              <label htmlFor="surrenderId" className="form-label">
                surrenderId
              </label>
              <input
                type="number"
                className="form-control"
                id="surrenderId"
                aria-describedby="emailHelp"
                value={surrenderId}
                name="surrenderId"
                onChange={this.handleChange}
                
              />
               {errors && <small>{errors.surrenderId}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Add Date
              </label>
              <input
                type="Date"
                className="form-control"
                id="surrenderDate"
                aria-describedby="emailHelp"
                value={surrenderDate}
                name="surrenderDate"
                onChange={this.handleChange}
          
              />
              {errors && <small>{errors.status}</small>}
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
  
      
  
  

export default Addsurrendercylinder;