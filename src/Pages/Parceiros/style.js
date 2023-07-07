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
    margin: 0px;
    padding: 0px;
    font-size: 23px;
    font-family: 'Barlow Condensed', sans-serif;
    color: white;
    outline-color: blue;
    @media (max-width: 815px){
        width: 100%;
        text-align: center;
    }
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
    max-width: 1500px;
    min-height: 70vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
    padding: 20px;
    @media (max-width: 600px){
    }
    outline-color: blue;
`;


export const BannerComponent = styled.img`
   width: 70%;
   @media (max-width: 815px){
    width: 90%;
    }
`;



export const PartnerCard = styled.div`
    display: flex;
    width: 650px;
    height: 250px;
    align-items: center;
    justify-content: center;
    padding: 30px;
    flex-wrap: no-wrap;
    outline-style: solid;
    outline-color: rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    margin: 20px;
    @media (max-width: 815px){
        width: 100%;
        height: auto;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;
export const TextCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 20px;
    outline-color: red;
    max-width: 60%;
    @media (max-width: 815px){
        padding-left: 0px;
        align-items: center;
        justify-content: center;  
        max-width: 100%;   
        width: 100%;       
    }
`;

export const ImageComponent = styled.img`
    width: 200px;
    height: 200px;
    background-image: url(${props => props.url});
    background-size: 100% 110%;
    background-repeat: no-repeat;
    background-position: center;
    outline-style: none;
    border: 0px;
`;
export const PartnerTitle = styled.p`
    font-size: ${props => props.size};
    font-family: 'Ethnocentric Rg';
    color: white;
    margin: 0px;
    padding: 0px;
    margin-bottom: 0px;
    outline-color: blue;
    @media (max-width: 815px){
        width: 100%;
        text-align: center;
    }
`;
export const SrcLink = styled.a`
    font-size: ${props => props.size};
    font-family: 'Barlow Condensed', sans-serif;
    color: #ff255f;
    margin: 0px;
    padding: 0px;
    margin-bottom: 0px;
`;