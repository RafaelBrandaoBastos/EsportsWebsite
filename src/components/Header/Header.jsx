import { HeaderComponent, HeaderList, HeaderOption, LogoComponent, HeaderListMobile, LogoComponentMobile, HeaderOptionMobile} from "./style";
import "./style.js";
import logo from '../../assets/grupo.png';

const Header = (props) => {
  return (
    <HeaderComponent>
        <LogoComponent src={logo} alt ="Logo"/>
        <HeaderList>
            <HeaderOption href="/" target="_blank"> <p className={props.homeStyle}>Home</p> </HeaderOption>
            <HeaderOption href="/lineups" target="_blank"><p className={props.lineupsStyle}>LineUps</p></HeaderOption>
            <HeaderOption href="/eventos" target="_blank"><p className={props.eventosStyle}>Eventos</p></HeaderOption>
            <HeaderOption href="/Parceiros" target="_blank"><p className={props.parceirosStyle}>Parceiros</p></HeaderOption>
        </HeaderList>
        <HeaderListMobile>
            <HeaderOptionMobile href="/" target="_blank"> <p className={props.homeStyle}>Home</p> </HeaderOptionMobile>
            <HeaderOptionMobile href="/lineups" target="_blank"><p className={props.lineupsStyle}>LineUps</p></HeaderOptionMobile>
            <HeaderOptionMobile href="/eventos" target="_blank"><p className={props.eventosStyle}>Eventos</p></HeaderOptionMobile>
            <HeaderOptionMobile href="/Parceiros" target="_blank"><p className={props.parceirosStyle}>Parceiros</p></HeaderOptionMobile>
        </HeaderListMobile>
    </HeaderComponent>
  );
};

export default Header;
