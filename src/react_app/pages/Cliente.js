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
    const { index, setIndex } = useContext(UserContext);
    let idCliente = useParams();

    useEffect(() => {
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id == idCliente.id) {
                setIndex(i);
                break;
            }
        }
      }, []);

    return (
        <Container>
            <Link to="/home">
                <button>Voltar</button>
            </Link>

            <h1>{clientes[index].nome}</h1>

            <ul class="cliente">
                <li>{clientes[index].email}</li>
                <li>{clientes[index].celular}</li>
            </ul>

            <Link to={`/cliente/${idCliente.id}/patrimonio`}>
                <button>Patrimônio</button>
            </Link>
            <br></br>
            <Link to={`/cliente/${idCliente.id}/agendamentos`}>
                <button>Agendamentos</button>
            </Link>
            <br></br>
            <Link to={`/cliente/${idCliente.id}/chamados`}>
                <button>Chamados</button>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    h1 {
        margin-top: 10px;
        font-size: 35px;
    }

    ul {
        margin-top: 2%;
    }
    
    li {
        margin-bottom: 1%;
        color: #3A3A3A;
    }

    button {
        margin-bottom: 15px;
        margin-top: 15px;
    }
`;