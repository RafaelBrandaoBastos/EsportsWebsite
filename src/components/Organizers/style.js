import styled from "styled-components";

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 25px;
  font-family: "Barlow Condensed", sans-serif;
  color: white;
  @media (max-width: 815px) {
    width: 100%;
    text-align: center;
  }
`;

export const OrganizerCardComponent = styled.div`
  margin: 10px;
  display: flex;
  max-width: 700px;
  height: 250px;
  align-items: center;
  justify-content: center;
  padding: 30px;
  flex-wrap: nowrap;
  outline: solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  margin-bottom: 20px;

  @media (max-width: 950px) {
    width: 90%;
    height: auto;
    padding: 30px;
    flex-wrap: wrap;
    text-align: center;
    margin: 0 0 20px 0;
  }
`;

export const TextCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 20px;
  max-width: 75%;
  word-break: break-word;

  @media (max-width: 815px) {
    padding-left: 0;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    width: 100%;
  }
`;

export const ImageComponent = styled.img`
  width: 70%;
  height: auto;
  max-width: 200px;
  background-image: url(${(props) => props.url});
  background-size: 100% 110%;
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
  padding: 20px;
`;

export const OrganizerTitle = styled.p`
  font-size: ${(props) => props.size};
  font-family: "Ethnocentric Rg";
  color: white;
  padding: 5px;
  margin: 0 0 0 0;
  word-break: break-word;

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
`;

export const SrcLink = styled.a`
  font-size: ${(props) => props.size};
  font-family: "Barlow Condensed", sans-serif;
  color: #ff255f;
  margin: 0;
  padding: 5px ;
  word-break: break-word;
`;
