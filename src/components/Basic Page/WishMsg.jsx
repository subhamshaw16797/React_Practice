import React, { Component } from 'react';


class WishMsg extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button className="btn btn-success btn-md">Click Here</button>
                <button className="btn btn-md btn-dark btn-outline-secondary">
                    Submit
                </button>
            </div>
        );
    }
}

export default WishMsg;
