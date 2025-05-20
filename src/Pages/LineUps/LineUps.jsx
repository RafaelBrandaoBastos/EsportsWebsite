import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import PlayerCardComponent from "../../components/PlayerCard/PlatyerCard";
import { Container, ContainerLoad, Card, SubContainer, Title } from "./style";
import "./style.js";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer.jsx";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
import ggst1 from "../../assets/players/ggst1.png";
import ggst2 from "../../assets/players/ggst2.png";
import ggst3 from "../../assets/players/ggst3.png";
import ggst4 from "../../assets/players/ggst4.png";
import ggst5 from "../../assets/players/ggst5.png";
import ggst6 from "../../assets/players/ggst6.png";
import ggst7 from "../../assets/players/ggst7.png";
import ggst8 from "../../assets/players/ggst8.png";
import ggst9 from "../../assets/players/ggst9.png";
import ggst10 from "../../assets/players/ggst10.png";
import ggst11 from "../../assets/players/ggst11.png";
import ggst15 from "../../assets/players/ggst15.png";
import ggst16 from "../../assets/players/ggst16.png";
import ggst12 from "../../assets/players/ggst12.png";
import ggst19 from "../../assets/players/ggst19.png";
import ggst20 from "../../assets/players/ggst20.png";
import ggst21 from "../../assets/players/ggst21.png";
import ggst22 from "../../assets/players/ggst22.png";
import mbt from "../../assets/players/mbt.png";
import mbt1 from "../../assets/players/mbt1.png";
import mbt2 from "../../assets/players/mbt2.png";
import mbt3 from "../../assets/players/mbt3.png";
import mbt4 from "../../assets/players/mbt4.png";
import guiltas from "../../assets/players/guiltas.png";
import cs1 from "../../assets/players/cs1.png";
import cs2 from "../../assets/players/cs2.png";
import cs3 from "../../assets/players/cs3.png";
import cs4 from "../../assets/players/cs4.png";
import cs5 from "../../assets/players/cs5.png";
import cs6 from "../../assets/players/cs6.png";
import cs7 from "../../assets/players/cs7.png";
import cs8 from "../../assets/players/cs8.png";
import lol from "../../assets/players/lol.png";
import lol1 from "../../assets/players/lol1.png";
import lol2 from "../../assets/players/lol2.png";
import lol3 from "../../assets/players/lol3.png";
import lol4 from "../../assets/players/lol4.png";
import lol5 from "../../assets/players/lol5.png";
import lol6 from "../../assets/players/lol6.png";
import defuse from "../../assets/players/defuse.png";
import dnf from "../../assets/players/dnf.png";
import dnf1 from "../../assets/players/dnf1.png";
import dnf2 from "../../assets/players/dnf2.png";
import dnf3 from "../../assets/players/dnf3.png";
import dnf4 from "../../assets/players/dnf4.png";
import dnf5 from "../../assets/players/dnf5.png";
import dnf6 from "../../assets/players/dnf6.png";
import dnf7 from "../../assets/players/dnf7.png";
import dnf8 from "../../assets/players/dnf8.png";
import un from "../../assets/players/un.png";
import uni1 from "../../assets/players/uni1.png";
import uni2 from "../../assets/players/uni2.png";
import uni3 from "../../assets/players/uni3.png";
import uni4 from "../../assets/players/uni4.png";
import uni5 from "../../assets/players/uni5.png";
import uni6 from "../../assets/players/uni6.png";
import uni7 from "../../assets/players/uni7.png";
import tk from "../../assets/players/tk.png";
import tk1 from "../../assets/players/tk1.png";
import tk2 from "../../assets/players/tk2.png";
import tk3 from "../../assets/players/tk3.png";
import battle from "../../assets/players/battle.png";
import bb1 from "../../assets/players/battlebit.png";
import granblas from "../../assets/players/gbvs.png";
import gbvs1 from "../../assets/players/gbvs2.png";
import gbvs2 from "../../assets/players/gbvs1.png";
import gbvs3 from "../../assets/players/gbvs3.png";
import gbvs4 from "../../assets/players/gbvs4.png";
import gbvs5 from "../../assets/players/gbvs5.png";
import gbvs6 from "../../assets/players/gbvs6.png";
import gbvs7 from "../../assets/players/gbvs7.png";
import gbvs8 from "../../assets/players/gbvs8.png";
import gbvs9 from "../../assets/players/gbvs9.png";
import gbvs10 from "../../assets/players/gbvs10.png";
import gbvs11 from "../../assets/players/gbvs11.png";
import gbvs12 from "../../assets/players/gbvs12.png";
import gbvs13 from "../../assets/players/gbvs13.png";
import gbvs14 from "../../assets/players/gbvs14.png";
import duelinho from "../../assets/players/duelinho.png";
import duel1 from "../../assets/players/duel1.png";
import duel2 from "../../assets/players/duel2.png";
import bleis from "../../assets/players/bleis.png";
import bleis1 from "../../assets/players/bleis1.png";
import bleis2 from "../../assets/players/bleis2.png";
import persona1 from "../../assets/players/persona1.png"; 
import jin from "../../assets/players/jin.png";
import es from "../../assets/players/es.png";
import gbvsr2B from "../../assets/players/gbvsr2B.png";
import gbvsrEU from "../../assets/players/gbvsrEU.png";
import uniME from "../../assets/players/uniME.png"; 
import uniUZ from "../../assets/players/uniUZ.png";




