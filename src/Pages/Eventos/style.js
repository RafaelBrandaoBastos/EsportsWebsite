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
    @media (max-width: 950px) {
        justify-content: flex-start;
      }
`;
export const SubContainer = styled.div`
    width: 100vw;
    margin-top: 180px;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background-color: #141414;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 950px) {
        margin-top: 100px;
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
