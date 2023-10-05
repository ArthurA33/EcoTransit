import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home'
import About from '../pages/aboutUs'
import Contact from '../pages/contact.jsx'
import Login from '../pages/connexionPages/login'
import Signup from '../pages/connexionPages/signup'

// import ErrorPage from '../components/pages/ErrorPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/connection" element={<Login />} />
      <Route path="/inscription" element={<Signup/>} />
      
      {/* <Route path="*" element={<ErrorPage />} />   */}

    </Routes>
  )
};

export default AppRoutes;