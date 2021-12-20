import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logginOutUser } from '../../redux/actions/userDetailsAction'
import { AlertNotificationContext } from '../../alert-context/alert-state';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';



const NavBar = () => {
    const { isLoggedIn, userDetails: { username } } = useSelector((state) => state.userData)
    const dispatch = useDispatch()
    const { setAlert } = useContext(AlertNotificationContext);

    const handleLogout = () => {
        setAlert('success', 'Logged Out Successfully')
        dispatch(logginOutUser())
        localStorage.removeItem('isLogin')
    }
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
                                    <i class="fas fa-home" />&nbsp;
                                    Home
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" exact to='/customer'>
                                    <i class="fas fa-users" />&nbsp;
                                    Customers
                                </NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to='/about'>
                                    <i class="fas fa-book-open" />&nbsp;
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contactus">
                                    <i class="fas fa-phone-alt" />&nbsp;
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>


                        {/* <form className="d-flex">
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
                        </form> */}
                        <ul className="navbar-nav nav-pills ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {isLoggedIn ?
                                    <NavLink className="nav-link" exact to="/login" onClick={handleLogout}>
                                        <i class="fas fa-sign-in-alt" />&nbsp;
                                        Logout
                                    </NavLink>
                                    :
                                    <NavLink className="nav-link" exact to="/login">
                                        <i class="fas fa-sign-in-alt" />&nbsp;
                                        Customer Login
                                    </NavLink>
                                }
                            </li>
                            {!isLoggedIn && <li className="nav-item">
                                <NavLink className="nav-link" exact to='/adminLogin'>
                                    <i class="fas fa-users" />&nbsp;
                                    Admin Login
                                </NavLink>
                            </li>}
                            {!isLoggedIn && <li className="nav-item">
                                <NavLink className="nav-link" exact to="/register">
                                    <i class="fas fa-user-plus" />&nbsp;
                                    Customer Register
                                </NavLink>
                            </li>
                            }
                            {!isLoggedIn && <li className="nav-item">
                                <NavLink className="nav-link" exact to="/adminRegister">
                                    <i class="fas fa-user-plus" />&nbsp;
                                    Admin Register
                                </NavLink>
                            </li>
                            }
                            {/* <li className="nav-item">
                                    <NavLink className="nav-link" href="#">
                                        Logout
                                    </NavLink>
                                </li> */}
                            {/* <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/cart">
                                        <i class="fas fa-shopping-cart"/>&nbsp;
                                        Cart
                                    </NavLink>
                                </li> */}
                            {isLoggedIn && <Avatar sx={{ bgcolor: deepPurple[500] }}>{username && username[0]?.toUpperCase() || ''}</Avatar>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default NavBar;
