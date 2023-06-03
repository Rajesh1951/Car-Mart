import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
// import { AuthContext } from '../Contexts/AuthContext'
import MyContext from '../Contexts/AuthContext';
const RequireAuth = ({ children }) => {
  const authContext = useContext(MyContext);
    console.log('authContext',authContext)
  if (authContext?.loggedIn === false) {
    console.log('not authorised')
    return <Navigate to='/' />
  }
  return children;
}

export default RequireAuth