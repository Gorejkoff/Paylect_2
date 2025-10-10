import React from "react";
import { useScramble } from "use-scramble";
import { motion } from "framer-motion";
import { FooterButton, FooterAnhorText } from './Footer-style';



const styleMask = {
   display: "block",
   position: "absolute",
   top: "0px",
   left: "0px",
   width: "100%",
   color: "inherit"
}



export default function Link({ text, scrollAnhor }) {
   const { ref, replay } = useScramble({
      text: text,
      step: 0.1,
      scramble: 10,
   });



   return (


      <FooterButton href="#top" onClick={() => { scrollAnhor("top") }}>
         <span>
            <FooterAnhorText>
               {text}
            </FooterAnhorText>

            <motion.span
               style={styleMask}
               ref={ref}
               onMouseOver={replay}
               onFocus={replay}
            />

         </span>
         <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4551 20.6455L10.4551 3.08594L9.58008 3.08594L2.58008 9.7526M18.2051 10.3478L14.7676 7.07403" stroke="white" strokeWidth="5" />
         </svg>
      </FooterButton>



















   )
}



/* 
<motion.a
         href={"#anhor" + props.props.id}
         onClick={() => { props.scrollAnhor("#anhor" + props.props.id) }}
      >
         <FooterAnhorText>
            {props.props.name}
         </FooterAnhorText>

         <motion.span
            style={styleMask}
            ref={ref}
            onMouseOver={replay}
            onFocus={replay}
         />

      </motion.a> */