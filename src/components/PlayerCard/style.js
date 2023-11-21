import styled from "styled-components";
import cardbackground from "../../assets/players/cardBackground.png"

export const Container = styled.div`
    width: 200px;
    height: 300px;
    background-image: url(${cardbackground});
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    z-index: 0;
    position: relative;
    display: flex;
    align-items: flex-start;
    margin: 50px;
    @media (max-width: 750px){
        height: auto;
        width: 90%;
        max-width: 400px;
        margin: 50px 0px;
    }
    @media (max-width: 450px){
        height: auto;
        width: 90%;
        max-width: 400px;
        max-height: 600px;
    }
    
`;

export const PlayerCardComponent = styled.img`
    width: 100%;
    height: auto;
    background-image: url(${({player}) => player});
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    max-width: 600px;
    @media (max-width: 450px){
        height: auto;
    }
`;

export const Text = styled.p`
    color: black;
    position: absolute;
    top: ${(props) => props.top}%;
    height: 40px;
    width: 100%;
    right: ${(props) => props.right}px;
    transform: rotate(32deg);
    z-index: 2;
    font-size: ${(props) => props.size}px;
    font-family: 'Ethnocentric Rg';
    text-align: center;
    @media (max-width: 750px){
        top: ${(props) => props.top - 3}%;
        font-size: ${(props) => props.size * 2}px;
        transform: rotate(31deg);
    }
    @media (max-width: 550px){
        transform: rotate(31deg);
        font-size: ${(props) => props.size / .6}px;
        top: ${(props) => props.top - 1.5}%;
    }
    @media (max-width: 450px){
        transform: rotate(30deg);
        font-size: ${(props) => props.size / .8}px;
        top: ${(props) => props.top - 1.5}%;
    }
    @media (max-width: 350px){
        transform: rotate(33deg);
        font-size: ${(props) => props.size / .98}px;
        top: ${(props) => props.top - 1.5}%;
    }
    @media (max-width: 300px){
        transform: rotate(35deg);
        font-size: ${(props) => props.size / 1.2}px;
        top: ${(props) => props.top - 1.5}%;
    }
    @media (max-width: 250px){
        transform: rotate(35deg);
        font-size: ${(props) => props.size / 1.5}px;
        top: ${(props) => props.top - 1.5}%;
    }
`;
export const Icon = styled.img`
    width: 50px;
    position: absolute;
    padding: 10px;
`;