import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext(null);

// export const AuthContextProvider = ({ children }) => {
//   const [isLogged, setIsLogged] = useState(null);
//   const loggedIn = async () => {
//     const status = await axios.get('http://localhost:400/loggedIn');
//     console.log(status)
//     setIsLogged(status);
//   }
//   useEffect(() => {
//     loggedIn();
//   }, [])
//   return (
//     <AuthContext.Provider value={{ isLogged, loggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => {
//   return useContext(AuthContext);
// }
// MyContext.js
import React, { useEffect } from 'react';

const MyContext = React.createContext();

export const MyProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = React.useState(null);
  
  const login = async () => {
    // Perform login logic here
    const result = await axios.get('http://localhost:400/loggedIn');
    console.log('login', result)
    setLoggedIn(result.data);
  };
  useEffect(()=>{
    login();
  },[])
  const logout = async () => {
    // Perform logout logic here
    const result = await axios.get('http://localhost:400/loggedIn');
    console.log('logout', result)
    setLoggedIn(result.data);
  };

  return (
    <MyContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
