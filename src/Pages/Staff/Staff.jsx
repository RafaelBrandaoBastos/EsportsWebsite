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
import brands from "../../assets/brands.png";
import bydo from "../../assets/bydo.png";
import nabuti from "../../assets/nabuti.png";
import rekom from "../../assets/rekm.png";
import scorn from "../../assets/scrn.jpg";
import raicon from "../../assets/raicon.jpg";
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
          staffStyle="selected"
          organizerStyle="none"
          inimigosStyle="none"
        />
        <SubContainer>
          {/* <Card>
            <StaffImg src={nabuti}></StaffImg>
            <Title>CEO</Title>
            <Subtitle>Chief Executive Officer</Subtitle>
            <Subtitle>Gabriel "Nabuti" Terra</Subtitle>
            <Link
              size={"23px"}
              href="https://twitter.com/NabutiJinja"
              target="_blank"
            >
              @NabutiJinja
            </Link>
          </Card> */ }

          <Card>
            <StaffImg src={bydo}></StaffImg>
            <Title>COO</Title>
            <Subtitle>Chief Operations Officer</Subtitle>
            <Subtitle>Bernardo "Bydo" Miranda</Subtitle>
            <Link
              size={"23px"}
              href="https://twitter.com/TheBydo"
              target="_blank"
            >
              @TheBydo
            </Link>
          </Card>

          <Card>
            <StaffImg src={brands}></StaffImg>
            <Title>CMO</Title>
            <Subtitle>Chief Marketing Officer / Dev</Subtitle>
            <Subtitle>Rafael "Brandis" Brandão </Subtitle>
            <Link
              size={"23px"}
              href="https://www.instagram.com/rafaelbrandsb/"
              target="_blank"
            >
              @rafaelbrandsb
            </Link>
          </Card>

          <Card>
            <StaffImg src={rekom}></StaffImg>
            <Title>ROM</Title>
            <Subtitle>Regional Operations Manager</Subtitle>
            <Subtitle>Gustavo "Rekom" Mariz </Subtitle>
            <Link
              size={"23px"}
              href="https://x.com/_Rekom"
              target="_blank"
            >
              @_Rekom
            </Link>
          </Card>
          
          <Card>
            <StaffImg src={scorn}></StaffImg>
            <Title>NOM</Title>
            <Subtitle>National Operations Manager</Subtitle>
            <Subtitle>Daniel "Scorn" Bitencourt </Subtitle>
            <Link
              size={"23px"}
              href="https://x.com/Scorn4444"
              target="_blank"
            >
              @Scorn4444
            </Link>
          </Card>          

          <Card>
            <StaffImg src={raicon}></StaffImg>
            <Title>ROM</Title>
            <Subtitle>Regional Operations Manager</Subtitle>
            <Subtitle>Juno "Raicon" Orin</Subtitle>
            <Link
              size={"23px"}
              href="https://x.com/Raicon_1"
              target="_blank"
            >
              @Raicon_1
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
