import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import PlayerCardComponent from "../../components/PlayerCard/PlatyerCard"
import {
  Container,
  ContainerLoad,
  Card,
  SubContainer,
  Title,
} from "./style";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer.jsx";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import ggst1 from "../../assets/players/ggst1.png"
import ggst2 from "../../assets/players/ggst2.png"
import ggst3 from "../../assets/players/ggst3.png"
import ggst4 from "../../assets/players/ggst4.png"
import ggst5 from "../../assets/players/ggst5.png"
import ggst6 from "../../assets/players/ggst6.png"
import ggst7 from "../../assets/players/ggst7.png"
import ggst8 from "../../assets/players/ggst8.png"
import ggst9 from "../../assets/players/ggst9.png"
import ggst10 from "../../assets/players/ggst10.png"
import mbt from "../../assets/players/mbt.png"
import mbt1 from "../../assets/players/mbt1.png"
import mbt2 from "../../assets/players/mbt2.png"
import guiltas from "../../assets/players/guiltas.png"
import cs1 from "../../assets/players/cs1.png"
import cs2 from "../../assets/players/cs2.png"
import cs3 from "../../assets/players/cs3.png"
import cs4 from "../../assets/players/cs4.png"
import cs5 from "../../assets/players/cs5.png"
import cs6 from "../../assets/players/cs6.png"
import cs7 from "../../assets/players/cs7.png"
import cs8 from "../../assets/players/cs8.png"
import lol from "../../assets/players/lol.png"
import lol1 from "../../assets/players/lol1.png"
import lol2 from "../../assets/players/lol2.png"
import lol3 from "../../assets/players/lol3.png"
import lol4 from "../../assets/players/lol4.png"
import lol5 from "../../assets/players/lol5.png"
import lol6 from "../../assets/players/lol6.png"
import defuse from "../../assets/players/defuse.png"
import dnf from "../../assets/players/dnf.png"
import dnf1 from "../../assets/players/dnf1.png"
import un from "../../assets/players/un.png"
import un1 from "../../assets/players/un1.png"
import tk from "../../assets/players/tk.png"
import tk1 from "../../assets/players/tk1.png"

const LineUps = () => {

    const { x, y } = useWindowScroll();
    const [scrolled, setScrolled] = useState(0);
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
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
          lineupsStyle="selected"
          parceirosStyle="none"
        />
        <SubContainer>

          <Card>
            <Title>Fighting Games</Title>          
            <PlayerCardComponent player={ggst6} icon={guiltas} nick="Devious Octopod" size={20} top={73} right={25}/>
            <PlayerCardComponent player={mbt2} icon={mbt} nick="Rekom" size={30} top={72} right={25}/> 
            <PlayerCardComponent player={ggst5} icon={guiltas} nick="Jun Aikawa" size={20} top={75} right={25}/>
            <PlayerCardComponent player={ggst7} icon={guiltas} nick="Gabfusca" size={23} top={75} right={20}/>    
            <PlayerCardComponent player={ggst9} icon={guiltas} nick="JoseGalas" size={21} top={75} right={22}/>
            <PlayerCardComponent player={ggst10} icon={guiltas} nick="Sudano" size={30} top={72} right={22}/>             
            <PlayerCardComponent player={ggst8} icon={guiltas} nick="Raicon" size={30} top={72} right={25}/>  
          </Card>

          <Card>
            <Title>First Person Shooter</Title>          
            <PlayerCardComponent player={cs1} icon={defuse} nick="Sushi" size={30} top={72} right={25}/>
            <PlayerCardComponent player={cs3} icon={defuse} nick="Tulapas" size={25} top={72} right={20}/>            
            <PlayerCardComponent player={cs4} icon={defuse} nick="Melzinho" size={25} top={72} right={20}/>
            <PlayerCardComponent player={cs7} icon={defuse} nick="RiverX" size={30} top={72} right={25}/>
            <PlayerCardComponent player={cs2} icon={defuse} nick="Chubuca" size={25} top={72} right={20}/>
            <PlayerCardComponent player={cs5} icon={defuse} nick="Nabuti" size={30} top={72} right={25}/>
            <PlayerCardComponent player={cs8} icon={defuse} nick="Brands" size={30} top={72} right={20}/>
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
