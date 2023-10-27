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
import Button from "../components/Button.js"

export default function Login () {
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();

	function login (event) {
		event.preventDefault();

        setLoading(true);

        const requisicao = axios.get("http://localhost:4000/usuarios.json");

        requisicao.then((response) => {
            if (response.data[0].usuario === username && response.data[0].senha === password) {
                setUserData(response.data)
                navigate(`/home`);
            }
        });

        requisicao.catch((err) => {
            console.log(err);
            alert(err);
        });
	}

    return (
        <>
            <Form>
                <form onSubmit={login}>
                    <input type="text" placeholder="Usuário" value={username} onChange={e => setUsername(e.target.value)} required disabled={loading}/>
                    <input type="text" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required disabled={loading}/>
                    {loading ? <button disabled><ThreeDots color="#fff" height={'1.8rem'} width={'100%'} /></button> : <Button />}
                </form>
            </Form>
        </>
    );
}

const Form = styled.div`
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }

    input {
        border-width: 1px;
        border-color: #D4D4D4;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        width: 50vw;
        height: 52px;
        margin-bottom: 24px;
        font-family: 'Lexend Deca', sans-serif;
    }

    input:disabled{
        background: grey;
        color: darkgray;
        opacity: 0.2;
        cursor: progress;
    }

    button:disabled{
        background: grey;
        color: darkgray;
        opacity: 0.2;
        cursor: progress;
    }

    input::placeholder {
        padding-left: 11px;
        font-size: 14px;
        color: #7E7E7E;
    }
`;