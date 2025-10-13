import { React, useRef } from "react";
import * as S from './Button-style';
import { motion, useInView } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useScramble } from "use-scramble";


const hoverButton = {
   hover: {},
   static: {}
}
const styleLineH = {
   display: "block",
   position: "absolute",
   left: "50%",
   zIndex: 1,
   transform: "translateX(-50%)",
   height: "1px",
   backgroundColor: "var(--color-white-solid)",
}
const styleLineTopV = {
   display: "block",
   position: "absolute",
   zIndex: 1,
   top: 0,
   transform: "translateX(-50%)",
   width: "1px",
   backgroundColor: "var(--color-white-solid)",
}
const styleLineBottomV = {
   display: "block",
   position: "absolute",
   zIndex: 1,
   bottom: 0,
   transform: "translateX(-50%) rotate(180deg)",
   width: "1px",
   backgroundColor: "var(--color-white-solid)",
}
const styleMask = {
   position: "absolute",
   top: "0",
   left: "0",
   opacity: 1,
   pointerEvents: "all",
}
const hoverButtonArrow = {
   hover: {
      rotate: 45,
      transition: { duration: 0.3 }
   },
   static: {}
}
const variantsH = {
   hide: {
      width: 0,
      transition: {
         duration: 0.5,
         delay: 0.5
      }
   },
   show: {
      width: "100%",
      transition: {
         duration: 0.5
      }
   }
}
const variantsV = {
   hide: {
      height: 0,
      transition: {
         duration: 0.5
      }
   },
   show: {
      height: "18%",
      transition: {
         duration: 0.5,
         delay: 0.5
      }
   }
}
export default function Button({ action, text, type, nameClass, href }) {

   const MotionElement = href ? motion.create(NavLink) : motion.button;
   const media768 = window.matchMedia('(min-width: 768px)');
   const trigger = useRef(null);
   const isInView = useInView(trigger, { amount: 1, once: !media768.matches });
   const { ref, replay } = useScramble({
      text: text,
      step: 0.1,
      scramble: 10,
   });

   return (

      <S.Button ref={trigger} className={nameClass}>
         <MotionElement
            {...(href ?
               {
                  to: href
               } :
               {
                  type: type || "button"
               })}
            onClick={action}
            initial="static"
            whileHover="hover"
            variants={hoverButton}
         >
            <motion.span
               style={{ ...styleLineH, top: 0 }}
               variants={variantsH}
               initial="hide"
               animate={isInView ? "show" : "hide"}
            />
            <motion.span
               style={{ ...styleLineH, bottom: 0 }}
               variants={variantsH}
               initial="hide"
               animate={isInView ? "show" : "hide"}
            />
            <motion.span
               style={{ ...styleLineTopV, left: 0 }}
               variants={variantsV}
               initial="hide"
               animate={isInView ? "show" : "hide"}
            />
            <motion.span
               style={{ ...styleLineTopV, right: 0 }}
               variants={variantsV}
               initial="hide"
               animate={isInView ? "show" : "hide"}
            />
            <motion.span
               style={{ ...styleLineBottomV, left: 0 }}
               variants={variantsV}
               initial="hide"
               animate={isInView ? "show" : "hide"}
            />
            <motion.span
               style={{ ...styleLineBottomV, right: 0 }}
               variants={variantsV}
               initial="hide"
               animate={isInView ? "show" : "hide"}
            />

            <S.ButtonTextWrapper>
               <S.ButtonText
                  style={styleMask}
                  ref={ref}
                  onMouseOver={replay}
                  onFocus={replay}
               />
               <S.ButtonText>
                  {text}
               </S.ButtonText>
            </S.ButtonTextWrapper>

            <S.ButtonArrowWrapper>

               <motion.span
                  style={{ ...styleLineTopV, left: 0 }}
                  variants={variantsV}
                  initial="hide"
                  animate={isInView ? "show" : "hide"}
               />

               <motion.span
                  style={{ ...styleLineBottomV, left: 0 }}
                  variants={variantsV}
                  initial="hide"
                  animate={isInView ? "show" : "hide"}
               />

               <S.ButtonArrow>
                  <motion.svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                     variants={hoverButtonArrow}
                  >
                     <path d="M2.05881 9.48302L8.72282 2.7967L8.0811 2.15283H1.31836M9.06836 10.3403V5.46533" stroke="white" strokeWidth="2.5" />
                  </motion.svg>
               </S.ButtonArrow>
            </S.ButtonArrowWrapper>
         </MotionElement>
      </S.Button >

   )
}  