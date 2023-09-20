import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import {
  Container,
  ContainerLoad,
  Card,
  SubContainer,
} from "./style";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import PartnerCard from "../../components/PartnerCard/PartnerCard";
import prc1 from "../../assets/parceiros/prc1.png";
import prc2 from "../../assets/parceiros/prc2.png";
import prc3 from "../../assets/parceiros/prc3.png";
import prc4 from "../../assets/parceiros/prc4.png";
import prc5 from "../../assets/parceiros/prc5.png";
import prc6 from "../../assets/parceiros/prc6.png";
import prc7 from "../../assets/parceiros/prc7.png";

const Parceiros = () => {
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
          eventosStyle="none"
          lineupsStyle="none"
          parceirosStyle="selected"
        />
        <SubContainer>
          <Card>
            <PartnerCard
              titlesize={30}
              linksize={23}
              img={prc1}
              title={"La Coffe"}
              link={"https://instagram.com/lacoffeecafeteria"}
              text={
                "☕ Para os que buscam o verdadeiro sabor do café!Rua Sergipe, 623, Savassi, Belo Horizonte. Segunda a Sexta de 7h00 às 17h30"
              }
            />
            <PartnerCard
              titlesize={30}
              linksize={23}
              img={prc2}
              title={"Ultra Arcade"}
              link={"https://shop.ultraarcadebh.com.br/"}
              text={
                "Um fliperama modernizado para amantes de jogos de luta, retrô e E-sports. Controles artesanais e fabricados do zero."
              }
            />
            <PartnerCard
              titlesize={30}
              linksize={23}
              img={prc7}
              title={"srsayoni"}
              link={"https://www.twitch.tv/srsayoni"}
              text={
                "Pode me chamar de Sayoni, comecei a gostar bastante de jogos de luta recentemente e pretendo jogar bastante deles em live."
              }
            />
            <PartnerCard
              titlesize={30}
              linksize={23}
              img={prc6}
              title={"Captain Honey"}
              link={"https://www.twitch.tv/captain_honey"}
              text={
                "Me chamo Artur, tenho 21 anos. Sou ilustrador vetorial e faço lives de just chatting e de jogos."
              }
            />
            <PartnerCard
              titlesize={30}
              linksize={23}
              img={prc4}
              title={"Mark I-No TV"}
              link={"https://www.twitch.tv/mark_inotv"}
              text={
                "Partner TO and Streamer for ArcadianSlz.Player AKA lau táier Magician of Kiseki no Sedai. CEO for Mark I-no TV. Mark I-no#9117"
              }
            />
            <PartnerCard
              titlesize={30}
              linksize={23}
              img={prc3}
              title={"Zatefgc"}
              link={"https://www.twitch.tv/zatefgc"}
              text={
                "FGC Streamer/Commentator (TO for Anime Fighters) Psychologist experienced in Sports Psychology"
              }
            />
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

export default Parceiros;
