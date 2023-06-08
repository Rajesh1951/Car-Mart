import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import MyContext from '../Contexts/AuthContext';
const RequireAuth = ({ children }) => {
  const authContext = useContext(MyContext);
  if (authContext?.loggedIn === false) {
    return <Navigate to='/' />
  }
  return children;
}

export default RequireAuth