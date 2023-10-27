import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import React from 'react'
import { render } from 'react-dom'
import { ThreeDots } from 'react-loader-spinner'
import UserContext from "../UserContext";

export default function Cliente () {
    const { clientes, setClientes } = useContext(UserContext);

    return (
        <Container>
            <h1>{clientes[0].nome}</h1>

            <ul class="cliente">
                <li>{clientes[0].email}</li>
                <li>{clientes[0].celular}</li>
            </ul>
        </Container>
    );
}

const Container = styled.div`
    margin-left: 10%;
    margin-top: 5%;
    h1 {
        font-size: 35px;
    }

    ul {
        margin-top: 2%;
    }
    
    li {
        margin-bottom: 1%;
    }
`;