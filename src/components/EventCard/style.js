import styled from "styled-components";
import { useSnapCarousel } from 'react-snap-carousel';
import arrowright from "../../assets/arrowright.png"
import arrowleft from "../../assets/arrowleft.png"

export const Card = styled.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
    outline-style: solid;
    outline-color: rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 50px;
    @media (max-width: 1070px){
        max-height: 50000px;
        min-height: 700px;
    }

`;

export const CardContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
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
    justify-content: flex-start;
    align-items: flex-start;
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
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
    @media (max-width: 1070px){
        max-width: 100%;
        height: auto;
    }
`;

export const ImgComponent = styled.img`
    width: auto;
    height: 90%;
    max-width: 400px;
    position: absolute;
    @media (max-width: 600px){
        width: 90%;
        height: auto;
    }
`;
export const Text = styled.p`
    font-size: 23px;
    font-family: 'Barlow Condensed', sans-serif;
    color: white;
    margin: 0px;
    padding: 0px;
`;
export const Title = styled.p`
    font-size: 23px;
    font-family: 'Ethnocentric Rg';
    color: #ff255f;
    margin: 0px;
    padding: 0px;
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
    top: 45%;
    width: 50px;
    height: 50px;
    background-image: url(${arrowleft});
    background-size: 100% 100%;
    background-position: center;
    background-color: rgba(0, 0, 0, .5); 
    border: 0px;
    outline-style: none;
    right: 85%;
`;
export const CaroulselNext = styled.button`
    position: absolute;
    top: 45%;
    width: 50px;
    height: 50px;
    background-image: url(${arrowright});
    background-size: 100% 100%;
    background-position: center;
    background-color: rgba(0, 0, 0, .5); 
    border: 0px;
    outline-style: none;
    left: 85%;
`;
export const ImageLoader = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
