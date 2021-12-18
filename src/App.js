import "./App.css";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/layout/home";
import NavBar from "./components/layout/navbar";
import About from "./components/layout/about";
import ContactUs from "./components/layout/contactus";
import Login from "./components/layout/login";
import Register from "./components/layout/register";
import PageNotFound from "./components/layout/pagenotfound";
import Customer from "./components/customer/customer";
import AddCustomer from "./components/customer/addcustomer";
import UpdateCustomer from "./components/customer/updatecustomer";
import CustomerProfile from "./components/customer/customerprofile";
import AlertNotificationProvider from "./alert-context/alert-state";


function App() {
    return (
        <Router>
            <AlertNotificationProvider>
                <NavBar />
                <Switch>
                    <Route exact path="/home" component={Home} />
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
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contactus" component={ContactUs} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Redirect exact path="/" to="/home" />
                    <Route component={PageNotFound} />
                </Switch>
            </AlertNotificationProvider>
        </Router>
    );
}

export default App;
