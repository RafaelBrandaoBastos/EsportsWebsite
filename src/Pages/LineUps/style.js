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
    @media (max-width: 1120px) {
        justify-content: flex-start;
    }
`;
export const SubContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 70vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding-top: 100px;
    @media (max-width: 1120px) {
        padding-top: 50px;
    }
`;
export const ContainerLoad = styled.div`
    width: 100vw;
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
    width: 80%;
    max-width: 1200px;
    min-height: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    outline-style: solid;
    outline-color: rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    padding: 20px;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 50px;
    @media (max-width: 380px){
        padding: 0px;
    }
`;

export const Title = styled.p`
    font-size: 23px;
    font-family: 'Ethnocentric Rg';
    color: white;
    margin: 0px;
    padding: 0px;
    outline-color: white;
    margin-bottom: 0px;
    width: 100%;
    text-align: center;
    @media (max-width: 1070px){
        margin-bottom: 10px;
    }
`;
