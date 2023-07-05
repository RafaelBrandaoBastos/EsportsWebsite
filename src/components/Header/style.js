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
`;

export const HeaderList = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    margin-left: 30px;
    margin-left: 30px;
    width: auto;
    &:hover {
        border: white;
    }
`;