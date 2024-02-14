import React, { useEffect, useState, useContext } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import { useSnapCarousel } from "react-snap-carousel";
import { Container, ContainerLoad, SubContainer } from "./style";
import { LanguageContext } from "../../contexts/LanguageProvider";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import EventCard from "../../components/EventCard/EventCard";

import photo1ug from "../../assets/ultra-goat/photo1.png";
import photo2ug from "../../assets/ultra-goat/photo2.png";
import photo3ug from "../../assets/ultra-goat/photo3.png";

import photo1r1 from "../../assets/rinha-de-prata-1/photo1.png";
import photo2r1 from "../../assets/rinha-de-prata-1/photo2.png";
import photo3r1 from "../../assets/rinha-de-prata-1/photo3.png";

import photo1r2 from "../../assets/rinha-de-prata-2/photo1.png";
import photo2r2 from "../../assets/rinha-de-prata-2/photo2.png";
import photo3r2 from "../../assets/rinha-de-prata-2/photo3.png";
import photo4r2 from "../../assets/rinha-de-prata-2/photo4.png";

import photo1front from "../../assets/front-to-front/photo1.png";
import photo2front from "../../assets/front-to-front/photo2.png";
import photo3front from "../../assets/front-to-front/photo3.png";

import photo1molaco from "../../assets/molaco/photo1.png";
import photo2molaco from "../../assets/molaco/photo2.png";
import photo3molaco from "../../assets/molaco/photo3.png";

import photo1r3 from "../../assets/rinha-de-prata-3/photo1.png";
import photo2r3 from "../../assets/rinha-de-prata-3/photo2.png";
import photo3r3 from "../../assets/rinha-de-prata-3/photo3.png";

import photo1BC from "../../assets/BC23/photo1.jpg";
import photo2BC from "../../assets/BC23/photo2.jpg";
import photo3BC from "../../assets/BC23/photo3.jpeg";

import photo1NT from "../../assets/Noitada01/NoitadaMain.png";
import photo2NT from "../../assets/Noitada01/top8.png";

