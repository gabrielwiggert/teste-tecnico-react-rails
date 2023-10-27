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
    return (
        <Container>
            <h1>Home</h1>
        </Container>
    );
}

const Container = styled.div`
    h1 {
        color: black;
    }
`;