import React from "react";
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-warning">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" exact to='/'>
                            Gas Booking App
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav nav-pills me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        aria-current="page"
                                        exact to='/home'
                                    >
                                        <i class="fas fa-home"/>&nbsp;
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to='/customer'>
                                        <i class="fas fa-users"/>&nbsp;
                                        Customers
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to='/about'>
                                        <i class="fas fa-book-open"/>&nbsp;
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/contactus">
                                        <i class="fas fa-phone-alt"/>&nbsp;
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input
                                    className="form-control form-sm me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-sm btn-dark"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                            <ul className="navbar-nav nav-pills ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/login">
                                        <i class="fas fa-sign-in-alt"/>&nbsp;
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/register">
                                        <i class="fas fa-user-plus"/>&nbsp;
                                        Register
                                    </NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Logout
                                    </a>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/cart">
                                        <i class="fas fa-shopping-cart"/>&nbsp;
                                        Cart
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
