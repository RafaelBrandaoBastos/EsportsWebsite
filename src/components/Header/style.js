import styled from "styled-components";


export const HeaderComponent = styled.div`
    width: 100%;
    height: 90px;
    margin: 0;
    border: 0;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.8);
    @media (max-width: 950px){
        background-color: rgba(0, 0, 0, 0);
        height: auto;
        width: auto;
        justify-content: left;
        align-items: left;
        display: block;
    }
    .hide {
        display: none;
        color: #ff255f;
    }
    .fade {
        background-color: rgba(5, 5, 5, 5);
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
    @media (max-width: 950px){
        display: none;
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



export const LogoMobileComponent = styled.img`
    width: 60px;
    height: 60px;
    margin: 30px 20px 0px;
    background-image: url(${({icon}) => icon});
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    @media (min-width: 950px){
        display: none;
    }
`;
export const HeaderListMobile = styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    @media (min-width: 950px){
        display: none;
    }
`;

export const HeaderOptionMobile = styled.a`
    color: white;
    padding: 10px 20px 0px 20px;
    font-size: 18px;
    text-align: left;
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
    }
`;