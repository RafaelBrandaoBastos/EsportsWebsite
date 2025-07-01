import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import PlayerCardComponent from "../../components/PlayerCard/PlatyerCard";
import {
  Container,
  ContainerLoad,
  Card,
  SubContainer,
  Title,
  Subtitle,
  StaffImg,
  Link,
} from "./style";
import "./style.js";
import glitch from "../../assets/players/GLITCH.gif";
import preso from "../../assets/inimigos/preso.png";
import eon from "../../assets/inimigos/eon.png";
import doente from "../../assets/inimigos/doente.png";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer.jsx";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";

const LineUps = () => {
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
          eventosStyle="none"
          lineupsStyle="none"
          parceirosStyle="none"
          staffStyle="none"
          organizerStyle="none"
          inimigosStyle="selected"
        />
        <SubContainer>
          {/* <Card>
            <StaffImg src={preso}></StaffImg>
            <Title>Nabuti</Title>
            <Subtitle>Criminoso de guerra</Subtitle>
            <Subtitle>"Eu me demito e agora jogo pela PDR"</Subtitle>
            <Link
              size={"23px"}
              href="https://twitter.com/NabutiJinja"
              target="_blank"
            >
              @NabutiJinja
            </Link>
          </Card>  */}

          <Card>
            <StaffImg src={eon}></StaffImg>
            <Title>Eon</Title>
            <Subtitle>
              "Saudades da época que ser player do Grupo implicava em ir 0/2
              toda bracket"
            </Subtitle>
            <Link
              size={"23px"}
              href="https://www.twitch.tv/eon_was_taken/clip/PlayfulBrightOwlStoneLightning-VI1SD_diTNkKpPKF"
              target="_blank"
            >
              Adoro Dark Souls 2!
            </Link>
          </Card>

          <Card>
            <StaffImg src={preso}></StaffImg>
            <Title>Nabuti</Title>
            <Subtitle>Ex-CEO</Subtitle>
            <Subtitle>Preso por enrolar as camisas.</Subtitle>
            <Link
              size={"23px"}
              href="https://x.com/NabutiJinja/status/1917716807890112562"
              target="_blank"
            >
              Jogo Street Fighter!
            </Link>
          </Card>

          <Card>
            <StaffImg src={doente}></StaffImg>
            <Title>Arqué</Title>
            <Subtitle>Se infiltrou na operação </Subtitle>
            <Subtitle>Mas conseguiu quase morrer malhando wtf</Subtitle>
            <Link
              size={"23px"}
              href="https://x.com/Arque33/status/1927188702083641851"
              target="_blank"
            >
              Não é possível um trem desses
            </Link>
          </Card>

          {/* <Card>
            <StaffImg src={glitch}></StaffImg>
            <Title>Zt#G$aF%C</Title>
            <Subtitle>по завершении группы киберспорта</Subtitle>
            <Subtitle> 유미 씨발 </Subtitle>
            <Link
              size={"23px"}
              href="https://x.com/Enieeconz/status/1871347896899269047"
              target="_blank"
            >
             Skibidi スキビディ ザテ
            </Link>
          </Card> */}
        </SubContainer>
        <Footer />
        <Arrow scroll={y} height={height} />
      </Container>
      <ContainerLoad>
        <Spinner />
      </ContainerLoad>
    </>
  );
};

export default LineUps;
