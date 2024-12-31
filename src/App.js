import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login-page'; 
import SignUp from './Login/SingUp';
import Header from './Dashboard/header';
import LandingPage from './Dashboard/intro';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dashboard" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}
