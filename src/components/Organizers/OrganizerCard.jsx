import React, { useEffect, useState, useRef } from "react";
import {
    TextCard,
    ImageComponent,
    Text,
    OrganizerTitle,
    OrganizerCardComponent,
    SrcLink
  } from "./style";

  const OrganizerCard = (props) => {
    return (
      <OrganizerCardComponent>
        <ImageComponent src={props.img} />
        <TextCard>
          <OrganizerTitle size={"35px"}>{props.title}</OrganizerTitle>
          <Text>{props.text}</Text>
          <br />
          <SrcLink
            size={"23px"}
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.linkText}
          </SrcLink>
        </TextCard>
      </OrganizerCardComponent>
    );
  };
  

export default OrganizerCard;
