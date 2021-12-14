import "./App.css";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/Layout/home";
import NavBar from "./components/Layout/navbar";
import About from "./components/Layout/about";
import ContactUs from "./components/Layout/contactus";
import Login from "./components/Layout/login";
import Register from "./components/Layout/register";
import PageNotFound from "./components/Layout/pagenotfound";
import Customer from "./components/Layout/customer";
import AddCustomer from "./components/Layout/addcustomer";
import UpdateCustomer from "./components/Layout/updatecustomer";
import CustomerProfile from "./components/Layout/customerprofile";

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/customer' component={Customer} />
                <Route exact path='/customer/add' component={AddCustomer} />
                <Route exact path='/customer/update/:id' component={UpdateCustomer} />
                <Route exact path='/customer/profile/' component={CustomerProfile} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contactus' component={ContactUs} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Redirect exact path='/' to='/home'/>
                <Route component={PageNotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
