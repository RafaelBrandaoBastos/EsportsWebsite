import { HeaderComponent, HeaderList, HeaderOption, LogoComponent} from "./style";
import "./style.js";
import logo from '../../assets/grupo.png';

const Header = (props) => {
  return (
    <HeaderComponent>
        <HeaderList>
            <LogoComponent src={logo} alt ="Logo"/>
            <HeaderOption href="/"> <p className={props.homeStyle}>Home</p> </HeaderOption>
            <HeaderOption href="/lineups"><p className={props.lineupsStyle}>LineUps</p></HeaderOption>
            <HeaderOption href="/eventos"><p className={props.eventosStyle}>Eventos</p></HeaderOption>
            <HeaderOption href="/streamers"><p className={props.streamersStyle}>Streamers</p></HeaderOption>
        </HeaderList>
    </HeaderComponent>
  );
};

export default Header;
