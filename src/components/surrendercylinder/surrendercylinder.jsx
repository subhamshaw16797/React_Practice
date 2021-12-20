import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class SurrenderCylinder extends React.Component {
    state= {
        SurrenderCylinder: [ ] ,
        countCylinders: [ ],
        
    };

    componentDidMount() {
        console.log("componentDidMount");
        axios
        .get("http://localhost:8080/surrendercylinder/getAllsurrenderCylinders")
        .then((res) => {
            console.log(res);
            this.setState({SurrenderCylinder: res.data});
        })
        .catch((err) => console.log(err));
    }
    

   handleDelete = (surrenderId) => {
    axios
    .delete(`http://localhost:8080/surrendercylinder/deleteCustomerSurrenderCylinder/${surrenderId}`)
    .then((res) => {
        console.log(res);
        const SurrenderCylinder = this.state.SurrenderCylinder.filter((s) => s.surrenderId !=surrenderId);
        this.setState({SurrenderCylinder:SurrenderCylinder});
        alert(res.data.surrenderId +"  deleted successfully!!")
    })
    .catch((err) => console.log(err));
   }

   handleupdate = (surrenderId) => {
       axios
       .put(`http://localhost:8080/surrendercylinder/updateSurrenderCylinder/${surrenderId}`)
       .then((res) => {
         console.log(res);
        const SurrenderCylinder = this.state.SurrenderCylinder.filter((s) => s.surrenderId !=surrenderId);
        this.setState({SurrenderCylinder:SurrenderCylinder});
        alert(res.data.surrenderId +"  updated successfully!!")  
       })
   }




    render() { 
        return (
            <div className='w-75 mx-auto'>
                <Link to="/surrendercylinder/insertSurrenderCylinder" className='btn btn-info float-end'>ADD</Link>
                
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>surrenderId</th>
                        <th>surrenderDate</th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                     {this.state.SurrenderCylinder.map((s)=> (  
                    <tr>
                        <td>{s.surrenderId} </td>
                        <td>{s.surrenderDate} </td>
                    
                        <td>
                             <Link to={`/surrendercylinder/updateSurrenderCylinder/${s.surrenderId}`} className='btn btn-primary'  >Update</Link>
                             <button className='btn btn-danger' onClick={()=> this.handleDelete(s.surrenderId)}>Delete</button>
                       </td>
                        
                    </tr>
                     ))}
                </tbody>

            </table>
            </div>
 
        );
    }
}
 
export default SurrenderCylinder;