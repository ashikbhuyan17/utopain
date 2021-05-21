import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';



const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            setLoggedInUser(JSON.parse(localStorage.getItem('token')).data?.token)
        }
    }, [])
    console.log(loggedInUser);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser?.token || localStorage.getItem('token') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;