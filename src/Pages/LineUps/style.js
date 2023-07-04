import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000000;
    z-index: 1;
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
`;