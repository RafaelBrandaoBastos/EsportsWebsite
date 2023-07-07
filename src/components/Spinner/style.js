import styled from "styled-components";

export const SpinnerComponent = styled.div`
    border: 10px solid #323232;
    border-top: 10px solid #ff255f;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
`;
export const SpinnerContainer = styled.div`
    width: 60px;
    height: 60px;
`;