import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import { Container, ContainerLoad, Card, SubContainer } from "./style.js";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Arrow from "../../components/Arrow/Arrow.jsx";
import Header from "../../components/Header/Header.jsx";
import OrganizerCard from "../../components/Organizers/OrganizerCard.jsx";
import dia from "../../assets/orgs/dia.png";
import bubbles from "../../assets/orgs/bubbles.png";
import bubbles2 from "../../assets/orgs/bubbles2.png";

const Organizadores = () => {
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
          staffStyle="none"
          organizerStyle="selected"
          inimigosStyle="none"
        />
        <SubContainer>
          <Card>
            <OrganizerCard
              titlesize={35}
              linksize={23}
              img={bubbles2}
              title={"Picci"}
              link={"https://twitter.com/oPicci_"}
              linkText={`Twitter`}
              text={`
                O de baixo de mim não tomou banho ontem.
                Convenci o PL4Y a entrar no Grupo mexendo nos pauzinhos do Nabuti durante o recrutamento. 

               https://www.twitch.tv/opicci
              `}
            />
          </Card>
          <Card>
            <OrganizerCard
              titlesize={35}
              linksize={23}
              img={dia}
              title={"Diamante"}
              link={"https://x.com/dimamanre"}
              linkText={`Twitter`}
              text={`
               "Seiya, não me importo se você morrer, mas me aborrece pensar que perdi seis anos te treinando. "
              `}
            />
          </Card>
        </SubContainer>
        <Footer />
      </Container>
      <ContainerLoad>
        <Spinner />
      </ContainerLoad>
    </>
  );
};

export default Organizadores;
