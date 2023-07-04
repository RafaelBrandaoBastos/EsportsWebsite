import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { Container, ContainerLoad } from "./style";
import "./style.js";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";
import Text from "../../components/Text/Text";

const Eventos = () => {
  return (
    <>
      <Container>
        <Header
          homeStyle="none"
          eventosStyle="none"
          lineupsStyle="selected"
          streamersStyle="none"
        />
        <Text text = "LineUps"/>
      </Container>
      <ContainerLoad>
        <Spinner />
      </ContainerLoad>
    </>
  );
};

export default Eventos;
