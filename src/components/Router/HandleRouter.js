import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from '../Authentication/Login';
import Registration from '../Authentication/Register';
import AddDeposit from '../Dashboard/AddDeposit/AddDeposit';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import DepositHistory from '../Dashboard/DepositHistory/DepositHistory';
import Profile from '../Dashboard/Profile/Profile';
import PrivateRoute from '../privateRoute/privateRoute';

const HandleRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <PrivateRoute exact path="/">
                        <Dashboard />
                    </PrivateRoute>
                    <PrivateRoute path="/profile">
                        <Profile />
                    </PrivateRoute>
                    <PrivateRoute path="/addDeposit">
                        <AddDeposit />
                    </PrivateRoute>
                    <Route path="/depositHistory">
                        <DepositHistory />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/registration">
                        <Registration />
                    </Route>
                    {/* <Route path="/extra">
                    <Extra />
                </Route> */}
                </Switch>
            </Router>
        </>
    );
};

export default HandleRouter;