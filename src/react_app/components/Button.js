import styled from "styled-components";
import React from 'react'

export default function Button() {
    return (
        <>
        <Container>
            <button role="button">Login</button>
        </Container>
        </>
    );
}

const Container = styled.div`
    button {
        background-color: #0B122D;
        border-radius: 4px;
        border-style: none;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
        margin: 0;
        max-width: none;
        min-height: 55px;
        min-width: 10px;
        outline: none;
        overflow: hidden;
        padding: 9px 20px 8px;
        position: relative;
        text-align: center;
        text-transform: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: 100%;
    }

    button:hover,
    button:focus {
        opacity: .75;
    }
`;