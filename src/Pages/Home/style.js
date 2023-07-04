import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #000000;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
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

export const ContainerLoad = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000000;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 110px;
    @media (max-width: 600px){
    }
`;

export const TextCard = styled.div`
    max-width: 70%;
`;

export const BannerComponent = styled.img`
   width: 70%;
`;