import { FooterComponent, FooterText, FooterLink } from "./style.js";
import "./style.js";
import inglogo from "../../assets/inglogo.png";
import twitterlogo from "../../assets/twitterlogo.png";
import emaillogo from "../../assets/emaillogo.png";
const Footer = () => {
  return (
    <FooterComponent>
      <FooterText>
        <FooterLink
          target="_blank"
          href={"https://twitter.com/GrupoEsports"}
          logo={twitterlogo}
        ></FooterLink>
      </FooterText>
    </FooterComponent>
  );
};

export default Footer;
