import React from "react";
import { Button } from './Button.style';
import { motion } from "framer-motion";


const variants = {
   hover: {
      stroke: "var(--color-spring-green-73)",
      rotate: 180,
      transition: {
         duration: 0.5
      }
   },
   leave: {
      rotate: 0,
      transition: {
         duration: 0.5
      }
   }
}

const variantsSVG = {
   hover: {
      stroke: "var(--color-spring-green-73)",
      transition: {
         stroke: { duration: 0.5 }
      }
   },
   leave: {
      stroke: "var(--color-white-solid)",
      transition: {
         stroke: { duration: 0.5 }
      }
   }
}


export default function ButtonClose({ action }) {
   return (
      <Button type="button" onClick={action}
      >
         <motion.svg width="127" height="127" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg"
            initial="leave"
            animate="leave"
            whileHover="hover"
            variants={variants}
         >
            <motion.circle cx="65.5" cy="65.5" r="64" stroke="white" fill="#141414" strokeWidth="2.15" variants={variantsSVG} />
            <motion.line x1="35.2929" y1="95.2929" x2="95.2929" y2="35.2929" stroke="white" strokeWidth="2" variants={variantsSVG} />
            <motion.line x1="36.7071" y1="35.2929" x2="96.7071" y2="95.2929" stroke="white" strokeWidth="2" variants={variantsSVG} />
         </motion.svg>
      </Button>
   )

}