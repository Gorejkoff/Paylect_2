import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import * as S from "./Services-style";
import Button from "../Buttons/ButtonText/Button";
import { useInView } from "framer-motion";
import useOpenModal from "../../Hooks/ModalsHooks/useOpenModal";

export default function ServicesBlock(props) {
  const contRef = useRef();
  const lottieRef = useRef();
  const openModalContact = useOpenModal('contacts');
  const inView = useInView(contRef);

  useEffect(() => {
    if (lottieRef.current) {
      if (inView) {
        lottieRef.current.play();
      } else {
        lottieRef.current.stop();
      }
    }
  }, [inView]);

  return (
    <S.ServicesBlockBody>
      <S.ServicesBlockNumber>S/00{props.data.id}</S.ServicesBlockNumber>

      <S.ServicesBlockContent>
        <S.ServicesBlockContentWrapper>
          <S.ServicesBlockTitle>{props.data.title}</S.ServicesBlockTitle>
          <S.ServicesBlockText>{props.data.text}</S.ServicesBlockText>

          {props.data.button && (
            <S.ServicesWrapperButton>
              <Button
                action={openModalContact}
                text="Try out accepting crypto now"
              />
            </S.ServicesWrapperButton>
          )}
        </S.ServicesBlockContentWrapper>
      </S.ServicesBlockContent>

      <S.ServicesBlockLottie>
        <S.ServicesImage ref={contRef}>
          {props.data.json ? (
            <Lottie
              lottieRef={lottieRef}
              animationData={require(`../../json/${props.data.json}`)}
              loop={true}
              autoplay={false}
            />
          ) : (
            <S.Image src={require(`../../image/svg/${props.data.littie}`)} alt="анимация" />
          )}
        </S.ServicesImage>
      </S.ServicesBlockLottie>
    </S.ServicesBlockBody>
  );
}
