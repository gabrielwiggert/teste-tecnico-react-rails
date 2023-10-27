import styled from "styled-components";
import { Link } from "react-router-dom";
import React from 'react'

import logo from "../../assets/imgs/w1_consultoria_logo-no-bg.png";

export default function Header() {
    return (
        <Container>
            <img src={logo} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    align-items: center;
    height: 80px;
    width: 100vw;
    background-color: #0B122D;
    color: #EFEFEF;

    img {
        height: 50px;
    }

    h1 {
        margin-left: 33px;
    }
`;