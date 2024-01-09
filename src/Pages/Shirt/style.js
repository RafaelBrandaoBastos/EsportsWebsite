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
  @media (max-width: 1120px) {
    justify-content: flex-start;
  }
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
export const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1500px;
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 130px;
  align-items: center;
  @media (max-width: 1500px) {
    flex-direction: column;
  }
  @media (max-width: 1120px) {
    padding-top: 80px;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  outline-style: solid;
  outline-color: rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  max-width: 600px;
`;
