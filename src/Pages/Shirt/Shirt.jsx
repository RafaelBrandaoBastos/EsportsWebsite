import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  useLocation,
} from "react";
import { Tweet } from "react-tweet";
import { useWindowScroll } from "react-use";
import { LanguageContext } from "../../contexts/LanguageProvider";
import { Container, ContainerLoad, Card, SubContainer } from "./style";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Shirt = () => {
  window.onload = codeAddress;
  function codeAddress() {
    //window.open("https://forms.gle/GvwqCNfnhpWjGk2G6");   
  }
  return (
    <>
      <Container className="scroll-container">
      <Header
          homeStyle="none"
          eventosStyle="none"
          lineupsStyle="none"
          parceirosStyle="none"
          staffStyle="none"
          camisasStyle="selected"
          organizerStyle="none"
        />
        <SubContainer>
          <Card>
          <Tweet id="1744428447877800101" />
          </Card>
        </SubContainer>
        <Footer />
      </Container>
      <ContainerLoad>
        <Spinner />
      </ContainerLoad>
    </>
  );
};

export default Shirt;
