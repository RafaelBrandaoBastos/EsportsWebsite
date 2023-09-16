import {Container, PlayerCardComponent, Text, Icon} from"./style.js"
import React, { useEffect, useState, useRef } from "react";
import cover from "../../assets/players/cover.png"

const PlayerCard = (props) => {
  
        return (
            <Container>
                <Text size={props.size} top={props.top} right={props.right} left={props.left}>{props.nick}</Text>
                <PlayerCardComponent color="blue" src={cover} player={props.player}/>
                <Icon src={props.icon}/>
            </Container>
        );
    
};

export default PlayerCard;
