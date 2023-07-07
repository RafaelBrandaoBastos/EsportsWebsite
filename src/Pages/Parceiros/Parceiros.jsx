import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import {
  Container,
  ContainerLoad,
  Card,
  Card2,
  BannerComponent,
  TextCard,
  TextCard2,
  SubContainer,
  ImageComponent,
  Text,
  PartnerTitle,
  PartnerCard,
  SrcLink
} from "./style";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import banner from "../../assets/banner.png";
import prc1 from "../../assets/prc1.png";
import prc2 from "../../assets/prc2.png";
import prc3 from "../../assets/prc3.png";
import prc4 from "../../assets/prc4.png";
import prc5 from "../../assets/prc5.png";
const Parceiros = () => {

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
          homeStyle="none"
          eventosStyle="none"
          lineupsStyle="none"
          parceirosStyle="selected"
        />
        <SubContainer>
          <Card>
            <PartnerCard>
            <ImageComponent url={prc1}/>
              <TextCard>
                <PartnerTitle size={"35px"}>La Coffe</PartnerTitle>
                <Text>☕ Para os que buscam o verdadeiro sabor do café!
                <br></br>Rua Sergipe, 623, Savassi, Belo Horizonte.
                <br></br>Segunda a Sexta de 7h00 às 17h30
                <br></br><SrcLink size={"23px"} href="https://www.instagram.com/lacoffeecafeteria/">instagram.com/lacoffeecafeteria</SrcLink></Text>
              </TextCard>
            </PartnerCard>   

            <PartnerCard>
            <ImageComponent url={prc2}/>
              <TextCard>
                <PartnerTitle size={"35px"}>Ultra Arcade</PartnerTitle>
                <Text>Um fliperama modernizado para amantes de jogos de luta, retrô e E-sports.
                <br></br>Controles artesanais e fabricados do zero.
                <br></br><SrcLink size={"23px"} href="https://shop.ultraarcadebh.com.br/">shop.ultraarcadebh.com.br</SrcLink></Text>
              </TextCard>
            </PartnerCard>

            <PartnerCard>
            <ImageComponent url={prc5}/>
              <TextCard>
                <PartnerTitle size={"35px"}>Tulapas</PartnerTitle>
                <Text>Prazer, esse estranho ai na tela sou eu, jogo de tudo um pouco, 
                e faço live de um tanto de coisa diferente, live livre para vc falar e zoar da 
                forma que quiser desde que não desrespeite ninguem. Da uma chance que tu vai viciar no pai xD
                <br></br><SrcLink size={"23px"} href="https://www.twitch.tv/tulapas">twitch.tv/tulapas</SrcLink></Text>
              </TextCard>
            </PartnerCard>  

            <PartnerCard>
            <ImageComponent url={prc3}/>
              <TextCard>
                <PartnerTitle size={"35px"}>Zatefgc</PartnerTitle>
                <Text>FGC Streamer/Commentator (TO for Anime Fighters)
                <br></br>Psychologist experienced in Sports Psychology
                <br></br><SrcLink size={"23px"} href="https://www.twitch.tv/zatefgc">twitch.tv/zatefgc</SrcLink></Text>
              </TextCard>
            </PartnerCard>

            <PartnerCard>
            <ImageComponent url={prc4}/>
              <TextCard>
                <PartnerTitle size={"35px"}>Mark I-No TV</PartnerTitle>
                <Text>Partner TO and Streamer for ArcadianSlz. <br></br>Player AKA lau táier Magician of Kiseki no Sedai.<br></br>CEO for Mark I-no TV.<br></br> Mark I-no#9117
                <br></br><SrcLink size={"23px"} href="https://www.twitch.tv/mark_inotv">twitch.tv/mark_inotv</SrcLink></Text>
              </TextCard>
            </PartnerCard>

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

export default Parceiros;
