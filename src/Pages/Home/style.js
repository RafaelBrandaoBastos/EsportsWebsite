import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #141414;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
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
  width: 75%;
  min-height: 78vh;
  max-width: 1200px;
  display: flex;
  height: 1500px;
  flex-wrap: no-wrap;
  margin-top: 25px;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 1200px) {
    width: 100%;
    flex-wrap: wrap;
    max-width: none;
    align-items: center;
    height: auto;
  }
`;
export const Text = styled.p`
  font-size: 23px;
  font-family: "Barlow Condensed", sans-serif;
  color: white;
  padding: 0px;
  padding: 0px;
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
  display: flex;  
  max-width: 60%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
  @media (max-width: 850px) {
    width: 90%;
    height: auto;
    max-width: 100%;
  }
`;

export const TextCard = styled.div`
  width: 100%;
  text-align: justify;
  margin: 0px;
  padding: 0px;
`;

export const BannerComponent = styled.img`
  max-width: 1200px;
  width: 75%;
  margin-top: 150px;
  @media (max-width: 1200px) {
    width: 100%;
    max-width: none;
    margin-top: 90px;
  }
  @media (max-width: 825px) {
    margin-top: 78px;
  }
  @media (max-width: 700px) {
    margin-top: 115px;
  }
  @media (max-width: 370px) {
    margin-top: 75px;
  }
`;

export const ImgComponent = styled.img`
  width: 100%;
`;
export const TweetCard = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  alin-items: center;
  @media (max-width: 850px) {
    width: 90%;
    height: auto;
    align-items: center;
    justify-content: center;
  }
`;
export const Title = styled.p`
    color: white;
    font-size: 25px;
    font-family: 'Ethnocentric Rg';
    text-decoration: none;
    text-align: start;
    width: 100%;
    display: flex;
`;

export const IframeComponent = styled.iframe`
  width: 48%;
  height: 380px;
  frameborder: 0;
  @media (max-width: 850px) {
    width: 100%;
    margin: 50px 0px 25px 0px;
    height: 86vw;
  }
`;