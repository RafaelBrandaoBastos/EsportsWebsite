import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import {
  Container,
  ContainerLoad,
  Card,
  BannerComponent,
  TextCard,
  SubContainer,
  ImgComponent,
  Text
} from "./style";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import banner from "../../assets/banner.png";

const Home = () => {

    const { x, y } = useWindowScroll();
    const [scrolled, setScrolled] = useState(0);
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
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
          homeStyle="selected"
          eventosStyle="none"
          lineupsStyle="none"
          parceirosStyle="none"
        />
        <SubContainer>
          <Card>
              <BannerComponent src={banner} alt="Banner" />
              <TextCard>
                <Text>A Grupo Esports é uma organização de jogos eletronicos que se destaca pela sua habilidade e paixão pela competição virtual. Atualmente com representantes no cenario brasileiro de Guilty Gear Strive, Counter-Strike: Global Offensive e jogos de luta variados. Unidos, os membros do Grupo eSports dedicam-se incansavelmente a aprimorar suas habilidades e alcançar o sucesso nas competições virtuais.</Text>
              </TextCard>
          </Card>
        </SubContainer>
        <Footer />
        <Arrow scroll={y} height={height}/>
      </Container>
      <ContainerLoad>
        <Spinner />
      </ContainerLoad>
    </>
  );
};

export default Home;
