import styled from "styled-components";


export const FooterComponent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-around;
    width: 100%;
    height: 80px;
    background-color: black;
    margin-top: 50px;
`;


export const FooterText = styled.div`
    color: white;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
export const FooterLink = styled.a`
    color: #ff255f;
    width: 40px;
    height: 40px;
    margin: 0px 30px;
    background-image: url(${({logo}) => logo});
    background-size: cover;
    @media (max-width: 400px) {
        margin: 0px 5px;
    }
`;

