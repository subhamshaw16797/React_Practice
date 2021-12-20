import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Home from "./components/layout/home";
import NavBar from "./components/layout/navbar";
import Login from "./components/layout/login";
import Register from "./components/layout/register";
import PageNotFound from "./components/layout/pagenotfound";
import About from "./components/layout/about";
import ContactUs from "./components/layout/contactus";

import Customer from "./components/customer/customer";
import AddCustomer from "./components/customer/addcustomer";
import UpdateCustomer from "./components/customer/updatecustomer";
import CustomerProfile from "./components/customer/customerprofile";
import AlertNotificationProvider from "./alert-context/alert-state";

import AdminProfileDetails from "./components/admin/adminprofiledetails1";
import AdminManagement from "./components/admin/adminmanagementsection";
import AdminLogin from "./components/layout/adminlogin";
import AdminRegister from "./components/layout/adminregister";
import IdBookings from './components/admin/idbookings';
import BetweenBookings from "./components/admin/idbookings";

import UpdateGasBooking from "./components/gasbooking/updategasbooking";
import AddGasBooking from "./components/gasbooking/addgasbooking";
import GasBooking from "./components/gasbooking/gasbooking";
import GetBill from "./components/gasbooking/getbill";

import UpdateCylinder from "./components/cylinder/updatecylinder";
import Cylinder from "./components/cylinder/cylinder";
import AddCylinder from "./components/cylinder/addcylinder";

function App() {
    return (
        <Router>
            <AlertNotificationProvider>
                <NavBar />
                <Switch>
                    {/* admin */}
                    <Route
                        path="/adminmanagement"
                        component={AdminManagement}
                    />
                    <Route
                        path="/adminprofiledetails"
                        component={AdminProfileDetails}
                    />
                    <Route
                        path="/betweenbookings"
                        component={BetweenBookings}
                    />
                    <Route path="/custIdform" component={IdBookings} />

                    {/*customer*/}

                    <Route exact path="/customer" component={Customer} />
                    <Route exact path="/customer/add" component={AddCustomer} />
                    <Route
                        exact
                        path="/customer/update/:id"
                        component={UpdateCustomer}
                    />
                    <Route
                        exact
                        path="/customer/profile/"
                        component={CustomerProfile}
                    />

                    {/* gasbooking */}

                    <Route
                        path="/gasbooking/update/:gasBookingId"
                        component={UpdateGasBooking}
                    />
                    <Route path="/gasbooking/add" component={AddGasBooking} />
                    <Route path="/gasbookings" component={GasBooking} />
                    <Route path="/getbills" component={GetBill} />

                    {/* cylinder */}

                    <Route
                        path="/cylinders/update/:cylinderid"
                        component={UpdateCylinder}
                    />
                    <Route path="/cylinders" component={Cylinder} />
                    <Route exact path="/cylinder/add" component={AddCylinder} />

                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contactus" component={ContactUs} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/adminLogin" component={AdminLogin} />
                    <Route exact path="/adminRegister" component={AdminRegister} />
                    <Route exact path="/register" component={Register} />
                    <Redirect exact path="/" to="/home" />
                    <Route component={PageNotFound} />
                </Switch>
            </AlertNotificationProvider>
        </Router>
    );
}

export default App;
