import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './components/Dashboard/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddDeposit from './components/Dashboard/AddDeposit/AddDeposit';
import DepositHistory from './components/Dashboard/DepositHistory/DepositHistory';
import Login from './components/Authentication/Login';
import Registration from './components/Authentication/Registration';
import Extra from './components/Authentication/extra';

function App() {
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
          <Registration />
        </Route>
        <Route path="/extra">
          <Extra />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
