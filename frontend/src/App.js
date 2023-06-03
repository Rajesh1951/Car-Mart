import Header from './Components/Header';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Dealer from './Components/Dealer';
import User from './Components/User';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Logout from './Components/Logout.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios'
import { AuthContextProvider } from './Contexts/AuthContext';
import RequireAuth from './Components/RequireAuth';

axios.defaults.withCredentials = true;
function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/dealer" element={<Dealer />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/logout' element={<Logout />} />
            <Route exact path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;