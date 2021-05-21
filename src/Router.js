import React from 'react';


import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import AddDeposit from './components/Dashboard/AddDeposit/AddDeposit';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import DepositHistory from './components/Dashboard/DepositHistory/DepositHistory';
import Profile from './components/Dashboard/Profile/Profile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Router = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/addDeposit">
                    <AddDeposit />
                </Route>
                <Route path="/depositHistory">
                    <DepositHistory />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/registration">
                    <Register />
                </Route>
                {/* <Route path="/extra">
                    <Extra />
                </Route> */}
            </Switch>
        </Router>
    );
};

export default Router;