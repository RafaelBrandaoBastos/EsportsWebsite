import "./style.js"
import React, { useEffect, useState, useRef } from "react";
import {ArrowComponent, Container} from "./style";
import arrow from "../../assets/arrow.png"

const Arrow = (props) => {

    useEffect(() => {
        console.log(props.scroll);
        console.log(props.height);
    }, [props.scroll]);

    if((document.body.clientHeight == 0) || props.scroll < (props.height - 120)) {
        return (
            <Container>
                <ArrowComponent href="#" src={arrow} className="arrow"/>
            </Container>
        );
    }
    return (
        <>
        </>
    );
};

export default Arrow;
