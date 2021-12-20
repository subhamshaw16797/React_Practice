import React, { Component } from "react";
import axios from "axios";
import  Joi  from "joi-browser";
class UpdateCylinder extends React.Component {
  state = {
    cylinder: {
    
      type: "",
      weight: "",
      strapColor: "",
      price: "",
    },
  };
  schema = {
    type: Joi.string().min(3).max(20).required(),
    weight: Joi.number().integer().required(),
    strapColor: Joi.string().min(3).max(20).required(),
    price: Joi.number().integer().required(),
}; 
validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.cylinder, this.schema, {
      abortEarly: false,
    });

    console.log(result);
    if (result.error != null)
  for (let item of result.error.details) {
    errors[item.path[0]] = item.message;
  }
return Object.keys(errors).length === 0 ? null : errors;
};
  componentDidMount() {
    const dataUrl = `http://localhost:8080/cylinder/getSingleCylinder/${this.props.match.params.cylinderId}`;
    axios.get(dataUrl).then((response) => {
        console.log(response.data);
        this.setState({
          ...this.state.cylinder,
            cylinder : response.data
        })
    })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    this.setState({
        cylinder: {
            ...this.state.cylinder,
            [event.target.name]: event.target.value,
        },
    });
};
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ errors: this.validate() })
    console.log("Handle Submit");
    // Send post request to rest api
    const dataUrl = `http://localhost:8080/cylinder/updateCylinder/${this.props.match.params.cylinderId}`;
        axios
            .put(dataUrl, this.state.cylinder)
            .then((response) => {
                console.log(response.data);
                alert(
                    "Update Cylinder details " +
                        this.state.cylinder.type +
                        " successfully !!!"
                );
                this.props.history.push("/cylinders");
            })
      .catch((err) => console.log(err));
  };
  render() {
    // Object Destructuring
    const { type,weight,strapColor,price } = this.state.cylinder;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
         
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              type
            </label>
            <input
              type="text"
              className="form-control"
              id="type"
            
              value={type}
              name="type"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="weight" className="form-label">
              weight
            </label>
            <input
              type="text"
              className="form-control"
              id="weight"
             
              value={weight}
              name="weight"
              onChange={this.handleChange}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="strapColor" className="form-label">
              strapColor
            </label>
            <input
              type="text"
              className="form-control"
              id="strapColor"
              
              value={strapColor}
              name="strapColor"
              onChange={this.handleChange}
            />
          </div>
        
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              
              value={price}
              name="price"
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

export default UpdateCylinder;