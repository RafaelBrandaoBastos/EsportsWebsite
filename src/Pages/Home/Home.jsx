import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  useLocation,
} from "react";
import { Transition } from "react-transition-group";
import { Tweet } from "react-tweet";
import { useWindowScroll } from "react-use";
import { LanguageContext } from "../../contexts/LanguageProvider";
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
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.gif";
import sushi from "../../assets/sushi.png";
import grito from "../../assets/grito.jpg";
import todos from "../../assets/todos.jpg";
import camisa from "../../assets/camisas/camisa.png";
import { useNavigate } from "react-router";
const Home = () => {
  const { x, y } = useWindowScroll();
  const [selectedLanguage, setSelectedLanguage] = useContext(LanguageContext);
  const [scrolled, setScrolled] = useState(0);

  const page = window.location.pathname;
  useEffect(() => {
    if (page == "/en") {
      setSelectedLanguage(1);
    } else if (page == "/en") {
      setSelectedLanguage(2);
    } else {
      setSelectedLanguage(0);
    }
  }, window.location.href);

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((y / height) * 100);
  }, [y]);
  const navigate = useNavigate();
  const handleClick = () => {
    window.location.href = "https://forms.gle/SW519T9dS9t3zF6T6";
  };

  return (
    <>
      <Container className="scroll-container">
        <Header
          homeStyle="selected"
          eventosStyle="none"
          lineupsStyle="none"
          parceirosStyle="none"
          staffStyle="none"
          camisasStyle="none"
          organizerStyle="none"
          inimigosStyle="none"
        />
        <SubContainer>
          <div onClick={handleClick} style={{ cursor: "pointer" }}>
            <BannerComponent src={camisa} alt="Banner" />
          </div>
          <Card>
            <TextCard>
              <Title>
                {selectedLanguage == ""
                  ? "Sobre Nós"
                  : selectedLanguage == "/en"
                  ? "About Us"
                  : "Sobre Nosotros"}
              </Title>
              <Text>
                {selectedLanguage == ""
                  ? "A Grupo Esports é uma organização de jogos eletronicos que se destaca pela sua habilidade e paixão pela competição virtual. Atualmente com representantes no cenario brasileiro de GuiltyGear Strive, Granblue Fantasy Versus e jogos de luta variados. Unidos, os membros do Grupo eSports dedicam-se incansavelmente a aprimorar suas habilidades e alcançar o sucesso nas competições virtuais."
                  : selectedLanguage == "/en"
                  ? "Grupo Esports is an electronic gaming organization that stands out for its skill and passion for virtual competition. Currently with representatives in the Brazilian scene of GuiltyGear Strive, Granblue Fantasy Versus and various fighting games. United, the members of the Grupo eSports are tirelessly dedicated to improving their skills and achieving success in virtual competitions."
                  : "Grupo Esports es una organización de juegos electrónicos que se destaca por su habilidad y pasión por la competencia virtual, actualmente con representantes en la escena brasileña de GuiltyGear Strive, Granblue Fantasy Versus y diversos juegos de lucha. Unidos, los miembros del eSports Group se dedican incansablemente a mejorar sus habilidades y alcanzar el éxito en las competiciones virtuales."}
              </Text>
              <ImgComponent src={todos} />
              <Text>
                {selectedLanguage == ""
                  ? "Com uma mentalidade focada no trabalho em equipe, estratégias inovadoras e uma sede constante de aprendizado, a Grupo Esports está rapidamente conquistando seu espaço e conquistando fãs fervorosos. Com certeza, podemos esperar ver muito mais desse time no futuro dos esports."
                  : selectedLanguage == "/en"
                  ? "With a mentality focused on teamwork, innovative strategies and a constant thirst for learning, Grupo Esports is quickly conquering its space and winning over fervent fans. We can definitely expect to see a lot more from this team in the future of esports."
                  : "Con una mentalidad centrada en el trabajo en equipo, estrategias innovadoras y una sed constante de aprendizaje, Grupo Esports está conquistando rápidamente su espacio y conquistando fervientes seguidores. Definitivamente podemos esperar ver mucho más de este equipo en el futuro de los deportes electrónicos."}
              </Text>
            </TextCard>
            <ImgComponent src={grito} />
            <Spacing spacing={50} />
            <TextCard>
              <Title>
                {selectedLanguage == ""
                  ? "Patrocinadores"
                  : selectedLanguage == "/en"
                  ? "Sponsors"
                  : "Patrocinadores"}
              </Title>
              {/* <Text></Text> */}
              <IframeComponent src="https://www.instagram.com/brecholudico/embed/"></IframeComponent>
              <IframeComponent src="https://www.instagram.com/mardbox/embed/"></IframeComponent>
              
              {/* PATROCINA NOIS MISERÁVEL */}
              {/* <IframeComponent src="https://www.instagram.com/ultraarcadebh/embed/"></IframeComponent> */}
            </TextCard>
          </Card>
          <TweetCard>
            <Title>
              {selectedLanguage == ""
                ? "Notícias"
                : selectedLanguage == "/en"
                ? "Updates"
                : "Noticias"}
            </Title>
            {/* MESMO QUE SEJA ANTIGO, É INTERESSANTE DEIXAR COISAS DE COMUNIDADE AQUI, INVÉS DE TUDO QUE FOR NOVO
            TIPO UMA FOTO DE GALERA, OU UMA ARTE, OU UM CAMPEONATO, MOMENTO MANEIRO */}
            <Tweet id="1974207422106357948" />
            <Tweet id="1940087769323512012" />
            <Tweet id="1919532440315400462" />
            <Tweet id="1744734814539018625" />
            <Tweet id="1749910542238511516" />
          </TweetCard>
        </SubContainer>
        <Footer />
      </Container>
      <ContainerLoad>
        <Spinner />
      </ContainerLoad>
    </>
  );
};

export default Home;
