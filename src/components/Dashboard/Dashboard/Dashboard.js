import React, { useContext } from 'react';
import Profile from '../Profile/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../App';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);

    let token = '';
    // if (localStorage.getItem('token')) {
    //     token = JSON.parse(localStorage.getItem('token')).data?.token;
    // }
    console.log("dashboard");
    loggedInUser && toast("Wow so easy!");
    return (
        <div>
            <h1>this is dashboard</h1>
            {/* <Profile /> */}
        </div>
    );
};

export default Dashboard;