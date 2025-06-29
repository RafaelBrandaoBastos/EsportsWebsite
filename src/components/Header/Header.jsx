import {
  HeaderComponent,
  HeaderList,
  HeaderOption,
  LogoComponent,
  HeaderListMobile,
  LogoMobileComponent,
  HeaderOptionMobile,
  MenuMobileComponent,
  LanguageIcon,
  Language,
  LanguageText,
  LanguageCarousel,
  LanguageMobile,
  Arrow,
  LanguageOption,
  GlitchLineupsComponent,
} from "./style";
import React, { useEffect, useState, useRef, useContext } from "react";
import "./style.js";
import logo from "../../assets/g-novo.png";
import iconWhite from "../../assets/iconWhite.png";
import iconPink from "../../assets/iconPink.png";
import brlogo from "../../assets/brlogo.png";
import usalogo from "../../assets/usalogo.png";
import esplogo from "../../assets/esplogo.png";
import question from "../../assets/inimigos/question.gif";
import arrowl from "../../assets/arrowl.png";
import arrowr from "../../assets/arrowr.png";
import { LanguageContext } from "../../contexts/LanguageProvider.jsx";
import GlitchLineups from "../../assets/GlitchLineups.gif";

const Header = (props) => {
  const [hide, setHide] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useContext(LanguageContext);

  const handleMenuClick = () => {
    setHide(!hide);
  };

  function handleLenguageClick2() {
    if (selectedLanguage == "") {
      window.location.href = "/en";
    } else if (selectedLanguage == "/es") {
      window.location.href = "/";
    } else {
      window.location.href = "/es";
    }
  }
  function handleLenguageClick1() {
    if (selectedLanguage == "") {
      window.location.href = "/es";
    } else if (selectedLanguage == "/es") {
      window.location.href = "/en";
    } else {
      window.location.href = "/";
    }
  }
  console.log(selectedLanguage);
  return (
    <>
      <HeaderComponent className={hide ? "fade" : ""}>
        <LogoComponent src={logo} alt="Logo" />
        <HeaderList>
          <HeaderOption
            href={
              selectedLanguage != ""
                ? "" + selectedLanguage
                : "/" + selectedLanguage
            }
          >
            <p className={props.homeStyle}>Home</p>
          </HeaderOption>

          <HeaderOption href={"/lineups" + selectedLanguage}>
            <p className={props.lineupsStyle}>LineUps</p>
            {/* <GlitchLineupsComponent background={GlitchLineups} /> */}
          </HeaderOption>

          <HeaderOption href={"/organizers" + selectedLanguage}>
            <p className={props.organizerStyle}>
              {selectedLanguage == "/"
                ? "Organizadores"
                : selectedLanguage == "/en"
                ? "Organizers"
                : "Organizadores"}
            </p>
          </HeaderOption>

          {/* <HeaderOption href={"/eventos" + selectedLanguage}>
            <p className={props.eventosStyle}>
              {selectedLanguage == "/"
                ? "Eventos"
                : selectedLanguage == "/en"
                ? "Events"
                : "Eventos"}
            </p>
          </HeaderOption> */}

          <HeaderOption href={"/parceiros" + selectedLanguage}>
            <p className={props.parceirosStyle}>
              {selectedLanguage == "/"
                ? "Parceiros"
                : selectedLanguage == "/en"
                ? "Partners"
                : "Parceiros"}
            </p>
          </HeaderOption>

          <HeaderOption href={"/inimigos" + selectedLanguage}>
            {/* <GlitchLineupsComponent background={question} /> */}
            <p className={props.inimigosStyle}>Inimigos</p>
          </HeaderOption>

          {/* <HeaderOption href={"/inimigos" + selectedLanguage}>
            <p className={props.inimigosStyle}>
              {selectedLanguage == "/"
                ? "Inimigos"
                : selectedLanguage == "/en"
                ? "Enemies"
                : "Inimigos"}
            </p>
          </HeaderOption> */}

          <HeaderOption href={"/staff" + selectedLanguage}>
            <p className={props.staffStyle}>Staff</p>
          </HeaderOption>

          {/* <HeaderOption href={"/camisas" + selectedLanguage}>
            <p className={props.camisasStyle}>
              {selectedLanguage == "/"
                ? "Camisas"
                : selectedLanguage == "/en"
                ? "Jerseys"
                : "Uniformes"}
            </p>
          </HeaderOption> */}
        </HeaderList>
        <Language>
          <LanguageCarousel>
            <LanguageOption>
              <LanguageIcon
                src={
                  selectedLanguage == ""
                    ? esplogo
                    : selectedLanguage == "/en"
                    ? brlogo
                    : usalogo
                }
                className={"sec"}
                onClick={handleLenguageClick1}
              />
              <LanguageText className={"sec"}>
                {selectedLanguage == ""
                  ? "ESP"
                  : selectedLanguage == "/en"
                  ? "PTBR"
                  : "ENG"}
              </LanguageText>
            </LanguageOption>
            <LanguageOption>
              <LanguageIcon
                src={
                  selectedLanguage == ""
                    ? brlogo
                    : selectedLanguage == "/en"
                    ? usalogo
                    : esplogo
                }
                className={""}
              />
              <LanguageText>
                {selectedLanguage == ""
                  ? "PTBR"
                  : selectedLanguage == "/en"
                  ? "ENG"
                  : "ESP"}
              </LanguageText>
            </LanguageOption>
            <LanguageOption>
              <LanguageIcon
                src={
                  selectedLanguage == ""
                    ? usalogo
                    : selectedLanguage == "/en"
                    ? esplogo
                    : brlogo
                }
                className={"thd"}
                onClick={handleLenguageClick2}
              />
              <LanguageText className={"sec"}>
                {selectedLanguage == ""
                  ? "ENG"
                  : selectedLanguage == "/en"
                  ? "ESP"
                  : "PTBR"}
              </LanguageText>
            </LanguageOption>
          </LanguageCarousel>
        </Language>

        <MenuMobileComponent
          src={hide ? iconWhite : iconPink}
          alt="LogoMobile"
          onClick={handleMenuClick}
        />
        <LogoMobileComponent src={logo} alt="LogoMobile" />
        <HeaderListMobile className={hide ? "hide" : ""}>
          <HeaderOptionMobile
            href={
              selectedLanguage != ""
                ? "" + selectedLanguage
                : "/" + selectedLanguage
            }
          >
            {" "}
            <p className={props.homeStyle}>Home</p>{" "}
          </HeaderOptionMobile>

          <HeaderOptionMobile href={"/lineups" + selectedLanguage}>
            <p className={props.lineupsStyle}>LineUps</p>
          </HeaderOptionMobile>

          {/* <HeaderOptionMobile href={"/eventos" + selectedLanguage}>
            <p className={props.eventosStyle}>
              {selectedLanguage == "/"
                ? "Eventos"
                : selectedLanguage == "/en"
                ? "Events"
                : "Eventos"}
            </p>
          </HeaderOptionMobile> */}

          <HeaderOptionMobile href={"/parceiros" + selectedLanguage}>
            <p className={props.parceirosStyle}>
              {selectedLanguage == "/"
                ? "Parceiros"
                : selectedLanguage == "/en"
                ? "Partners"
                : "Parceiros"}
            </p>
          </HeaderOptionMobile>

          <HeaderOptionMobile href={"/inimigos" + selectedLanguage}>
            <p className={props.inimigosStyle}>
              {selectedLanguage == "/"
                ? "Inimigos"
                : selectedLanguage == "/en"
                ? "Enemies"
                : "Inimigos"}
            </p>
          </HeaderOptionMobile>

          <HeaderOptionMobile href={"/staff" + selectedLanguage}>
            <p className={props.staffStyle}>Staff</p>
          </HeaderOptionMobile>

          {/* <HeaderOptionMobile href={"/camisas" + selectedLanguage}>
            <p className={props.camisasStyle}>
              {selectedLanguage == "/"
                ? "Uniformes"
                : selectedLanguage == "/en"
                ? "Jerseys"
                : "Uniformes"}
            </p>
          </HeaderOptionMobile> */}

          <HeaderOptionMobile>
            <LanguageMobile>
              <LanguageCarousel>
                <LanguageOption>
                  <LanguageIcon
                    src={
                      selectedLanguage == ""
                        ? esplogo
                        : selectedLanguage == "/en"
                        ? brlogo
                        : usalogo
                    }
                    className={"sec"}
                    onClick={handleLenguageClick1}
                  />
                  <LanguageText className={"sec"}>
                    {selectedLanguage == ""
                      ? "ESP"
                      : selectedLanguage == "/en"
                      ? "PTBR"
                      : "ENG"}
                  </LanguageText>
                </LanguageOption>
                <LanguageOption>
                  <LanguageIcon
                    src={
                      selectedLanguage == ""
                        ? brlogo
                        : selectedLanguage == "/en"
                        ? usalogo
                        : esplogo
                    }
                    className={""}
                  />
                  <LanguageText>
                    {selectedLanguage == ""
                      ? "PTBR"
                      : selectedLanguage == "/en"
                      ? "ENG"
                      : "ESP"}
                  </LanguageText>
                </LanguageOption>
                <LanguageOption>
                  <LanguageIcon
                    src={
                      selectedLanguage == ""
                        ? usalogo
                        : selectedLanguage == "/en"
                        ? esplogo
                        : brlogo
                    }
                    className={"thd"}
                    onClick={handleLenguageClick2}
                  />
                  <LanguageText className={"sec"}>
                    {selectedLanguage == ""
                      ? "ENG"
                      : selectedLanguage == "/en"
                      ? "ESP"
                      : "PTBR"}
                  </LanguageText>
                </LanguageOption>
              </LanguageCarousel>
            </LanguageMobile>
          </HeaderOptionMobile>
        </HeaderListMobile>
      </HeaderComponent>
    </>
  );
};

export default Header;
