import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Dealer from './Components/Dealer';
import User from './Components/User';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Logout from './Components/Logout.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { MyProvider } from './Contexts/AuthContext';
import RequireAuth from './Components/RequireAuth';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyProvider>
      <ChakraProvider>
        <BrowserRouter>

          <App />
          <Routes>
            <Route path="/dealer" element={<RequireAuth><Dealer /></RequireAuth>} />
            <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/user" element={<RequireAuth><User /></RequireAuth>} />
            <Route path="/about" element={<RequireAuth><About /></RequireAuth>} />
            <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
            <Route path='/logout' element={<Logout />} />
            <Route exact path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </MyProvider>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
