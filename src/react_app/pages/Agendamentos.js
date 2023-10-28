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

export default function Agendamentos () {
    const { clientes, setClientes } = useContext(UserContext);
    const { index, setIndex } = useContext(UserContext);
    const [agendamentos, setAgendamentos] = useState({});
    let idCliente = useParams();

    useEffect(() => {
        const requisicao = axios.get(`http://localhost:4000/agendamentos/${idCliente.id}.json`);

        requisicao.then((response) => {
            setAgendamentos(response.data);
        });
    
        requisicao.catch((err) => {
            console.log(err);
            alert(err);
        });
      }, []);

    return (
        <Container>
            <h1>Agendamentos</h1>
            <br></br>
            <h2>{clientes[index].nome}</h2>

            <ul class="agendamentos">
                <li>Título: {agendamentos.titulo}</li>
                <li>Data/Hora: {agendamentos.datahora}</li>
                <li>Link: {agendamentos.link}</li>
                <li>Descrição: {agendamentos.sobre}</li>
            </ul>

            <Link to={`/cliente/${idCliente.id}`}>
                <button>Voltar</button>
            </Link>
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

    h2 {
        font-size: 25px;
    }

    ul {
        margin-top: 5%;
    }
    
    li {
        margin-bottom: 2%;
    }

    button {
        margin-top: 15px;
    }
`;