import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import React, { Component }  from 'react';

import Header from './components/Header.js';
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import UserContext from "./UserContext";

function App() {
  const [userData, setUserData] = useState(null);
  
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <Header />
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;