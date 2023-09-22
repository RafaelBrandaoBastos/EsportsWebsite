import styled from "styled-components";

export const ArrowComponent = styled.img`
    width: 20px;
    height: 20px;
    animation: move 800ms linear infinite;
    @keyframes move {
        0% { transform: translate(0px, 0px); }
        50% { transform: translate(0px, 5px); }
        100% { transform: translate(0px, 0px); }
    }
}
`;


export const Container = styled.div`
    top: 96%;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: flex-start;
    padding-top: .5%;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 2;
`;