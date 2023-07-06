import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
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
export const Text = styled.p`
    font-size: 23px;
    font-family: 'Barlow Condensed', sans-serif;
    color: white;
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
    min-height: 70vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
    @media (max-width: 600px){
    }
`;


export const TextCard = styled.div`
    max-width: 70%;
    text-align:justify;
    @media (max-width: 815px){
        max-width: 90%;
    }
`;

export const TextCard2 = styled.div`
    max-width: 50%;
    outline-style: solid;
    outline-color: blue;
`;


export const BannerComponent = styled.img`
   width: 70%;
`;

export const ImgComponent = styled.img`
   width: 70%;
`;