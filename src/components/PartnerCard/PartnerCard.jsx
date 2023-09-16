import React, { useEffect, useState, useRef } from "react";
import {
    TextCard,
    ImageComponent,
    Text,
    PartnerTitle,
    PartnerCardComponent,
    SrcLink
  } from "./style";

const PartnerCard = (props) => {
  
        return (
            <PartnerCardComponent>
              <ImageComponent src={props.img}/>
              <TextCard>
                <PartnerTitle size={"35px"}>{props.title}</PartnerTitle>
                <Text>{props.text}
                <br></br><SrcLink size={"23px"} href={props.link} target="_blank">{props.link}</SrcLink></Text>
              </TextCard>
            </PartnerCardComponent>
        );
    
};

export default PartnerCard;
