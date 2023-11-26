import React, { useEffect, useState, useRef, useContext, useLocation } from "react";
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
import sushi from "../../assets/sushi.png";
const Home = () => {
  const { x, y } = useWindowScroll();
  const [selectedLanguage, setSelectedLanguage] = useContext(LanguageContext);
  const [scrolled, setScrolled] = useState(0);

  const page = (window.location.href);
  console.log("page location: " + page)
    useEffect(() => {
      if (page == "/en") {
        setSelectedLanguage(1);
      } else if (page == "/esp") {
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
  return (
    <>
      <Container className="scroll-container" onLoad>
        <Header
          homeStyle="selected"
          eventosStyle="none"
          lineupsStyle="none"
          parceirosStyle="none"
          staffStyle="none"
        />
        <SubContainer>
          <BannerComponent src={banner} alt="Banner" />
          <Card>
            <TextCard>
              <Title>
                {selectedLanguage == 0
                  ? "Sobre Nós"
                  : selectedLanguage == 1
                  ? "About Us"
                  : "Sobre Nosotros"}
              </Title>
              <Text>
                {selectedLanguage == 0
                  ? "A Grupo Esports é uma organização de jogos eletronicos que se destaca pela sua habilidade e paixão pela competição virtual.Atualmente com representantes no cenario brasileiro de GuiltyGear Strive, Counter-Strike: Global Offensive e jogos de lutavariados. Unidos, os membros do Grupo eSports dedicam-se incansavelmente a aprimorar suas habilidades e alcançar o sucesso nas competições virtuais."
                  : selectedLanguage == 1
                  ? "Grupo Esports is an electronic gaming organization that stands out for its skill and passion for virtual competition. Currently with representatives in the Brazilian scene of GuiltyGear Strive, Counter-Strike: Global Offensive and various fighting games. United, the members of the eSports Group are tirelessly dedicated to improving their skills and achieving success in virtual competitions."
                  : "Grupo Esports es una organización de juegos electrónicos que se destaca por su habilidad y pasión por la competencia virtual, actualmente con representantes en la escena brasileña de GuiltyGear Strive, Counter-Strike: Global Offensive y diversos juegos de lucha. Unidos, los miembros del eSports Group se dedican incansablemente a mejorar sus habilidades y alcanzar el éxito en las competiciones virtuales."}
                <br></br>
                <br></br>
                {selectedLanguage == 0
                  ? "Com uma mentalidade focada no trabalho em equipe, estratégias inovadoras e uma sede constante de aprendizado, a Grupo Esports está rapidamente conquistando seu espaço e conquistando fãs fervorosos. Com certeza, podemos esperar ver muito mais desse time no futuro dos esports."
                  : selectedLanguage == 1
                  ? "With a mentality focused on teamwork, innovative strategies and a constant thirst for learning, Grupo Esports is quickly conquering its space and winning over fervent fans. We can definitely expect to see a lot more from this team in the future of esports."
                  : "Con una mentalidad centrada en el trabajo en equipo, estrategias innovadoras y una sed constante de aprendizaje, Grupo Esports está conquistando rápidamente su espacio y conquistando fervientes seguidores. Definitivamente podemos esperar ver mucho más de este equipo en el futuro de los deportes electrónicos."}
              </Text>
            </TextCard>
            <Spacing spacing={20} />
            <ImgComponent src={sushi} />
            <Spacing spacing={50} />
            <TextCard>
              <Title>
                {selectedLanguage == 0
                  ? "Patrocinadores"
                  : selectedLanguage == 1
                  ? "Sponsors"
                  : "Patrocinadores"}
              </Title>
              <Text>
                {selectedLanguage == 0
                  ? "Queremos expressar nossa profunda gratidão aos nossos valiosos patrocinadores, LaCoffe e Ultra Arcade. O café excepcional da LaCoffe nos energiza para treinos e competições, enquanto os controles de alta qualidade da Ultra Arcade aprimoram nossas habilidades e nos proporcionam momentos incríveis."
                  : selectedLanguage == 1
                  ? "We want to express our deep gratitude to our valued sponsors, LaCoffe and Ultra Arcade. LaCoffe's exceptional coffee energizes us for training and competitions, while Ultra Arcade's high-quality controls hone our skills and give us incredible moments."
                  : "Queremos expresar nuestro profundo agradecimiento a nuestros valiosos patrocinadores, LaCoffe y Ultra Arcade. El excepcional café de LaCoffe nos da energía para los entrenamientos y competiciones, mientras que los controles de alta calidad de Ultra Arcade perfeccionan nuestras habilidades y nos brindan momentos increíbles."}
              </Text>
              <IframeComponent src="https://www.instagram.com/ultraarcadebh/embed/"></IframeComponent>
              <IframeComponent src="https://www.instagram.com/lacoffeecafeteria/embed/"></IframeComponent>
            </TextCard>
          </Card>
          <TweetCard>
            <Title>{selectedLanguage == 0
                  ? "Notícias"
                  : selectedLanguage == 1
                  ? "Updates"
                  : "Noticias"}</Title>
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
