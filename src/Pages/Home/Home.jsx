import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { Tweet } from "react-tweet";
import { useWindowScroll } from "react-use";
import {
  Container,
  ContainerLoad,
  Card,
  BannerComponent,
  TextCard,
  SubContainer,
  ImgComponent,
  Text,
  Title,
  TweetCard,
  Spacing,
  IframeComponent,
} from "./style";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer.jsx";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import banner from "../../assets/banner.png";
import sushi from "../../assets/sushi.png";
const Home = () => {
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
          homeStyle="selected"
          eventosStyle="none"
          lineupsStyle="none"
          parceirosStyle="none"
        />
        <SubContainer>
          <BannerComponent src={banner} alt="Banner" />
          <Card>
            <TextCard>
              <Title>Sobre Nós</Title>
              <Text>
                A Grupo Esports é uma organização de jogos eletronicos que se
                destaca pela sua habilidade e paixão pela competição virtual.
                Atualmente com representantes no cenario brasileiro de Guilty
                Gear Strive, Counter-Strike: Global Offensive e jogos de luta
                variados. Unidos, os membros do Grupo eSports dedicam-se
                incansavelmente a aprimorar suas habilidades e alcançar o
                sucesso nas competições virtuais.<br></br>
                <br></br>Com uma mentalidade focada no trabalho em equipe,
                estratégias inovadoras e uma sede constante de aprendizado, a
                Grupo Esports está rapidamente conquistando seu espaço e
                conquistando fãs fervorosos. Com certeza, podemos esperar ver
                muito mais desse time no futuro dos esports.
              </Text>
            </TextCard>
            <Spacing spacing={20}/>
            <ImgComponent src={sushi} />
            <Spacing spacing={50}/>
            <TextCard>
              <Title>Patrocinadores</Title>
              <Text>
                Queremos expressar nossa profunda gratidão aos nossos valiosos
                patrocinadores, LaCoffe e Ultra Arcade. O café excepcional da
                LaCoffe nos energiza para treinos e competições, enquanto os
                controles de alta qualidade da Ultra Arcade aprimoram nossas
                habilidades e nos proporcionam momentos incríveis.
              </Text>
              <IframeComponent src="https://www.instagram.com/ultraarcadebh/embed/"></IframeComponent>
              <IframeComponent src="https://www.instagram.com/lacoffeecafeteria/embed/"></IframeComponent>
            </TextCard>
          </Card>
          <TweetCard>
            <Title>Notícias</Title>
            <Tweet id="1726689197430546815" />
            <Tweet id="1721350093905797586" />
          </TweetCard>
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

export default Home;
