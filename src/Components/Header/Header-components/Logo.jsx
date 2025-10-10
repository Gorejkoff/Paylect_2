import { React, useRef } from "react";
import { Logo } from "../Header-style";
import Lottie from "lottie-react";
import logoJSON from '../../../json/logo.json'
import useHoverLottie from "../../../Hooks/useHoverLottie";
import { NavLink } from "react-router-dom";



export default function HeaderLogo() {



   const logoRef = useRef(null);

   const hoverLottie = useHoverLottie(logoRef);

   return (
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
   )
}