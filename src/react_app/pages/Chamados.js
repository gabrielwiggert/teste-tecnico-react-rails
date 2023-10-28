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

export default function Chamados () {
    const { clientes, setClientes } = useContext(UserContext);
    const { index, setIndex } = useContext(UserContext);
    const [chamados, setChamados] = useState({});
    let idCliente = useParams();

    useEffect(() => {
        const requisicao = axios.get(`http://localhost:4000/chamados/${idCliente.id}.json`);

        requisicao.then((response) => {
            setChamados(response.data);
        });
    
        requisicao.catch((err) => {
            console.log(err);
            alert(err);
        });
      }, []);

    return (
        <Container>
            <h1>Chamados</h1>
            <br></br>
            <h2>{clientes[index].nome}</h2>

            <ul class="chamados">
                <li>Título: {chamados.titulo}</li>
                <li>Código do chamado: {chamados.codigo}</li>
                <li>Descrição: {chamados.sobre}</li>
                <li>Abertura do chamado: {chamados.created_at}</li>
            </ul>

            <Link to={`/cliente/${idCliente.id}`}>
                <button>Voltar</button>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    margin-left: 10%;
    margin-top: 5%;
    h1 {
        font-size: 35px;
    }

    h2 {
        font-size: 25px;
    }

    ul {
        margin-top: 2%;
    }
    
    li {
        margin-bottom: 1%;
    }

    button {
        margin-top: 15px;
    }
`;