import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useWindowScroll } from "react-use";
import { useSnapCarousel } from "react-snap-carousel";
import {
  Card,
  TextCard,
  ImgComponent,
  Colocacoes,
  Text,
  Carousel,
  MarkText,
  CaroulselPrev,
  CaroulselNext,
  SubColoc,
  TitleCard,
  Title,
  CardContent,
  ImageLoader,
  Modal,
  Icon,
} from "./style";
import Spinner from "../../components/Spinner/Spinner";
import close from "../../assets/close.png";
const EventCard = (props) => {
  const [carousel, setcarousel] = useState(0);
  function setcarouselsetter(x) {
    if (x < props.photocount && x > -1) {
      setcarousel(x);
    }
  }
  const { x, y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((y / height) * 100);
    console.log("/");
  }, [y]);
  function NewlinePosition(props) {
    const text = props.position;
    return text.split("\n").map((str) => <p>{str}</p>);
  }
  const position = NewlinePosition(props);
  return (
    <>
      <Card>
        <CardContent>
          <TitleCard>
            <Title>{props.title} <br></br><Text>{props.date}</Text></Title>
          </TitleCard>
          <TextCard>
            <Text>{props.text}</Text>
            <Colocacoes>
              <SubColoc>
                <Text>{position}</Text>
              </SubColoc>
            </Colocacoes>
          </TextCard>
        </CardContent>
        <Carousel>
          <ImageLoader>
            <Spinner />
          </ImageLoader>
          {carousel === 0 && <ImgComponent src={props.foto1} />}
          {carousel === 1 && <ImgComponent src={props.foto2} />}
          {carousel === 2 && <ImgComponent src={props.foto3} />}
          {carousel === 3 && <ImgComponent src={props.foto4} />}
          {carousel === 4 && <ImgComponent src={props.foto5} />}
          <MarkText>
            {carousel + 1}/{props.photocount}
          </MarkText>
          {carousel > 0 && (
            <CaroulselPrev onClick={() => setcarouselsetter(carousel - 1)} />
          )}
          {carousel < props.photocount - 1 && (
            <CaroulselNext onClick={() => setcarouselsetter(carousel + 1)} />
          )}
        </Carousel>
      </Card>
    </>
  );
};

export default EventCard;
