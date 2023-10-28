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

export default function Home () {
    const { clientes, setClientes } = useContext(UserContext);

    useEffect(() => {
        const requisicao = axios.get("http://localhost:4000/clientes.json");

        requisicao.then((response) => {
            setClientes(response.data);
        });
    
        requisicao.catch((err) => {
            console.log(err);
            alert(err);
        });
      }, []);

    return (
        <Container>
            <h1>Clientes</h1>

            <ul class="clientes">
                {clientes.map(e =>
                    <Link to={`/cliente/${e.id}`}>
                        <li class="nomes">{e.nome}</li>
                    </Link>
                )}
            </ul>
        </Container>
    );
}

const Container = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    h1 {
        font-size: 35px;
    }

    ul {
        margin-top: 5%;
    }
    
    li {
        margin-bottom: 2%;
    }
`;