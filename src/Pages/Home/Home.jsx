import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { Container, ContainerLoad, Card, BannerComponent, TextCard } from "./style";
import "./style.js";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";
import Text from "../../components/Text/Text";
import banner from "../../assets/banner.png"

const Eventos = () => {
  return (
    <>
      <Container>
        <Header
          homeStyle="selected"
          eventosStyle="none"
          lineupsStyle="none"
          streamersStyle="none"
        />
        <Card>
            <BannerComponent src={banner} alt ="Banner"/>
            <TextCard>
                <Text ctext="A Grupo Esports é uma organização de jogos eletronicos que se destaca pela sua habilidade e paixão pela competição virtual. Atualmente com representantes no cenario brasileiro de Guilty Gear Strive, Counter-Strike: Global Offensive e jogos de luta variados. Unidos, os membros do Grupo eSports dedicam-se incansavelmente a aprimorar suas habilidades e alcançar o sucesso nas competições virtuais." />
            </TextCard>
        </Card>
      </Container>
      <ContainerLoad>
        <Spinner />
      </ContainerLoad>
    </>
  );
};

export default Eventos;
