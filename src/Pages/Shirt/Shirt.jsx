import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import { Tweet } from "react-tweet";
import { Container, ContainerLoad, Card, SubContainer } from "./style";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Shirt = () => {

  window.onload = codeAddress;
  function codeAddress() {
    window.open("https://forms.gle/GvwqCNfnhpWjGk2G6");
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
