import { FooterComponent, FooterText, FooterLink} from "./style";
import "./style.js";

const Footer = () => {
  return (
    <FooterComponent>
            <FooterText>Instagram: <FooterLink target="_blank" href={"https://www.instagram.com/o_grupo_do_grupo/"}>o_grupo_do_grupo</FooterLink><br></br>Email: ogrupo528@gmail.com</FooterText>
            
    </FooterComponent>
  );
};

export default Footer;
