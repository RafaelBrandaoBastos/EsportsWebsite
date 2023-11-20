import { HeaderComponent, HeaderList, HeaderOption, LogoComponent, HeaderListMobile, LogoComponentMobile, HeaderOptionMobile, LogoMobileComponent} from "./style";
import React, { useEffect, useState, useRef } from "react";
import "./style.js";
import logo from '../../assets/grupo.png';
import iconmenu from '../../assets/iconmenu.png';
const Header = (props) => {
    const [hide, setHide] = useState(false);
    const handleClick = () => {
        setHide(!hide);
    };
    return (
        <HeaderComponent className={hide ? "fade" : ""}>
            <LogoComponent src={logo} alt ="Logo"/>
            <HeaderList>
                <HeaderOption href="/"> <p className={props.homeStyle}>Home</p> </HeaderOption>
                <HeaderOption href="/lineups"><p className={props.lineupsStyle}>LineUps</p></HeaderOption>
                <HeaderOption href="/eventos"><p className={props.eventosStyle}>Eventos</p></HeaderOption>
                <HeaderOption href="/parceiros"><p className={props.parceirosStyle}>Parceiros</p></HeaderOption>
                <HeaderOption href="/staff"><p className={props.staffStyle}>Staff</p></HeaderOption>
            </HeaderList>
            <LogoMobileComponent src={iconmenu} alt ="LogoMobile" onClick={handleClick}/>
            <HeaderListMobile className={hide ? "hide" : ""}>
                <HeaderOptionMobile href="/"> <p className={props.homeStyle}>Home</p> </HeaderOptionMobile>
                <HeaderOptionMobile href="/staff"><p className={props.staffStyle}>Staff</p></HeaderOptionMobile>
                <HeaderOptionMobile href="/lineups"><p className={props.lineupsStyle}>LineUps</p></HeaderOptionMobile>
                <HeaderOptionMobile href="/eventos"><p className={props.eventosStyle}>Eventos</p></HeaderOptionMobile>
                <HeaderOptionMobile href="/parceiros"><p className={props.parceirosStyle}>Parceiros</p></HeaderOptionMobile>
            </HeaderListMobile>
        </HeaderComponent>
    );
};

export default Header;
