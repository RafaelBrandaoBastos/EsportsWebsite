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
  Subtitle,
  StaffImg,
  SrcLink
} from "./style";
import "./style.js";
import brands from '../../assets/brands.png';
import bydo from '../../assets/bydo.png';
import nabuti from '../../assets/nabuti.png';
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../components/Arrow/Arrow";
import Header from "../../components/Header/Header";
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
    console.log("/");
  }, [y]);
  return (
    <>
      <Container className="scroll-container">
        <Header
          homeStyle="none"
          eventosStyle="none"
          lineupsStyle="none"
          parceirosStyle="none"
          staffStyle="selected"
        />
        <SubContainer>
          <Card>
            <StaffImg src={brands}></StaffImg>
            <Title>CMO</Title>   
            <Subtitle>Rafael Brandão "Brandis"</Subtitle>    
            <Subtitle>Chief Marketing Officer</Subtitle>    
            <SrcLink size={"23px"} href="https://twitter.com/RafaelBrandsB" target="_blank">@RafaelBrandsB</SrcLink>   
          </Card>

          <Card>
            <StaffImg src={nabuti}></StaffImg>
            <Title>CEO</Title> 
            <Subtitle>Gabriel Terra "Nabuti"</Subtitle>  
            <Subtitle>Chief Executive Officer</Subtitle>   
            <SrcLink size={"23px"} href="https://twitter.com/NabutiJinja" target="_blank">@NabutiJinja</SrcLink>              
          </Card>

          <Card>
            <StaffImg src={bydo}></StaffImg>
            <Title>COO</Title> 
            <Subtitle>Bernardo Miranda "Bydo"</Subtitle>  
            <Subtitle>Chief Operations Officer</Subtitle>   
            <SrcLink size={"23px"} href="https://twitter.com/TheBydo" target="_blank">@TheBydo</SrcLink>              
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
