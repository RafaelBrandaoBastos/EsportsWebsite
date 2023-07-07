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
    min-height: 70vh;
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
    margin: 0px;
    padding: 0px;
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
    width: 95%;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    outline-style: solid;
    outline-color: rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    padding: 20px;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 50px;
    @media (max-width: 815px){
        width: 80%;
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
    outline-color: blue;
`;

export const Title = styled.p`
    font-size: 23px;
    font-family: 'Ethnocentric Rg';
    color: #ff255f;
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

export const BannerComponent = styled.img`
   width: 70%;
   @media (max-width: 815px){
    width: 90%;
    }
`;

export const ImgComponent = styled.img`
   width: 70%;
`;







export const PlayersContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    outline-color: white;
    @media (max-width: 1070px){
        flex-wrap: wrap;
    }
`;
export const PlayerCard = styled.div`
    width: 200px;
    height: 300px;
    margin: 20px;
    background-image: url(${props => props.url});
    background-size: auto 100%;
    background-position: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    position: relative;
`;

export const PlayerCardText = styled.div`
    margin: 0px;
    padding: 0px;
    top: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute; 
`;
export const PlayerImg = styled.img`
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
`;
export const PlayerTitle = styled.p`
    font-size: ${props => props.size};
    font-family: 'Ethnocentric Rg';
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 0px;
    padding: 0px;
    margin-bottom: 0px;
    @media (max-width: 1070px){
    }
`;