const LineUps = () => {
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
          lineupsStyle="selected"
          parceirosStyle="none"
          staffStyle="none"
          organizerStyle="none"
        />
        <SubContainer>          
          <Card>
            <Title>Guilty Gear</Title>
            <PlayerCardComponent
              player={ggst6}
              icon={guiltas}
              nick="Devious Octopod"
              size={20}
              top={73}
              right={25}
            />            
            <PlayerCardComponent
              player={ggst22}
              icon={guiltas}
              nick="Jun Aikawa"
              size={20}
              top={75}
              right={25}
            />
            <PlayerCardComponent
              player={ggst7}
              icon={guiltas}
              nick="Gabfusca"
              size={23}
              top={75}
              right={20}
            />            
            <PlayerCardComponent
              player={ggst15}
              icon={guiltas}
              nick="Daniel INSS"
              size={21}
              top={75}
              right={23}
            />   
            
            <PlayerCardComponent
              player={ggst1}
              icon={guiltas}
              nick="Madso"
              size={32}
              top={70}
              right={22} 
            />  
            <PlayerCardComponent
              player={ggst21}
              icon={guiltas}
              nick="gato sorvete"
              size={20}
              top={73}
              right={25}                 
            />      
            <PlayerCardComponent
              player={ggst16}
              icon={guiltas}
              nick="pneuxeirado"
              size={19}
              top={77}
              right={19}                   
            />      
          </Card>
          <Card>
            <Title>Granblue Fantasy Versus</Title>    
          
            <PlayerCardComponent
              player={gbvs11}
              icon={granblas}
              nick="Hazler"
              size={29}
              top={72}
              right={22}
            />
            <PlayerCardComponent
              player={gbvsr2B}
              icon={granblas}
              nick="Jupiter"
              size={30}
              top={72}
              right={18}
            />   

            <PlayerCardComponent
              player={gbvsrEU}
              icon={granblas}
              nick="José"
              size={37}
              top={68}
              right={22}
            />   

            
            
            
            
          </Card>
          <Card>
            <Title>Under Night In-Birth</Title>
            <PlayerCardComponent
              player={uni1}
              icon={un}
              nick="zubreska"
              size={24}
              top={74}
              right={20}                   
            /> 

            <PlayerCardComponent
              player={uniME}
              icon={un}
              nick="José"
              size={37}
              top={68}
              right={22}                
            /> 

            <PlayerCardComponent
              player={uniUZ}
              icon={un}
              nick="Jupiter"
              size={30}
              top={72}
              right={18}              
            />                      
              
          </Card>
                    
          <Card>
            <Title>Melty Blood</Title>

            <PlayerCardComponent
              player={mbt2}
              icon={mbt}
              nick="rekom"
              size={30}
              top={71}
              right={22}
            />

            <PlayerCardComponent
              player={mbt3}
              icon={mbt}
              nick="Tatubola"
              size={25}
              top={73}
              right={20}
            />

            <PlayerCardComponent
              player={mbt4}
              icon={mbt}
              nick="nabuti"
              size={30}
              top={71}
              right={22}
            />
          </Card>

          <Card>
            <Title>Blazblue Centralfiction</Title>

            <PlayerCardComponent
              player={bleis1}
              icon={es}
              nick="zubreska"
              size={24}
              top={74}
              right={20}
            />

            <PlayerCardComponent
              player={bleis2}
              icon={jin}
              nick="gato sorvete"
              size={20}
              top={73}
              right={25}
            />
          </Card>

         
          

          {/* <Card>
            <Title>First Person Shooter</Title>
            <PlayerCardComponent
              player={cs1}
              icon={defuse}
              nick="Sushi"
              size={30}
              top={72}
              right={25}
            />            
            <PlayerCardComponent
              player={bb1}
              icon={battle}
              nick="Brands"
              size={30}
              top={72}
              right={20}
            />
            <PlayerCardComponent
              player={bb1}
              icon={battle}
              nick="Sudano"
              size={29}
              top={72}
              right={22}
            />
            <PlayerCardComponent
              player={bb1}
              icon={battle}
              nick="Tatubola"
              size={25}
              top={73}
              right={20}
            />
            <PlayerCardComponent
              player={cs4}
              icon={defuse}
              nick="Melzinho"
              size={25}
              top={72}
              right={20}
            />
            <PlayerCardComponent
              player={cs7}
              icon={defuse}
              nick="RiverX"
              size={30}
              top={72}
              right={25}
            />
            <PlayerCardComponent
              player={cs2}
              icon={defuse}
              nick="Chubuca"
              size={25}
              top={72}
              right={20}
            />
            <PlayerCardComponent
              player={cs3}
              icon={defuse}
              nick="Tulapas"
              size={25}
              top={72}
              right={20}
            />
          </Card> */}
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

export default LineUps;
