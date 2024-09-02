import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login-page'; 
import SignUp from './Login/SingUp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
