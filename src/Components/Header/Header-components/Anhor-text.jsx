import React from "react";
import * as C from '../Header-style';
import { useScramble } from "use-scramble";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import useOpenModal from "../../../Hooks/ModalsHooks/useOpenModal";



const variantsHover = {
   hover: { x: -5 },
   leave: { x: 0 }
}

const variantsSVG = {
   hover: {
      opacity: 1,
      x: 5,
      y: "-50%"
   },
   leave: {
      opacity: 0,
      x: 0,
      y: "-50%"
   }
}

const styleMask = {
   display: "block",
   padding: "6px",
   position: "absolute",
   top: "0px",
   left: "0px",
   width: "100%",
   whiteSpace: "nowrap"
}
const arrow = {
   position: "absolute",
   top: "50%",
   right: "0px",
}

export default function AnhorText({ item, scrollAnhor }) {

   const { ref, replay } = useScramble({
      text: item.name,
      step: 0.1,
      scramble: 10,
   });

   const propsLink =
      item.link ?
         {
            as: NavLink,
            to: "/" + item.link
         } :
         {
            href: "#anhor" + item.id,
            onClick: () => { scrollAnhor("#anhor" + item.id) }
         }

   const propsButton = {
      type: 'button',
      onClick: useOpenModal(item.id)
   }
   const Tag = item.type === 'button' ? C.AnhorButton : C.AnhorLink;
   const props = item.type === 'button' ? propsButton : propsLink;

   return (

      <Tag
         {...props}
      >
         <motion.span
            initial="leave"
            animate="leave"
            whileHover="hover"
         >
            <C.AnhorLinkText>
               {item.name}
            </C.AnhorLinkText>

            <motion.span
               style={styleMask}
               ref={ref}
               onMouseOver={replay}
               onFocus={replay}
               variants={variantsHover}
            />

            <motion.svg width="10" height="10" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"
               style={arrow}
               variants={variantsSVG}
            >
               <path d="M21.6901 8.83038L12.9994 17.6558L11.8648 16.5035L18.6185 9.64512L0.830078 9.64512L0.830078 8.01564L18.6185 8.01564L11.8648 1.1573L12.9994 0.00499916L21.6901 8.83038Z" fill="white" />
            </motion.svg>

         </motion.span>
      </Tag>

   )
}