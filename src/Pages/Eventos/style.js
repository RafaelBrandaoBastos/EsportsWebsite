import styled from "styled-components";
import { useSnapCarousel } from 'react-snap-carousel';

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: #141414;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding-top: 100px;
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
    width: 95%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
    @media (max-width: 600px){
    }
`;

export const Colocacoes = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 600px){
    }
`;
export const ColocSub = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    outline-style: solid;
    outline-color: blue;
    align-items: center;
    @media (max-width: 600px){
    }
`;
export const Card2 = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
    @media (max-width: 600px){
    }
`;

export const TextCard = styled.div`
    max-width: 70%;
`;

export const TextCard2 = styled.div`
    max-width: 50%;
`;

export const BannerComponent = styled.img`
   width: 70%;
`;



export const Carousel = styled.div`
    width: 50%;
    height: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    outline-style: solid;
    outline-color: white;
`;

export const ImgComponent = styled.img`
    width: 100%;
`;
export const Text = styled.p`
    font-size: 23px;
    font-family: 'Barlow Condensed', sans-serif;
    color: white;
`;

export const CarouselUl = styled.ul`
    display: flex;
    align-items: center;
    background-color: red;
    overflow: auto;
    width: 100%;
    height: 80%;
    scrollSnapType: x mandatory;
`;

export const CarouselLi = styled.li`
    background-color: blue;
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    alignItems: center;
    padding: 5%;
`;