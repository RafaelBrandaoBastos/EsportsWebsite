import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import { useSnapCarousel } from "react-snap-carousel";
import {
  Container,
  ContainerLoad,
  Card,
  BannerComponent,
  TextCard,
  SubContainer,
  ImgComponent,
  Colocacoes,
  Text,
  Carousel,
  CarouselUl,
  CarouselLi,
  MarkText,
  CaroulselPrev,
  CaroulselNext,
  SubColoc,
  TitleCard,
  Title,
  CardContent,
  ImageLoader,
} from "./style";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import banner from "../../assets/banner.png";
import gp from "../../assets/gp.png";
import i1 from "../../assets/1.png";
import i2 from "../../assets/2.png";
import i3 from "../../assets/3.png";
import i4 from "../../assets/4.png";
import i5 from "../../assets/5.png";
import i6 from "../../assets/6.png";

const Eventos = () => {
  const [carousel1, setcarousel1] = useState(0);
  const [carousel2, setcarousel2] = useState(0);

  function setcarousel1setter(x) {
    if (x < 4 && x > -1) {
      setcarousel1(x);
    }
  }
  function setcarousel2setter(x) {
    if (x < 4 && x > -1) {
      setcarousel2(x);
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
          streamersStyle="none"
        />
        <SubContainer>
          <Card>
            <TitleCard>
              <Title>Rinha de Prata 1</Title>
            </TitleCard>
            <CardContent>
              <TextCard>
                <Text>
                  A Rinha de Prata Oficial do Grupo é um evento trimestral
                  aberto para membros da Grupo Esports que não estão
                  familiarizados com o jogo escolhido.
                </Text>
                <Colocacoes>
                  <SubColoc>
                    <Text>
                      Top 3<br></br>1º - Sushi<br></br>2º - Ferislaw<br></br>3º
                      - Mingas
                    </Text>
                  </SubColoc>
                  <SubColoc>
                    <Text>
                      Premiação<br></br>1º - Coquinha
                      <br></br>
                      2º - Escova de dentes<br></br>3º - Duas paçocas
                    </Text>
                  </SubColoc>
                </Colocacoes>
              </TextCard>
              <Carousel>
                <ImageLoader>
                  <Spinner />
                </ImageLoader>
                {carousel1 === 0 && <ImgComponent src={i1} />}
                {carousel1 === 1 && <ImgComponent src={i2} />}
                {carousel1 === 2 && <ImgComponent src={i3} />}

                <MarkText>{carousel1 + 1}/3</MarkText>
                {carousel1 > 0 && (
                  <CaroulselPrev
                    onClick={() => setcarousel1setter(carousel1 - 1)}
                  >
                    Prev
                  </CaroulselPrev>
                )}
                {carousel1 < 2 && (
                  <CaroulselNext
                    onClick={() => setcarousel1setter(carousel1 + 1)}
                  >
                    Next
                  </CaroulselNext>
                )}
              </Carousel>
            </CardContent>
          </Card>

          <Card>
            <TitleCard>
              <Title>Rinha de Prata 2</Title>
            </TitleCard>
            <CardContent>
              <TextCard>
                <Text>
                  A segunda Rinha teve como jogo Granblue Fantasy Versus. Essa
                  foi a maior rinha até o momento.
                </Text>
                <Colocacoes>
                  <SubColoc>
                    <Text>
                      Top 3<br></br>1º - Lima<br></br>2º - Leo<br></br>3º - Fefe
                    </Text>
                  </SubColoc>
                </Colocacoes>
              </TextCard>
              <Carousel>
                <ImageLoader>
                  <Spinner />
                </ImageLoader>
                {carousel2 === 0 && <ImgComponent src={i4} />}
                {carousel2 === 1 && <ImgComponent src={i5} />}
                {carousel2 === 2 && <ImgComponent src={i6} />}

                <MarkText>{carousel2 + 1}/3</MarkText>
                {carousel2 > 0 && (
                  <CaroulselPrev
                    onClick={() => setcarousel2setter(carousel2 - 1)}
                  >
                    Prev
                  </CaroulselPrev>
                )}
                {carousel2 < 2 && (
                  <CaroulselNext
                    onClick={() => setcarousel2setter(carousel2 + 1)}
                  >
                    Next
                  </CaroulselNext>
                )}
              </Carousel>
            </CardContent>
          </Card>

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
