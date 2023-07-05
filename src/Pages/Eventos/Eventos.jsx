import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import { useSnapCarousel } from "react-snap-carousel";
import {
  Container,
  ContainerLoad,
  Card,
  Card2,
  BannerComponent,
  TextCard,
  TextCard2,
  SubContainer,
  ImgComponent,
  Colocacoes,
  ColocSub,
  Text,
  Carousel,
  CarouselUl,
  CarouselLi
} from "./style";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import banner from "../../assets/banner.png";
import gp from "../../assets/gp.png";
import i1  from "../../assets/1.png";
import i2  from "../../assets/2.png";
import i3  from "../../assets/3.png";

const Eventos = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();

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
          streamersStyle="none"
        />
        <SubContainer>
          <Card>
            <TextCard>
              <Text>
                A Rinha de Prata Oficial do Grupo é um evento trimestral aberto
                para membros da Grupo Esports que não estão familiarizados com o
                jogo escolhido.
              </Text>
              <Colocacoes>
                <Text>
                  Top 3 da Rinha de Prata 1 <br></br>1º - Sushi<br></br>2º -
                  Ferislaw<br></br>2º - Ferislaw
                </Text>
                <Text>
                  Premiação da Rinha de Prata 1 <br></br>1º - Coquinha<br></br>
                  2º - Escova de dentes<br></br>3º - Duas paçocas
                </Text>
                <>
                  <Carousel>
                    <CarouselUl
                      ref={scrollRef}
                    >
                      {Array.from({ length: 3 }).map((_, i) => (
                        <CarouselLi
                          style={{flexShrink: 0}}
                        >
                          {i === 0 && <ImgComponent src={i1}/>}
                          {i === 1 && <ImgComponent src={i2}/>}
                          {i === 2 && <ImgComponent src={i3}/>}
                        </CarouselLi>
                      ))}
                    </CarouselUl>
                    <Text>
                      {activePageIndex + 1} / {pages.length}
                    </Text>
                    {activePageIndex > 0 && <button onClick={() => prev()}>Prev</button>}
                    {activePageIndex < 2 && <button onClick={() => next()}>Next</button>}
                  </Carousel>
                </>
              </Colocacoes>
            </TextCard>
          </Card>

          <Card2></Card2>
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

export default Eventos;
