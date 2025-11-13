import styled from "styled-components";
import cardbackground from "../../assets/players/cardBackground.png";

export const Container = styled.div`
  width: 200px;
  height: 300px;
  background-image: url(${cardbackground});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  z-index: 0;
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 50px;
  @media (max-width: 750px) {
    height: auto;
    width: 80%;
    max-width: 400px;
    margin: 30px 0px;
  }
  @media (max-width: 450px) {
    height: auto;
    width: 80%;
    max-width: 400px;
    max-height: 600px;
  }
`;

export const PlayerCardComponent = styled.img`
  width: 100%;
  height: auto;
  background-image: url(${({ player }) => player});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  max-width: 600px;
  @media (max-width: 450px) {
    height: auto;
  }
`;

export const Text = styled.p`
  color: black;
  position: absolute;
  top: ${(props) => props.top}%;
  height: 40px;
  width: 100%;
  right: ${(props) => props.right}px;
  transform: rotate(32deg);
  z-index: 2;
  font-size: ${(props) => props.size}px;
  font-family: "Ethnocentric Rg";
  text-align: center;
  @media (max-width: 750px) {
    top: ${(props) => props.top - 3}%;
    font-size: ${(props) => props.size * 2}px;
  }
  @media (max-width: 616px) {
    font-size: ${(props) => props.size / 0.6}px;
    top: ${(props) => props.top - 1.5}%;
  }
  @media (max-width: 550px) {
    font-size: ${(props) => props.size / 0.7}px;
    top: ${(props) => props.top - 1.5}%;
  }
  @media (max-width: 460px) {
    font-size: ${(props) => props.size / 0.9}px;
    top: ${(props) => props.top - 1.5}%;
  }
  @media (max-width: 370px) {
    font-size: ${(props) => props.size / 0.99}px;
    top: ${(props) => props.top - 1.5}%;
  }
  @media (max-width: 340px) {
    font-size: ${(props) => props.size / 1.2}px;
    top: ${(props) => props.top - 1.5}%;
  }
  @media (max-width: 280px) {
    font-size: ${(props) => props.size / 1.5}px;
    top: ${(props) => props.top - 1.5}%;
  }
`;
export const Icon = styled.img`
  width: 50px;
  position: absolute;
  padding: 10px;  `
;
export const Flag = styled.img`
  width: 20px;
  position: absolute;
  top: 4.5px;
  right: 6px;
  transform: rotate(33deg);
`;

