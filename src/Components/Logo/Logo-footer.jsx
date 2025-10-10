import { React, useRef } from "react";
import { Container } from "../Global-Components/Container";
import { Logo } from "./Logo-style";
import Lottie from "lottie-react";
import logoJSON from '../../json/logo_green.json';
import useHoverLottie from "../../Hooks/useHoverLottie";
import { NavLink } from "react-router-dom";



export default function LogoFooter() {

   const logoRef = useRef(null);

   const hoverLottie = useHoverLottie(logoRef);

   return (
      <Container>
         <Logo>
            <NavLink to="/">
               <Lottie animationData={logoJSON}
                  lottieRef={logoRef}
                  loop={false}
                  autoplay={false}
                  onMouseEnter={() => { hoverLottie.play() }}
                  onMouseLeave={() => { hoverLottie.stop() }}
                  onComplete={() => hoverLottie.check()}
               />
            </NavLink>
         </Logo>
      </Container>
   )
}

