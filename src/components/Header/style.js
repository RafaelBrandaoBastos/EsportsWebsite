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
    @media (max-width: 815px){
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
    @media (min-width: 815px){
        margin: 30px;
    }
`;





export const HeaderListMobile = styled.div`
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0.8);
    @media (min-width: 815px){
        display: none;
    }
`;
export const HeaderOptionMobile = styled.a`
    color: white;
    margin: 10px;
    outline-color: white;
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
    @media (min-width: 815px){
        display: none;
        ext-align: center;
    }
    @media (max-width: 710px){
        width: 30%;
        height: 25%;
        margin: 0px;
        ext-align: center;
    }
    @media (max-width: 500px){
        width: 50%;
        text-align: left;
    }
    @media (max-width: 370px){
        font-size: 10px;
    }
`;
