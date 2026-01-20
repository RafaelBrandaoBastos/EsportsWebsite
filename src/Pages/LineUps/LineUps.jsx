import React, { useEffect, useState, useRef } from "react";
import { useWindowScroll } from "react-use";
import PlayerCardComponent from "../../components/PlayerCard/PlatyerCard";
import { Container, ContainerLoad, Card, SubContainer, Title } from "./style";
import "./style.js";

import glitch from "../../assets/players/GLITCH.gif"; // Esse aqui vai ficar aqui só se eventualmente a gente brincar com o glitch de novo 
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header";
import ggst1 from "../../assets/players/ggst1.png";
import ggst5 from "../../assets/players/ggst5.png";
import ggst6 from "../../assets/players/ggst6.png";
import ggst7 from "../../assets/players/ggst7.png";
import ggst9 from "../../assets/players/ggst9.png";
import ggst10 from "../../assets/players/ggst10.png";
import ggst15 from "../../assets/players/ggst15.png";
import ggst16 from "../../assets/players/ggst16.png";
import ggst21 from "../../assets/players/ggst21.png";
import ggst22 from "../../assets/players/ggst22.png";
import ggstGI from "../../assets/players/ggstGI.png";
import mbt from "../../assets/players/mbt.png";
import mbt1 from "../../assets/players/mbt1.png"
import mbt3 from "../../assets/players/mbt3.png";
import mbt5 from "../../assets/players/mbt5.png";
import guiltas from "../../assets/players/guiltas.png";
import un from "../../assets/players/un.png";
import uni7 from "../../assets/players/uni7.png";
import battle from "../../assets/players/battle.png";
import bb1 from "../../assets/players/battlebit.png";
import granblas from "../../assets/players/gbvs.png";
import gbvs11 from "../../assets/players/gbvs11.png";
import gbvs14 from "../../assets/players/gbvs14.png";
import gbvsrCA from "../../assets/players/gbvsCA.png";
import bleis1 from "../../assets/players/bleis1.png";
import bleis2 from "../../assets/players/bleis2.png";
import jin from "../../assets/players/jin.png";
import es from "../../assets/players/es.png";
import gbvsr2B from "../../assets/players/gbvsr2B.png";
import uniUZ from "../../assets/players/uniUZ.png";
import sf from "../../assets/players/sf.png";
import sfED from "../../assets/players/sfED.png";
import sfCA from "../../assets/players/sfCA.png";
import sfMA from "../../assets/players/sfMA.png";
import uma from "../../assets/players/uma.png";
import uma1 from "../../assets/players/uma1.png";
import uma2 from "../../assets/players/uma2.png";
import uma3 from "../../assets/players/uma3.png";
import uma4 from "../../assets/players/uma4.png";
import xko from "../../assets/players/2xko.png";
import xkoYA from "../../assets/players/xkoYA.png";
import xkoEK from "../../assets/players/xkoEK.png";
import brflag from "../../assets/bandeiras/brflag.png";
import chflag from "../../assets/bandeiras/chflag.png";
import sfmari from "../../assets/players/sfmari.png";

