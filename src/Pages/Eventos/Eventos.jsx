import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import { useSnapCarousel } from "react-snap-carousel";
import { Container, ContainerLoad, SubContainer } from "./style";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import EventCard from "../../components/EventCard/EventCard";

import photo1r1 from "../../assets/rinha-de-prata-1/photo1.png"
import photo2r1 from "../../assets/rinha-de-prata-1/photo2.png"
import photo3r1 from "../../assets/rinha-de-prata-1/photo3.png"

import photo1r2 from "../../assets/rinha-de-prata-2/photo1.png"
import photo2r2 from "../../assets/rinha-de-prata-2/photo2.png"
import photo3r2 from "../../assets/rinha-de-prata-2/photo3.png"
import photo4r2 from "../../assets/rinha-de-prata-2/photo4.png"

import photo1front from "../../assets/front-to-front/photo1.png"
import photo2front from "../../assets/front-to-front/photo2.png"
import photo3front from "../../assets/front-to-front/photo3.png"

import photo1molaco from "../../assets/molaco/photo1.png"
import photo2molaco from "../../assets/molaco/photo2.png"
import photo3molaco from "../../assets/molaco/photo3.png"

import photo1r3 from "../../assets/rinha-de-prata-3/photo1.png"
import photo2r3 from "../../assets/rinha-de-prata-3/photo2.png"
import photo3r3 from "../../assets/rinha-de-prata-3/photo3.png"

const Eventos = () => {
  const [carousel1, setcarousel1] = useState(0);
  const [carousel2, setcarousel2] = useState(0);
  const [carousel3, setcarousel3] = useState(0);
  const [carousel4, setcarousel4] = useState(0);
  const [carousel5, setcarousel5] = useState(0);

  function setcarousel1setter(x) {
    if (x < 4 && x > -1) {
      setcarousel1(x);
    }
  }
  function setcarousel2setter(x) {
    if (x < 5 && x > -1) {
      setcarousel2(x);
    }
  }
  function setcarousel3setter(x) {
    if (x < 4 && x > -1) {
      setcarousel3(x);
    }
  }
  function setcarousel4setter(x) {
    if (x < 3 && x > -1) {
      setcarousel4(x);
    }
  }
  function setcarousel5setter(x) {
    if (x < 3 && x > -1) {
      setcarousel5(x);
    }
  }

  const { x, y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((y / height) * 100);
    console.log("/");
  }, [y]);

  return (
    <>
    
      <Container className="scroll-container">
        <Header
          homeStyle="none"
          eventosStyle="selected"
          lineupsStyle="none"
          parceirosStyle="none"
        />
        <SubContainer>
        <EventCard
            title={"Rinha de Prata 3"}
            text={
              "A terceira rinha de prata teve como jogo DNF Duel."
            }
            position={"Top 3: 1º - Fernando / 2º - Migas / 3º - Henrique"}
            award={"Premiação: 1º - Lâmpada / 2º - Uno / 3º - Mini Panetone"}
            date={"10/07/2023"}
            photocount={3}
            foto1={photo1r3}
            foto2={photo2r3}
            foto3={photo3r3}
          />
        <EventCard
            title={"Molaço - Aniversário & Despedida"}
            text={
              "O evento aconteceu no Goat Gaming Center, onde nossos guerreiros alcançaram o pódio e trouxeram resultados sólidos."
            }
            position={"Colocações Notáveis: 3º Strive Moddado - Bydo / 5º Granblue - Nabutijinja / 4º Mystery Tournament - Nabutijinja"}
            award={""}
            date={"25/06/2023"}
            photocount={3}
            foto1={photo1molaco}
            foto2={photo2molaco}
            foto3={photo3molaco}
          />
          <EventCard
            title={"Front to Front"}
            text={
              "A Grupo Esports participou do campeonato de Counter Strike Global Ofensive chamado Front to Front, no Minas Shopping. Nossos guerreiros jogaram bravamente porém não conseguiram avançar da primeira fase contra TopPalau."
            }
            position={"Colocação: Eliminado na Fase de Grupos"}
            award={""}
            date={"28/05/2023"}
            photocount={3}
            foto1={photo1front}
            foto2={photo2front}
            foto3={photo3front}
          />
        <EventCard
            title={"Rinha de Prata 2"}
            text={
              "A segunda Rinha teve como jogo Granblue Fantasy Versus. Essa foi a maior rinha até o momento contando com convidados especiais e uma resenha completa."
            }
            position={"Top 3: 1º-Lima / 2º-Leo / 3º-Fefe"}
            award={""}
            date={"19/01/2023"}
            photocount={4}
            foto1={photo1r2}
            foto2={photo2r2}
            foto3={photo3r2}
            foto4={photo4r2}
          />
          <EventCard
            title={"Rinha de Prata 1"}
            text={
              "A segunda Rinha teve como jogo Granblue Fantasy Versus. Essa foi a maior rinha até o momento contando com convidados especiais e uma resenha completa."
            }
            position={"Top 3: 1º - Lima / 2º - Leo / 3º - Fefe"}
            award={"Premiação: 1º - Coquinha / 2º - Escova de dentes / 3º - Duas paçocas"}
            date={"27/06/2022"}
            photocount={3}
            foto1={photo1r1}
            foto2={photo2r1}
            foto3={photo3r1}
          />
          <Footer />
        </SubContainer>
        <Arrow scroll={y} height={height} />
      </Container>
      <ContainerLoad>
        <Spinner />
      </ContainerLoad>
    </>
  );
};

export default Eventos;
