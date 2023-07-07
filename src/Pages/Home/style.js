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
    min-height: 75vh;
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
    padding: 0px;
    padding: 0px;
`;
export const ContainerLoad = styled.div`
    width: 100%;
    height: 100%;
    background-color: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: 68vh;
    display: flex;
    flex-wrap: wrap;
    outline-color: white;
    justify-content: center;
    align-items: center;
    margin: 20px;
    margin-top: 50px;
`;


export const TextCard = styled.div`
    width: 80%;
    max-width: 1200px;
    text-align:justify;
    outline-color: white;
    margin: 0px;
    padding: 0px;
    @media (max-width: 815px){
        width: 90%;
    }
`;


export const BannerComponent = styled.img`
    max-width: 1200px;
   width: 80%;
   margin: 0px;
    padding: 0px;
    outline-color: white;
   @media (max-width: 815px){
    width: 90%;
    }
`;

export const ImgComponent = styled.img`
   width: 70%;
`;