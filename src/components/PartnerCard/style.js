import styled from "styled-components";

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

export const PartnerCardComponent = styled.div`
    margin: 10px;
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
    margin-bottom: 20px;
    @media (max-width: 815px){
        width: 50%;
        height: auto;
        padding: 30px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 0px;
        margin-bottom: 20px;
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
    word-break: break-all;
    @media (max-width: 815px){
        padding-left: 0px;
        align-items: center;
        justify-content: center;  
        max-width: 100%;   
        width: 100%;       
    }
`;

export const ImageComponent = styled.img`
    width: 70%;
    height: auto;
    max-width: 200px;
    background-image: url(${props => props.url});
    background-size: 100% 110%;
    background-repeat: no-repeat;
    background-position: center;
    outline-style: none;
    border: 0px;
    padding: 20px;
`;
export const PartnerTitle = styled.p`
    font-size: ${props => props.size};
    font-family: 'Ethnocentric Rg';
    color: white;
    margin: 0px;
    padding: 0px;
    margin-bottom: 0px;
    outline-color: blue;
    word-break: break-all;
    @media (max-width: 500px){
        width: 100%;
        text-align: center;
        font-size: 20px;
    }
`;
export const SrcLink = styled.a`
    font-size: ${props => props.size};
    font-family: 'Barlow Condensed', sans-serif;
    color: #ff255f;
    margin: 0px;
    padding: 0px;
    margin-bottom: 0px;
    word-break: break-word;
`;