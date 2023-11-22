import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
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
  @media (max-width: 950px) {
    justify-content: flex-start;
  }
`;
export const SubContainer = styled.div`
  width: 75%;
  max-width: 1200px;
  display: flex;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 150px;
  height: 100%;
  outline-color: white;
  @media (max-width: 1050px) {
    width: 90%;
  }
  @media (max-width: 950px) {
    width: 100%;
    flex-wrap: wrap;
    max-width: none;
    align-items: flex-start;
    height: auto;
    padding-top: 0px;
  }
`;
export const Text = styled.p`
  font-size: 23px;
  font-family: "Barlow Condensed", sans-serif;
  color: white;
  padding: 0px;
  padding: 0px;
`;
export const Title = styled.p`

    color: white;
    font-size: 25px;
    font-family: 'Ethnocentric Rg';
    text-decoration: none;
    text-align: start;
    width: 100%;
    display: flex;
    @media (max-width: 400px) {
      font-size: 15px;
    }
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
  outline-color: blue;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    height: auto;
    max-width: 90%;
  }
`;

export const TextCard = styled.div`
  width: 100%;
  
  margin: 0px;
  padding: 0px;
`;

export const BannerComponent = styled.img`
  max-width: 1200px;
  width: 100%;
  margin-bottom: 35px;
  @media (max-width: 1200px) {
    width: 100%;
    max-width: none;
  }
`;

export const ImgComponent = styled.img`
  width: 100%;
`;
export const TweetCard = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  alin-items: center;
  height: 100%;
  @media (max-width: 850px) {
    width: 90%;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 300px) {
    display: none;
  }
`;

export const IframeComponent = styled.iframe`
  width: 100%;
  height: 450px;
  margin: 25px 0px 50px 0px;
  frameborder: 0;
  @media (max-width: 850px) {
    width: 100%;
    margin: 50px 0px 25px 0px;
    height: 400px;
  }
`;

export const Spacing = styled.div`
  height: ${props => props.spacing}px;
  width: 100%;
  display: block;
`;