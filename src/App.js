import React, { useEffect, useState } from 'react'
import HandleRouter from './components/Router/HandleRouter'
export const UserContext = React.createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})


  // useEffect(() => {
  //   const data = localStorage.getItem('token')
  //   if (data) {
  //     setLoggedInUser(JSON.parse(data))
  //   }
  //   console.log(data);

  // }, [])


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <HandleRouter />
    </UserContext.Provider>
  );
}

export default App;
