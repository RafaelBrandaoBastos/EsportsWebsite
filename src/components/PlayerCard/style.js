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
    @media (max-width: 380px){
        width: 95%;
        margin: 50px 0px 50px 0px;
        height: 500px;
    }
    
`;

export const PlayerCardComponent = styled.img`
    width: 100%;
    height: auto;
    background-image: url(${({player}) => player});
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    @media (max-width: 380px){
        height: 500px;
    }
`;

export const Text = styled.p`
    color: black;
    position: absolute;
    top: ${(props) => props.top}px;
    height: 40px;
    width: 100%;
    right: ${(props) => props.right}px;
    transform: rotate(32deg);
    z-index: 2;
    font-size: ${(props) => props.size}px;
    font-family: 'Ethnocentric Rg';
    text-align: center;
    @media (max-width: 380px){
        top: ${(props) => props.top * 1.7}px;
        transform: rotate(35deg);
    }
    @media (max-width: 280px){
        top: ${(props) => props.top * 1.7}px;
        transform: rotate(45deg);
    }
`;
export const Icon = styled.img`
    width: 50px;
    position: absolute;
    padding: 10px;

`;