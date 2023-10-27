import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import React, { Component }  from 'react';

import Header from './components/Header.js';
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Cliente from "./pages/Cliente.js";
import UserContext from "./UserContext";

function App() {
  const [userData, setUserData] = useState(null);
  const [clientes, setClientes] = useState([]);
  
  return (
    <UserContext.Provider value={{userData, setUserData, clientes, setClientes}}>
      <Header />
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cliente" element={<Cliente />} />
          </Routes>
        </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;