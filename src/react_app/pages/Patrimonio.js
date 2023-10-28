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
import { PieChart } from 'react-minimal-pie-chart';

export default function Patrimonio () {
    const { clientes, setClientes } = useContext(UserContext);
    const { index, setIndex } = useContext(UserContext);
    const [patrimonio, setPatrimonio] = useState({});
    let idCliente = useParams();

    useEffect(() => {
        const requisicao = axios.get(`http://localhost:4000/balances/${idCliente.id}.json`);

        requisicao.then((response) => {
            setPatrimonio(response.data);
        });
    
        requisicao.catch((err) => {
            console.log(err);
            alert(err);
        });
      }, []);

    return (
        <Container>
            <h1>Patrimônio</h1>
            <br></br>
            <h2>{clientes[index].nome}</h2>

            <ul class="patrimonio">
                <li>Total: R$ {patrimonio.contaCorrente + patrimonio.rendaFixa + patrimonio.rendaVariavel}</li>
                <li>Conta Corrente: R$ {patrimonio.contaCorrente}</li>
                <li>Renda Fixa: R$ {patrimonio.rendaFixa}</li>
                <li>Renda Variável: R$ {patrimonio.rendaVariavel}</li>
            </ul>

            <PieContainer>
            <PieChart
                data={[
                    { title: 'Conta Corrente', value: patrimonio.contaCorrente, color: '#6E99CE' },
                    { title: 'Renda Fixa', value: patrimonio.rendaFixa, color: '#0099D4' },
                    { title: 'Renda Variável', value: patrimonio.rendaVariavel, color: '#0B122D' },
                ]}
            />
            </PieContainer>

            <Link to={`/cliente/${idCliente.id}`}>
                <button>Voltar</button>
            </Link>
        </Container>
    );
}

const PieContainer = styled.div`
    :hover {
        opacity: .85;
    }
    margin: 33px;
    max-width:200px;
    max-height:200px;
`;

const Container = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    h1 {
        font-size: 35px;
    }

    h2 {
        font-size: 25px;
        color: #3A3A3A;
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