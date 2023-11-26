import {
  HeaderComponent,
  HeaderList,
  HeaderOption,
  LogoComponent,
  HeaderListMobile,
  LogoComponentMobile,
  HeaderOptionMobile,
  LogoMobileComponent,
  LanguageIcon,
  Language,
  LanguageText,
  LanguageCarousel,
  LanguageMobile,
  Arrow,
} from "./style";
import React, {
  useEffect,
  useState,
  useRef,
  useContext,
} from "react";
import "./style.js";
import logo from "../../assets/grupo.png";
import iconWhite from "../../assets/iconWhite.png";
import iconPink from "../../assets/iconPink.png";
import brlogo from "../../assets/brlogo.png";
import usalogo from "../../assets/usalogo.png";
import esplogo from "../../assets/esplogo.png";
import arrowl from "../../assets/arrowl.png";
import arrowr from "../../assets/arrowr.png";
import { LanguageContext } from "../../contexts/LanguageProvider";

const Header = (props) => {
  const [hide, setHide] = useState(true);
  const [path, setPath] = useState(window.location.pathname);
  const [selectedLanguage, setSelectedLanguage] = useContext(LanguageContext);
  
  console.log("page location: " + path);

  const handleMenuClick = () => {
    setHide(!hide);
  };

  function handleLenguageClick() {
    if (path == "/es" || path == "/en") {
      window.location.href = "/";
    }
    if (selectedLanguage == 2) {
      setSelectedLanguage(0);
    } else {
      setSelectedLanguage(selectedLanguage + 1);
    }
  };

  return (
    <>
      <HeaderComponent className={hide ? "fade" : ""}>
        <LogoComponent src={logo} alt="Logo" />
        <HeaderList>
          <HeaderOption href="/">
            {" "}
            <p className={props.homeStyle}>Home</p>{" "}
          </HeaderOption>

          <HeaderOption href="/lineups">
            <p className={props.lineupsStyle}>LineUps</p>
          </HeaderOption>

          <HeaderOption href="/eventos">
            <p className={props.eventosStyle}>
              {selectedLanguage == 0
                ? "Eventos"
                : selectedLanguage == 1
                ? "Events"
                : "Eventos"}
            </p>
          </HeaderOption>

          <HeaderOption href="/parceiros">
            <p className={props.parceirosStyle}>
              {selectedLanguage == 0
                ? "Parceiros"
                : selectedLanguage == 1
                ? "Partners"
                : "Parceiros"}
            </p>
          </HeaderOption>

          <HeaderOption href="/staff">
            <p className={props.staffStyle}>Staff</p>
          </HeaderOption>
        </HeaderList>
        <Language onClick={handleLenguageClick}>
          <LanguageCarousel>
            <LanguageIcon
              src={brlogo}
              className={
                selectedLanguage === 0
                  ? ""
                  : selectedLanguage === 1
                  ? "thd"
                  : "sec"
              }
            />
            <LanguageIcon
              src={usalogo}
              className={
                selectedLanguage === 0
                  ? "sec"
                  : selectedLanguage === 1
                  ? ""
                  : "thd"
              }
            />
            <LanguageIcon
              src={esplogo}
              className={
                selectedLanguage === 0
                  ? "thd"
                  : selectedLanguage === 1
                  ? "sec"
                  : ""
              }
            />
          </LanguageCarousel>
          <Arrow src={arrowl} className="l" />
          <LanguageText>
            {selectedLanguage == 0
              ? "PT/BR"
              : selectedLanguage == 1
              ? "ENG"
              : "ESP"}
          </LanguageText>
          <Arrow src={arrowr} className="r" />
        </Language>

        <LogoMobileComponent
          src={iconPink}
          alt="LogoMobile"
          onClick={handleMenuClick}
        />
        <HeaderListMobile className={hide ? "hide" : ""}>
          <HeaderOptionMobile href="/">
            {" "}
            <p className={props.homeStyle}>Home</p>{" "}
          </HeaderOptionMobile>

          <HeaderOptionMobile href="/staff">
            <p className={props.staffStyle}>Staff</p>
          </HeaderOptionMobile>

          <HeaderOptionMobile href="/lineups">
            <p className={props.lineupsStyle}>LineUps</p>
          </HeaderOptionMobile>

          <HeaderOptionMobile href="/eventos">
            <p className={props.eventosStyle}>
              {selectedLanguage == 0
                ? "Eventos"
                : selectedLanguage == 1
                ? "Events"
                : "Eventos"}
            </p>
          </HeaderOptionMobile>

          <HeaderOptionMobile href="/parceiros">
            <p className={props.parceirosStyle}>
              {selectedLanguage == 0
                ? "Parceiros"
                : selectedLanguage == 1
                ? "Partners"
                : "Parceiros"}
            </p>
          </HeaderOptionMobile>

          <HeaderOptionMobile>
            <LanguageMobile onClick={handleLenguageClick}>
              <LanguageCarousel>
                <LanguageIcon
                  src={brlogo}
                  className={
                    selectedLanguage === 0
                      ? ""
                      : selectedLanguage === 1
                      ? "thd"
                      : "sec"
                  }
                />
                <LanguageIcon
                  src={usalogo}
                  className={
                    selectedLanguage === 0
                      ? "sec"
                      : selectedLanguage === 1
                      ? ""
                      : "thd"
                  }
                />
                <LanguageIcon
                  src={esplogo}
                  className={
                    selectedLanguage === 0
                      ? "thd"
                      : selectedLanguage === 1
                      ? "sec"
                      : ""
                  }
                />
              </LanguageCarousel>
              <Arrow src={arrowl} className="l" />
              <LanguageText>
                {selectedLanguage == 0
                  ? "PT/BR"
                  : selectedLanguage == 1
                  ? "ENG"
                  : "ESP"}
              </LanguageText>
              <Arrow src={arrowr} className="r" />
            </LanguageMobile>
          </HeaderOptionMobile>
        </HeaderListMobile>
      </HeaderComponent>
    </>
  );
};

export default Header;