const Eventos = () => {
  const { x, y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useContext(LanguageContext);
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
          eventosStyle="selected"
          lineupsStyle="none"
          parceirosStyle="none"
          staffStyle="none"
        />
        <SubContainer>
        <EventCard
            title={"Noitada do Grupo - 01"}
            text={
              selectedLanguage == ""
                ? "O primeiro torneio online do grupo, tivemos 38 pessoas inscritas."
                : selectedLanguage == "/en"
                ? "The first Grupo online tournament, we had 38 players"
                : "El primer torneo online del Grupo, tuvimos 38 personas inscritas."
            }
            position={
              selectedLanguage == ""
                ? "Top 8 \n 1st - HSPC Jaca \n 2nd - HSPC Klasfer \n 3rd - ADK Guizin \n 4th - HSPC Axuul \n 5th - GRP Fero & ADKSeth \n 7th - Miidas & GRP Fire"
                : selectedLanguage == "/en"
                ? "Top 8 \n 1st - HSPC Jaca \n 2nd - HSPC Klasfer \n 3rd - ADK Guizin \n 4th - HSPC Axuul \n 5th - GRP Fero & ADKSeth \n 7th - Miidas & GRP Fire"
                : "Top 8 \n 1st - HSPC Jaca \n 2nd - HSPC Klasfer \n 3rd - ADK Guizin \n 4th - HSPC Axuul \n 5th - GRP Fero & ADKSeth \n 7th - Miidas & GRP Fire"
            }
            date={"11/02/2024"}
            photocount={2}
            foto1={photo1NT}
            foto2={photo2NT}
            
          />
          <EventCard
            title={"Battle Coliseum 2023"}
            text={
              selectedLanguage == ""
                ? "Maior Major brasileiro até hoje, aconteceu em São Paulo ao longo de três dias, com presença de jogadores internacionais e mais de 1.000 pessoas inscritas."
                : selectedLanguage == "/en"
                ? "The biggest Brazilian Major to date, it took place in São Paulo over the course of three days, with the presence of international players and more than 1,000 people registered."
                : "El mayor Major brasileño hasta el momento, se desarrolló en São Paulo durante tres días, con la presencia de jugadores internacionales y más de 1.000 inscritos."
            }
            position={
              selectedLanguage == ""
                ? "Colocações Notáveis: \n Sudano - 7th GGST ARC World Tour Qualifier / 1st Jackie Chan \n Bydo - 5th JOJO \n Rekom - 9th MBTL / 13th JOJO \n gabfusca - 5th ABK \n Fire - 9th MBTL & UNI[cl-r] \n Wangi - 1st GBVS"
                : selectedLanguage == "/en"
                ? "Notable Placements: \n Sudano - 7th GGST ARC World Tour Qualifier / 1st Jackie Chan \n Bydo - 5th JOJO \n Rekom - 9th MBTL / 13th JOJO \n gabfusca - 5th ABK \n Fire - 9th MBTL & UNI[cl-r] \n Wangi - 1st GBVS"
                : "Posiciones notables: \n Sudano - 7th GGST ARC World Tour Qualifier / 1st Jackie Chan \n Bydo - 5th JOJO \n Rekom - 9th MBTL / 13th JOJO \n gabfusca - 5th ABK \n Fire - 9th MBTL & UNI[cl-r] \n Wangi - 1st GBVS"
            }
            date={"25/11/2023"}
            photocount={3}
            foto1={photo1BC}
            foto2={photo2BC}
            foto3={photo3BC}
          />
          <EventCard
            title={"Ultra Goat"}
            text={
              selectedLanguage == ""
                ? "Evento presencial da Ultra Arcade em parceria com o GOAT Gaming Center"
                : selectedLanguage == "/en"
                ? "Ultra Arcade in-person event in partnership with GOAT Gaming Center"
                : "Evento presencial Ultra Arcade en asociación con GOAT Gaming Center"
            }
            position={
              selectedLanguage == ""
                ? "Colocações Notáveis: \n 4º Uni[cl-r] - Nabuti \n 5º GGST / JOJO - Nabuti \n 5º Smash B / 7º JOJO - Rekom"
                : selectedLanguage == "/en"
                ? "Notable Placements: \n 4º Uni[cl-r] - Nabuti \n 5º GGST / JOJO - Nabuti \n 5º Smash B / 7º JOJO - Rekom"
                : "Posiciones notables: \n 4.° Uni[cl-r] - Nabuti \n 5.° GGST / JOJO - Nabuti \n 5.° Smash B / 7.° JOJO - Rekom"
            }
            date={"22/10/2023"}
            photocount={3}
            foto1={photo1ug}
            foto2={photo2ug}
            foto3={photo3ug}
          />
          <EventCard
            title={"Rinha de Prata 3"}
            text={
              selectedLanguage == ""
                ? "A terceira rinha de prata teve como jogo DNF Duel. Esta rinha contou com o novo formato de batalhas em DUPLA! Uma ft2 onde ambos da dupla precisam vencer. E no final, as 2 melhores duplas se enfrentaram em um incrível top 4."
                : selectedLanguage == "/en"
                ? "The third silver fight had the game DNF Duel. This fight featured the new DOUBLE battle format! An ft2 where both of the pair need to win. And in the end, the 2 best pairs faced each other in an incredible top 4."
                : "La tercera pelea de plata tuvo el juego DNF Duel. ¡Esta pelea contó con el nuevo formato de batalla DOBLE! Un ft2 donde ambos necesitan ganar. Y al final, las 2 mejores parejas se enfrentaron en un increíble top 4."
            }
            position={
              selectedLanguage == ""
                ? "Colocações Notáveis: \n 1º-Fernando \n 2º-Mingau \n 3º-HTravel"
                : selectedLanguage == "/en"
                ? "Notable Placements: \n 1º-Fernando \n 2º-Mingau \n 3º-HTravel"
                : "Posiciones notables: \n 1º-Fernando \n 2º-Mingau \n 3º-HTravel"
            }
            date={"10/07/2023"}
            photocount={3}
            foto1={photo1r3}
            foto2={photo2r3}
            foto3={photo3r3}
          />
          <EventCard
            title={
              selectedLanguage == ""
                ? "Molaço - Aniversário & Despedida"
                : selectedLanguage == "/en"
                ? "Molaço - Birthday & Farewell"
                : "Molaço - Cumpleaños y Despedida"
            }
            text={
              selectedLanguage == ""
                ? "O evento aconteceu no Goat Gaming Center, onde nossos guerreiros alcançaram o pódio e trouxeram resultados sólidos em diversos jogos."
                : selectedLanguage == "/en"
                ? "The event took place at the Goat Gaming Center, where our warriors reached the podium and brought solid results in several games."
                : "El evento se llevó a cabo en el Goat Gaming Center, donde nuestros guerreros subieron al podio y obtuvieron sólidos resultados en varios juegos."
            }
            position={
              selectedLanguage == ""
                ? "Colocações Notáveis: \n 3º Strive Moddado - Bydo \n 5º Granblue - Nabuti \n 4º Mystery Tournament - Nabuti"
                : selectedLanguage == "/en"
                ? "Notable Placements: \n 3º Strive Moddado - Bydo \n 5º Granblue - Nabuti \n 4º Mystery Tournament - Nabuti"
                : "Posiciones notables: \n 3º Strive Moddado - Bydo \n 5º Granblue - Nabuti \n 4º Mystery Tournament - Nabuti"
            }
            date={"06/05/2023"}
            photocount={3}
            foto1={photo1molaco}
            foto2={photo2molaco}
            foto3={photo3molaco}
          />
          <EventCard
            title={"Front to Front"}
            text={
              selectedLanguage == ""
                ? "A Grupo Esports participou do campeonato de Counter Strike Global Ofensive chamado Front to Front, no Minas Shopping. Nossos guerreiros jogaram bravamente porém não conseguiram avançar da primeira fase contra TopPalau."
                : selectedLanguage == "/en"
                ? "Grupo Esports participated in the Counter Strike Global Offensive championship called Front to Front, at Minas Shopping. Our warriors played bravely but were unable to advance from the first stage against TopPalau."
                : "Grupo Esports participó del campeonato Counter Strike Global Offensive denominado Front to Front, en Minas Shopping. Nuestros guerreros jugaron con valentía, pero no pudieron avanzar desde la primera fase contra TopPalau."
            }
            position={
              selectedLanguage == ""
                ? "Colocação: Eliminado na Fase de Grupos"
                : selectedLanguage == "/en"
                ? "Placement: Eliminated in the Group Stage"
                : "Posicion: Eliminado en la fase de grupos"
            }
            date={"28/05/2023"}
            photocount={3}
            foto1={photo1front}
            foto2={photo2front}
            foto3={photo3front}
          />
          <EventCard
            title={"Rinha de Prata 2"}
            text={
              selectedLanguage == ""
                ? "A segunda Rinha teve como jogo Granblue Fantasy Versus. Essa foi a maior rinha até o momento contando com convidados especiais e uma resenha completa."
                : selectedLanguage == "/en"
                ? "The second Rinha had the game Granblue Fantasy Versus. This was the biggest fight to date with special guests and a complete event."
                : "La segunda Rinha tuvo el juego Granblue Fantasy Versus. Esta fue la pelea más grande hasta la fecha con invitados especiales en un evento completo."
            }
            position={
              selectedLanguage == ""
                ? "Colocações Notáveis: \n 1º-Lima \n 2º-Leo \n 3º-Fefe"
                : selectedLanguage == "/en"
                ? "Notable Placements: \n 1º-Lima \n 2º-Leo \n 3º-Fefe"
                : "Posiciones notables:  \n 1º-Lima \n 2º-Leo \n 3º-Fefe"
            }
            date={"19/01/2023"}
            photocount={4}
            foto1={photo1r2}
            foto2={photo2r2}
            foto3={photo3r2}
            foto4={photo4r2}
          />
          <EventCard
            title={"Rinha de Prata 1"}
            text={
              selectedLanguage == ""
                ? "A primeira Rinha de todas. O jogo foi Guilty Gear -STRIVE-, foi nessa edição que costumes clássicos da rinha surgiram: Premiação excepcional e participantes que nunca jogaram o jogo da vez."
                : selectedLanguage == "/en"
                ? "The first Rinha of all. The game was Guilty Gear -STRIVE-, it was in this edition that classic fight customs emerged: Exceptional prizes and participants who had never played the game at the time."
                : "La primera Rinha de todas. El juego era Guilty Gear -STRIVE-, fue en esta edición donde surgieron costumbres de lucha clásicas: premios excepcionales y participantes que nunca habían jugado el juego."
            }
            position={
              selectedLanguage == ""
                ? "Colocações Notáveis: \n 1º-Sushi \n 2º-Fefe\n 3º-Migas"
                : selectedLanguage == "/en"
                ? "Notable Placements: \n 1º-Sushi \n 2º-Fefe\n 3º-Migas"
                : "Posiciones notables:  \n 1º-Sushi \n 2º-Fefe\n 3º-Migas"
            }
            date={"27/06/2022"}
            photocount={3}
            foto1={photo1r1}
            foto2={photo2r1}
            foto3={photo3r1}
          />
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
