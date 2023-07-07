import styled from "styled-components";
import { useSnapCarousel } from 'react-snap-carousel';

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #141414;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
    position: absolute;
    animation: fade-in 1200ms;
    @keyframes fade-in {
        0% {
          opacity: 0;
        }
        99% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const SubContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background-color: #141414;
    flex-direction: column;
    padding-top: 90px;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 815px){

    }
`;

export const ContainerLoad = styled.div`
    width: 100%;
    height: 100%;
    background-color: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px){
    }
    animation: fade-out 1000ms;
    @keyframes fade-out {
        0% {
          opacity: 1;
        }
        99% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
      }
`;


export const Card = styled.div`
    width: 85%;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    outline-style: solid;
    outline-color: rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    padding: 20px;
    margin-top: 30px;
    margin-bottom: 50px;
    @media (max-width: 1070px){
        max-height: 50000px;
        min-height: 70vh;
    }

`;

export const CardContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    outline-color: white;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 1070px){
        flex-wrap: wrap;
        padding: 0px;
    }
`;

export const TitleCard = styled.div`
    width: 100%;
    margin-bottom: 40px;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    outline-color: yellow;
    @media (max-width: 1070px){
        max-width: 500px;
        margin-bottom: 20px;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;


export const TextCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    outline-color: yellow;
    width: 60%;
    @media (max-width: 1070px){
        width: 100%;
        max-width: 500px;
    }
    @media (max-width: 576px){

    }
`;

export const Colocacoes = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: no-wrap;
    margin-top: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    outline-color: orange;
    @media (max-width: 600px){
        height: 50%;
    }
    @media (max-width: 430px){
        flex-wrap: wrap;
    }
`;
export const SubColoc = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 50px;
    justify-content: flex-start;
    align-items: flex-start;
    outline-color: blue;
    @media (max-width: 430px){
        width: 100%;
    }
`;

export const BannerComponent = styled.img`
   width: 70%;
`;



export const Carousel = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    outline-color: red;
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
    @media (max-width: 1070px){
        max-width: 100%;
        height: auto;
    }
`;

export const ImgComponent = styled.img`
    width: 90%;
    max-height: 90%;
    position: absolute;
`;
export const Text = styled.p`
    font-size: 23px;
    font-family: 'Barlow Condensed', sans-serif;
    color: white;
    outline-color: white;
    margin: 0px;
    padding: 0px;
`;
export const Title = styled.p`
    font-size: 23px;
    font-family: 'Ethnocentric Rg';
    color: #ff255f;
    margin: 0px;
    padding: 0px;
    outline-color: white;
    margin-bottom: 0px;
    @media (max-width: 1070px){
        width: 100%;
        margin-bottom: 10px;
    }
`;

export const MarkText = styled.p`
    font-size: 23px;
    font-family: 'Barlow Condensed', sans-serif;
    color: white;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 75%;
`;

export const CaroulselPrev = styled.button`
    position: absolute;
    top: 50%;
    right: 90%;
`;
export const CaroulselNext = styled.button`
    position: absolute;
    top: 50%;
    left: 90%;
`;



export const ImageLoader = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

