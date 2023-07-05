import "./style.js"
import React, { useEffect, useState, useRef } from "react";
import {ArrowComponent, Container} from "./style";
import arrow from "../../assets/arrow.png"

const Arrow = (props) => {

    useEffect(() => {
        console.log(props.scroll);
        console.log(props.height);
    }, [props.scroll]);

    if(document.body.clientHeight < window.innerHeight || props.scroll < (props.height - 40)) {
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
