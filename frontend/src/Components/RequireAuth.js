import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext, useAuth } from '../Contexts/AuthContext'
const RequireAuth = ({ children }) => {
  const authContext = useContext(AuthContext);
    // console.log(authContext)
  if (authContext?.isLogged?.data === false) {
    console.log('not authorised')
    return <Navigate to='/' />
  }
  return children;
}

export default RequireAuth