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
  ImgComponent,
  Text,
  Title,
  PlayerCard,
  PlayersContainer,
  PlayerCardText,
  PlayerImg,
  PlayerTitle
} from "./style";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import banner from "../../assets/banner.png";
import ggst1 from "../../assets/ggst1.png";
import ggst2 from "../../assets/ggst2.png";
import ggst3 from "../../assets/ggst3.png";
import ggst4 from "../../assets/ggst4.png";
import ggst5 from "../../assets/ggst5.png";
import cs1 from "../../assets/cs1.png";
import cs2 from "../../assets/cs2.png";
import cs3 from "../../assets/cs3.png";
import cs4 from "../../assets/cs4.png";
import cs5 from "../../assets/cs5.png";
import lol1 from "../../assets/lol1.png";
import lol2 from "../../assets/lol2.png";
import lol3 from "../../assets/lol3.png";
import lol4 from "../../assets/lol4.png";
import lol5 from "../../assets/lol5.png";


const LineUps = () => {

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
          lineupsStyle="selected"
          parceirosStyle="none"
        />
        <SubContainer>

          <Card>
          <Title>Guilty Gear Strive</Title>
              <PlayersContainer>
                <PlayerCard url={ggst1}>
                    <PlayerCardText>
                        <PlayerTitle size={"25px"}>Bydo</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
                <PlayerCard url={ggst2}>
                    <PlayerCardText>
                        <PlayerTitle size={"25px"}>Chubuca</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
                <PlayerCard url={ggst4}>
                    <PlayerCardText>
                        <PlayerTitle size={"25px"}>Lima</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
                <PlayerCard url={ggst3}>
                    <PlayerCardText>
                        <PlayerTitle size={"20px"}>Nabutijinja</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
                <PlayerCard url={ggst5}>
                    <PlayerCardText>
                        <PlayerTitle size={"20px"}>Jun Aikawa</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
              </PlayersContainer>
          </Card>

          <Card>
          <Title>Counter Strike</Title>
              <PlayersContainer>
                <PlayerCard url={cs1}>
                    <PlayerCardText>
                        <PlayerTitle size={"25px"}>Sushi</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
                <PlayerCard url={cs2}>
                    <PlayerCardText>
                        <PlayerTitle size={"25px"}>Chubuca</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
                <PlayerCard url={cs3}>
                    <PlayerCardText>
                        <PlayerTitle size={"20px"}>Tulapas</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
                <PlayerCard url={cs4}>
                    <PlayerCardText>
                        <PlayerTitle size={"25px"}>Riverx</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
                <PlayerCard url={cs5}>
                    <PlayerCardText>
                        <PlayerTitle size={"20px"}>Nabutijinja</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
              </PlayersContainer>
          </Card>

          <Card>
          <Title>League of Legends</Title>
              <PlayersContainer>
                <PlayerCard url={lol1}>
                    <PlayerCardText>
                        <PlayerTitle size={"25px"}>Sushi</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
                <PlayerCard url={lol2}>
                    <PlayerCardText>
                        <PlayerTitle size={"25px"}>Chubuca</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
                <PlayerCard url={lol3}>
                    <PlayerCardText>
                        <PlayerTitle size={"20px"}>Ferislaw</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
                <PlayerCard url={lol4}>
                    <PlayerCardText>
                        <PlayerTitle size={"25px"}>Tulapas</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
                <PlayerCard url={lol5}>
                    <PlayerCardText>
                        <PlayerTitle size={"15px"}>Shogun Ravena</PlayerTitle>
                    </PlayerCardText>                   
                </PlayerCard>
              </PlayersContainer>
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

export default LineUps;
