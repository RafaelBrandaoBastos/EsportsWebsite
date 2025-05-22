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
            <StaffImg src={glitch}></StaffImg>
            <Title>N✦⇌✠u☠t▓</Title>
            <Subtitle>trGEo duspl -oi P oorfme</Subtitle>
            <Subtitle>r@euc!4p 2d%m §aopsî</Subtitle>
            <Link
              size={"23px"}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              Mais informações
            </Link>
          </Card>


            <Card>
            <StaffImg src={glitch}></StaffImg>
            <Title>%eA~q^r</Title>
            <Subtitle>~pnoçae@r d!anlrt%ifo</Subtitle>
            <Subtitle>01101001 01101110 01110110 01100001 01100100 01101001 01110101 00100000 01101111 00100000 01001000 01010001
</Subtitle>
            <Link
              size={"23px"}
              href="https://www.youtube.com/watch?v=9ELuywjE9ck"
              target="_blank"
            >
              aAaAA
            </Link>
          </Card>

            <Card>
            <StaffImg src={glitch}></StaffImg>
            <Title>Zt#G$aF%C</Title>
            <Subtitle>по завершении группы киберспорта</Subtitle>
            <Subtitle> 유미 씨발 </Subtitle>
            <Link
              size={"23px"}
              href="https://x.com/Enieeconz/status/1871347896899269047"
              target="_blank"
            >
              スキビディ ザテ
            </Link>
          </Card>

        

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
