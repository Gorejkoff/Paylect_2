import React, { useEffect, useRef } from "react";
import { Container } from "../Global-Components/Container";
import { LottieBody, LottieScreen } from "./First-screen-style";
import Lottie from "lottie-react";
import processing from "../../json/processing1.json";
import { useInView } from "framer-motion";

export default function LottieBlock() {
  const contRef = useRef();
  const lottieRef = useRef();

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
    <LottieBody ref={contRef}>
      <Container>
        <LottieScreen>
          <Lottie animationData={processing} loop={true} lottieRef={lottieRef} />
        </LottieScreen>
      </Container>
    </LottieBody>
  );
}
