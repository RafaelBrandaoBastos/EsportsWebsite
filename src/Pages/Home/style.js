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
`;
export const SubContainer = styled.div`
  width: 75%;
  min-height: 78vh;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 1200px) {
    width: 100%;
    flex-wrap: wrap;F
    max-width: none;
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
  max-width: ${props => props.maxwidth};
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: space-around;
  margin-top: 50px;
  @media (max-width: 850px) {
    width: 90%;
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
  margin-top: 100px;
  @media (max-width: 1200px) {
    width: 100%;
    max-width: none;
  }
`;

export const ImgComponent = styled.img`
  width: 100%;
`;
export const TweetContainer = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  alin-items: center;
  @media (max-width: 850px) {
    width: 70%;
  }
`;
export const Title = styled.p`
    color: white;
    font-size: 25px;
    font-family: 'Ethnocentric Rg';
    text-decoration: none;
`;