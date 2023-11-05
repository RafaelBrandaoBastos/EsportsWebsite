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
    width: 80%;
    height: 100%;
    min-height: 78vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 90px;
    align-items: center;
    @media (max-width: 1500px) {
        padding-top: 250px;
        flex-direction: column;
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
    width: 300px;
    max-width: 1200px;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    outline-style: solid;
    outline-color: rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    padding: 20px;
    align-items: center;  
    margin-bottom: 100px; 
`;
export const Subtitle = styled.p`
    font-size: 23px;
    font-family: "Barlow Condensed", sans-serif;
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
export const Title = styled.p`
    font-size: 70px;
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
export const StaffImg = styled.img`
    width: 80%;
    height: auto;
    border-radius: 15px;
`;
export const SrcLink = styled.a`
    font-size: ${props => props.size};
    font-family: 'Barlow Condensed', sans-serif;
    color: #ff255f;
    margin: 0px;
    padding: 0px;
    margin-bottom: 0px;
`;