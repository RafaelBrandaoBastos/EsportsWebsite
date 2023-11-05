import styled from "styled-components";


export const HeaderComponent = styled.div`
    width: 100%;
    height: 90px;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.8);
    border: 0;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 2;
    @media (max-width: 815px){
        height: auto;
    }
    @media (max-width: 710px){
        justify-content: space-around;
        align-items: center;
    }
`;

export const HeaderList = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 950px){
        display: none;
    }
`;
export const HeaderOption = styled.a`
    color: white;
    height: 100%;
    margin-left: 60px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Ethnocentric Rg';
    text-decoration: none;
    .none {
        &:hover {
            text-decoration: underline;
        }
    }
    .selected {
        color: #ff255f;
        &:hover {
            text-decoration: underline #ff255f;
        }
    }
`;
export const LogoComponent = styled.img`
    height: 50px;
    width: auto;
    margin-left: 50px;
    position: relative;
    @media (max-width: 950px){
        left: 2%;
        margin-left: 0px;
        position: absolute;
    }
`;





export const HeaderListMobile = styled.div`
    width: 80%;
    display: flex;
    margin-left: 0px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media (min-width: 950px){
        display: none;
    }
    @media (max-width: 500px){
        width: 70%;
        margin-left: 40px;
    }
    @media (max-width: 370px){
        width: 50%;
        margin-left: 30px;
    }
    @media (max-width: 370px){
        width: 70%;
        margin-left: 60px;
    }
`;
export const HeaderOptionMobile = styled.a`
    color: white;
    margin: 10px;
    font-size: 18px;
    text-align: center;
    font-family: 'Ethnocentric Rg';
    text-decoration: none;
    .none {
        &:hover {
            text-decoration: underline;
        }
    }
    .selected {
        color: #ff255f;
        &:hover {
            text-decoration: underline #ff255f;
        }
    }
    @media (min-width: 950px){
        display: none;
        text-align: center;
    }
    @media (max-width: 710px){
        width: 32%;
        height: 25%;
        margin: 0px;
        text-align: center;
    }
    @media (max-width: 500px){
        width: 50%;
        text-align: left;
    }
    @media (max-width: 370px){
        width: 50%;
        font-size: 12px;
    }
`;
