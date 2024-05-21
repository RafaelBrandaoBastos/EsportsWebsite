import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import { Container, ContainerLoad, Card, SubContainer } from "./style";
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
import prc8 from "../../assets/parceiros/prc8.png";
import prc9 from "../../assets/parceiros/prc9.png";
import prc10 from "../../assets/parceiros/prc10.png";
import prc11 from "../../assets/parceiros/prc11.png";

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
  }, [y]);

  return (
    <>
      <Container className="scroll-container">
        <Header
          homeStyle="none"
          eventosStyle="none"
          lineupsStyle="none"
          parceirosStyle="selected"
          staffStyle="none"
        />
        <SubContainer>
          <Card>
            <PartnerCard
              titlesize={30}
              linksize={23}
              img={prc1}
              title={"Mardbox"}
              link={"https://mardbox.mercadoshops.com.br"}
              text={
                "Cases de aço para arcades customizados. Catálogo de modelos e preços: http://shorturl.at/vADZ1"
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
              img={prc11}
              title={"Tulapas"}
              link={"https://www.twitch.tv/tulapas"}
              text={
                "Prazer, esse estranho ai na tela sou eu, jogo de tudo um pouco, e faço live de um tanto de coisa diferente, live livre para vc falar e zoar da forma que quiser desde que não desrespeite ninguem. Da uma chance que tu vai viciar no pai xD"
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
              img={prc8}
              title={"Samantha Miha"}
              link={"https://www.twitch.tv/samanthamiha"}
              text={
                "Opa! Meu nome é Samantha, sou Vtuber em tempo honorário e faço live de jogos de luta, foco, e em jogos variados, vem e se diverte!"
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
              img={prc5}
              title={"Astro7Wave"}
              link={"https://www.twitch.tv/astro7wave"}
              text={
                "E aí! Sou o Astro, um Vtuber entusiasta de jogos de luta que joga um pouco de tudo! Meu foco é em ensinar a galera que tá começando agora e manter comunidades ativas em vários jogos. Faço lives, jogo com a galera e tiro dúvidas! Aparece lá!"
              }
            />
            <PartnerCard
              titlesize={30}
              linksize={23}
              img={prc9}
              title={"yorezordd"}
              link={"https://www.twitch.tv/yorezordd"}
              text={
                "Todos os tipos de fighting games possíveis eu jogo aqui, alguns dias eu tiro pra dar aquela mamadinha em outros jogos tentando variar um pouco, suave. Chega junto meu padrinho, tem água, aquele cafézinho e pão com mortadela. Sinta-se em casa!"
              }
            />
            <PartnerCard
              titlesize={32}
              linksize={23}
              img={prc10}
              title={"Brunex"}
              link={"https://www.twitch.tv/eaebrunex"}
              text={
                "Certa vez um homem tava mt triste ai ele foi no medico e falo: dotor..."
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
