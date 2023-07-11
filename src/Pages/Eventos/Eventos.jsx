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
import i1 from "../../assets/1.png";
import i2 from "../../assets/2.png";
import i3 from "../../assets/3.png";
import i4 from "../../assets/4.png";
import i5 from "../../assets/5.png";
import i6 from "../../assets/6.png";
import i7 from "../../assets/7.png";
import i8 from "../../assets/8.png";
import i9 from "../../assets/9.png";
import i10 from "../../assets/10.png";
import i11 from "../../assets/11.png";
import i12 from "../../assets/12.png";
import i13 from "../../assets/13.png";
import i14 from "../../assets/14.png";
import i15 from "../../assets/15.png";

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
    if (x < 2 && x > -1) {
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


        <Card>
            <TitleCard>
              <Title>Rinha de Prata 3</Title>
              <Text>10/07/2023</Text>
            </TitleCard>
            <CardContent>
              <TextCard>
                <Text>
                  A terceira rinha de prata teve como jogo DNF Duel.
                </Text>
                <Colocacoes>
                  <SubColoc>
                    <Text>
                      Top 3<br></br>1º - Fernando<br></br>2º - Migas<br></br>3º
                      - Henriques
                    </Text>
                  </SubColoc>
                </Colocacoes>
              </TextCard>
              <Carousel>
                <ImageLoader>
                  <Spinner />
                </ImageLoader>
                {carousel5 === 0 && <ImgComponent src={i13} />}
                {carousel5 === 1 && <ImgComponent src={i14} />}
                {carousel5 === 2 && <ImgComponent src={i15} />}

                <MarkText>{carousel5 + 1}/3</MarkText>
                {carousel5 > 0 && (
                  <CaroulselPrev
                    onClick={() => setcarousel5setter(carousel5 - 1)}
                  >
                    Prev
                  </CaroulselPrev>
                )}
                {carousel5 < 3 && (
                  <CaroulselNext
                    onClick={() => setcarousel5setter(carousel5 + 1)}
                  >
                    Next
                  </CaroulselNext>
                )}
              </Carousel>
            </CardContent>
          </Card>


        <Card>
            <TitleCard>
              <Title>Molaço - Aniversário & Despedida</Title>
              <Text>25/06/2023</Text>
            </TitleCard>
            <CardContent>
              <TextCard>
                <Text>
                  O evento aconteceu no Goat Gaming Center, onde nossos guerreiros alcançaram o pódio e trouxeram resultados sólidos.
                </Text>
                <Colocacoes>
                  <SubColoc>
                  </SubColoc>
                  <SubColoc>
                    <Text>
                      Colocações Notáveis: <br></br>3º Strive Moddado - Bydo
                      <br></br>
                      5º Granblue - Nabutijinja<br></br>4º Mystery Tournament - Nabutijinja
                    </Text>
                  </SubColoc>
                </Colocacoes>
              </TextCard>
              <Carousel>
                <ImageLoader>
                  <Spinner />
                </ImageLoader>
                {carousel4 === 0 && <ImgComponent src={i12} />}
                {carousel4 === 1 && <ImgComponent src={i11} />}

                <MarkText>{carousel4 + 1}/2</MarkText>
                {carousel4 > 0 && (
                  <CaroulselPrev
                    onClick={() => setcarousel4setter(carousel4 - 1)}
                  >
                    Prev
                  </CaroulselPrev>
                )}
                {carousel4 < 1 && (
                  <CaroulselNext
                    onClick={() => setcarousel4setter(carousel4 + 1)}
                  >
                    Next
                  </CaroulselNext>
                )}
              </Carousel>
            </CardContent>
          </Card>



        <Card>
            <TitleCard>
              <Title>Front to Front</Title>
              <Text>28/05/2023</Text>
            </TitleCard>
            <CardContent>
              <TextCard>
                <Text>
                  A Grupo Esports participou do campeonato de Counter Strike Global Ofensive chamado Front to Front, no Minas Shopping. Nossos guerreiros
                  jogaram bravamente porém não conseguiram avançar da primeira fase contra TopPalau.
                </Text>
                <Colocacoes>
                  <SubColoc>
                    <Text>
                      Colocação:<br></br>Eliminado na Fase de Grupos
                      <br></br><br></br> Campeão: <br></br> Terror de BH
                    </Text>
                  </SubColoc>
                </Colocacoes>
              </TextCard>
              <Carousel>
                <ImageLoader>
                  <Spinner />
                </ImageLoader>
                {carousel3 === 0 && <ImgComponent src={i7} />}
                {carousel3 === 1 && <ImgComponent src={i8} />}
                {carousel3 === 2 && <ImgComponent src={i9} />}

                <MarkText>{carousel3 + 1}/3</MarkText>
                {carousel3 > 0 && (
                  <CaroulselPrev
                    onClick={() => setcarousel3setter(carousel3 - 1)}
                  >
                    Prev
                  </CaroulselPrev>
                )}
                {carousel3 < 2 && (
                  <CaroulselNext
                    onClick={() => setcarousel3setter(carousel3 + 1)}
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
              <Text>19/01/2023</Text>
            </TitleCard>
            <CardContent>
              <TextCard>
                <Text>
                  A segunda Rinha teve como jogo Granblue Fantasy Versus. Essa
                  foi a maior rinha até o momento contando com convidados especiais
                  e uma resenha completa.
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
                {carousel2 === 1 && <ImgComponent src={i10} />}
                {carousel2 === 2 && <ImgComponent src={i5} />}
                {carousel2 === 3 && <ImgComponent src={i6} />}

                <MarkText>{carousel2 + 1}/3</MarkText>
                {carousel2 > 0 && (
                  <CaroulselPrev
                    onClick={() => setcarousel2setter(carousel2 - 1)}
                  >
                    Prev
                  </CaroulselPrev>
                )}
                {carousel2 < 3 && (
                  <CaroulselNext
                    onClick={() => setcarousel2setter(carousel2 + 1)}
                  >
                    Next
                  </CaroulselNext>
                )}
              </Carousel>
            </CardContent>
          </Card>

          <Card>
            <TitleCard>
              <Title>Rinha de Prata 1</Title>
              <Text>27/??/2022</Text>
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
