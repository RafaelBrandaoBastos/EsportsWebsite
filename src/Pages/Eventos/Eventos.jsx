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

import photo1ug from "../../assets/ultra-goat/photo1.png"
import photo2ug from "../../assets/ultra-goat/photo2.png"
import photo3ug from "../../assets/ultra-goat/photo3.png"

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
  }, [y]);

  return (
    <>
    
      <Container className="scroll-container">
        <Header
          homeStyle="none"
          eventosStyle="selected"
          lineupsStyle="none"
          parceirosStyle="none"
          staffStyle="none"
        />
        <SubContainer>
        <EventCard
            title={"Ultra Goat"}
            text={
              "Evento presencial da Ultra Arcade em parceria com o GOAT Gaming Center"
            }
            position={"Colocações Notáveis: \n 4º Uni[cl-r] - Nabuti \n 5º GGST / JOJO - Nabuti \n 5º Smash B / 7º JOJO - Rekom"}
            date={"22/10/2023"}
            photocount={3}
            foto1={photo1ug}
            foto2={photo2ug}
            foto3={photo3ug}
          />
        <EventCard
            title={"Rinha de Prata 3"}
            text={
              "A terceira rinha de prata teve como jogo DNF Duel. Esta rinha contou com o novo formato de batalhas em DUPLA! Uma ft2 onde ambos da dupla precisam vencer. E no final, as 2 melhores duplas se enfrentaram em um incrível top 4."
            }
            position={"Top 3: \n 1º-Fernando \n 2º-Mingau \n 3º-HTravel"}
            date={"10/07/2023"}
            photocount={3}
            foto1={photo1r3}
            foto2={photo2r3}
            foto3={photo3r3}
          />
        <EventCard
            title={"Molaço - Aniversário & Despedida"}
            text={
              "O evento aconteceu no Goat Gaming Center, onde nossos guerreiros alcançaram o pódio e trouxeram resultados sólidos em diversos jogos."
            }
            position={`Colocações Notáveis: \n 3º Strive Moddado - Bydo \n 5º Granblue - Nabuti \n 4º Mystery Tournament - Nabuti`}
            date={"06/05/2023"}
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
            position={"Top 3: \n 1º-Lima \n 2º-Leo \n 3º-Fefe"}
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
              "A primeira Rinha de todas. O jogo foi Guilty Gear -STRIVE-, foi nessa edição que costumes clássicos da rinha surgiram: Premiação excepcional e participantes que nunca jogaram o jogo da vez."
            }
            position={"Top 3: \n 1º-Sushi \n 2º-Fefe\n 3º-Migas"}
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
