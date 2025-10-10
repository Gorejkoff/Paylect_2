import React, { useRef } from "react";
import Lottie from "lottie-react";
import * as S from "./Advantages-style";

export default function AdvantagesCard(props) {
  const lottieRef = useRef();

  return (
    <S.CardBody
      onPointerEnter={() => lottieRef.current?.play()}
      onPointerLeave={() => lottieRef.current?.stop()}
    >
      <S.CardHeader>
        <span>{props.data.header[0]}</span>
        <h2>{props.data.header[1]}</h2>
      </S.CardHeader>
      {props.data.json ? (
        <S.CardImage>
          <Lottie
            lottieRef={lottieRef}
            animationData={require(`../../json/${props.data.json}`)}
            style={{ width: "150px" }}
            loop={true}
            autoplay={false}
          />
        </S.CardImage>
      ) : (
        <S.CardImage>{props.data.image}</S.CardImage>
      )}
      <S.CardTitle>{props.data.title}</S.CardTitle>
      <S.CardLine />
      <S.CardText>{props.data.text}</S.CardText>
      <S.CardNumber>00{props.data.id}.</S.CardNumber>
    </S.CardBody>
  );
}