const LineUps = () => {
  const { y } = useWindowScroll();
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
          inimigosStyle="none"
        />
        <SubContainer>
          <Card>
            <Title>Guilty Gear</Title>

            <PlayerCardComponent
              player={ggst16}
              icon={guiltas}
              flag={chflag}
              nick="Hamsterdie"
              size={20}
              top={75}
              right={25}
            />

            <PlayerCardComponent
              player={ggst10}
              icon={guiltas}
              flag={chflag}
              nick="Suri"
              size={32}
              top={70}
              right={22}
            />

            <PlayerCardComponent
              player={ggst5}
              icon={guiltas}
              flag={chflag}
              nick="Donfo"
              size={32}
              top={70}
              right={22}
            />

            <PlayerCardComponent
              player={ggst9}
              icon={guiltas}
              flag={chflag}
              nick="Pulpo"
              size={32}
              top={70}
              right={22}
            />

            <PlayerCardComponent
              player={ggst6}
              icon={guiltas}
              flag={brflag}
              nick="Devious Octopod"
              size={20}
              top={73}
              right={25}
            />
             <PlayerCardComponent
              player={ggst22}
              icon={guiltas}
              flag={brflag}
              nick="Jun Aikawa"
              size={20}
              top={75}
              right={25}
            /> 
            <PlayerCardComponent
              player={ggst7}
              icon={guiltas}
              flag={brflag}
              nick="Gabfusca"
              size={23}
              top={75}
              right={20}
            />
            <PlayerCardComponent
              player={ggst15}
              icon={guiltas}
              flag={brflag}
              nick="Daniel INSS"
              size={21}
              top={75}
              right={23}
            />

            <PlayerCardComponent
              player={ggst1}
              icon={guiltas}
              flag={brflag}
              nick="Madso"
              size={32}
              top={70}
              right={22}
            />
            <PlayerCardComponent
              player={ggst21}
              icon={guiltas}
              flag={brflag}
              nick="gato sorvete"
              size={20}
              top={73}
              right={25}
            />
            <PlayerCardComponent
              player={ggst16}
              icon={guiltas}
              flag={brflag}
              nick="pneuxeirado"
              size={19}
              top={77}
              right={19}
            />
            <PlayerCardComponent
              player={ggstGI}
              icon={guiltas}
              flag={brflag}
              nick="arqué"
              size={29}
              top={72}
              right={22}
            />
          </Card>
          <Card>
            <Title>2XKO</Title>

            <PlayerCardComponent
              player={xkoYA}
              icon={xko}
              flag={brflag}
              nick="mascooot"
              size={22}
              top={74}
              right={18}
            />
              <PlayerCardComponent
              player={xkoYA}
              icon={xko}
              flag={brflag}
              nick="Poiu"
              size={37}
              top={68}
              right={22}
            />
            <PlayerCardComponent
              player={xkoEK}
              icon={xko}
              flag={brflag}
              nick="pneuxeirado"
              size={19}
              top={77}
              right={19}
            />
            <PlayerCardComponent
              player={xkoEK}
              icon={xko}
              flag={brflag}
              nick="arque"
              size={30}
              top={72}
              right={18}
            />
                      
          </Card>
          <Card>
            <Title>Granblue Fantasy Versus</Title>

            <PlayerCardComponent
              player={gbvs11}
              icon={granblas}
              flag={brflag}
              nick="Hazler"
              size={29}
              top={72}
              right={22}
            />
            <PlayerCardComponent
              player={gbvsr2B}
              icon={granblas}
              flag={brflag}
              nick="Jupiter"
              size={30}
              top={72}
              right={18}
            />
            <PlayerCardComponent
              player={gbvsrCA}
              icon={granblas}
              flag={brflag}
              nick="pl4y"
              size={37}
              top={68}
              right={22}
            />

            <PlayerCardComponent
              player={gbvsr2B}
              icon={granblas}
              flag={brflag}
              nick="Poiu"
              size={37}
              top={68}
              right={22}
            />

            <PlayerCardComponent
              player={gbvs14}
              icon={granblas}
              flag={brflag}
              nick="Renatinho"
              size={25}
              top={72}
              right={18}
            />
          </Card>

          <Card>
            <Title>Street Fighter 6</Title>

            <PlayerCardComponent
              player={sfCA}
              icon={sf}
              flag={brflag}
              nick="mascooot"
              size={22}
              top={74}
              right={18}
            />

            <PlayerCardComponent
              player={sfmari}
              icon={sf}
              flag={brflag}
              nick="nero"
              size={37}
              top={68}
              right={22}
            />
            <PlayerCardComponent
              player={sfMA}
              icon={sf}
              flag={brflag}
              nick="nowa"
              size={37}
              top={68}
              right={22}
            />

            <PlayerCardComponent
              player={sfED}
              icon={sf}
              flag={brflag}
              nick="jupiter"
              size={30}
              top={72}
              right={18}
            />
          </Card>

          <Card>
            <Title>Fighting Games</Title>

            <PlayerCardComponent
              player={bb1}
              icon={battle}
              flag={chflag}
              nick="Pulpo"
              size={30}
              top={71}
              right={22}
            />

            <PlayerCardComponent
              player={mbt1}
              icon={mbt}
              flag={brflag}
              nick="rekom"
              size={30}
              top={71}
              right={22}
            />

            <PlayerCardComponent
              player={mbt3}
              icon={mbt}
              flag={brflag}
              nick="Tatubola"
              size={25}
              top={73}
              right={20}
            />
            <PlayerCardComponent
              player={mbt5}
              icon={mbt}
              flag={brflag}
              nick="yuki"
              size={37}
              top={68}
              right={22}
            />

            <PlayerCardComponent
              player={uniUZ}
              icon={un}
              flag={brflag}
              nick="Jupiter"
              size={30}
              top={72}
              right={18}
            />
    
            <PlayerCardComponent
              player={bleis1}
              icon={es}
              flag={brflag}
              nick="zubreska"
              size={24}
              top={74}
              right={20}
            />



            <PlayerCardComponent
              player={bleis2}
              icon={jin}
              flag={brflag}
              nick="gato sorvete"
              size={20}
              top={73}
              right={25}
            />

            <PlayerCardComponent
              player={uni7}
              icon={un}
              flag={brflag}
              nick="Jun Aikawa"
              size={20}
              top={75}
              right={25}
            />
            
          </Card>

          <Card>
            <Title>Uma Musume</Title>

            <PlayerCardComponent
              player={uma1}
              icon={uma}
              flag={brflag}
              nick="Picci"
              size={37}
              top={68}
              right={22}
            />

            <PlayerCardComponent
              player={uma3}
              icon={uma}
              flag={chflag}
              nick="Pulpo"
              size={30}
              top={72}
              right={18}
            />

            <PlayerCardComponent
              player={uma2}
              icon={uma}
              flag={brflag}
              nick="Nabuti"
              size={30}
              top={72}
              right={18}
            />
            
            <PlayerCardComponent
              player={uma4}
              icon={uma}
              flag={brflag}
              nick="Pl4y"
              size={37}
              top={68}
              right={22}
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
      </Container>
      <ContainerLoad>
        <Spinner />
      </ContainerLoad>
    </>
  );
};

export default LineUps;
