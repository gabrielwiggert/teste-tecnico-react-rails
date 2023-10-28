import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import React, { Component }  from 'react';

import Header from './components/Header.js';
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Cliente from "./pages/Cliente.js";
import Patrimonio from "./pages/Patrimonio.js";
import Agendamentos from "./pages/Agendamentos.js";
import Chamados from "./pages/Chamados.js";
import UserContext from "./UserContext";

function App() {
  const [userData, setUserData] = useState(null);
  const [clientes, setClientes] = useState([]);
  const [index, setIndex] = useState(0);
  
  return (
    <UserContext.Provider value={{userData, setUserData, clientes, setClientes, index, setIndex}}>
      <Header />
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cliente/:id" element={<Cliente />} />
              <Route path="/cliente/:id/patrimonio" element={<Patrimonio />} />
              <Route path="/cliente/:id/agendamentos" element={<Agendamentos />} />
              <Route path="/cliente/:id/chamados" element={<Chamados />} />
          </Routes>
        </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;