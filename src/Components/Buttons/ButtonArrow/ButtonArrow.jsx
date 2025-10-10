import React from 'react';
import { Arrow } from './ButtonArrow-style';
import { motion } from 'framer-motion';


export default function ButtonArrow({
   variants = {
      active: { rotate: 45 },
      static: { rotate: 0 },
   },
   isOpen }) {

   return (
      <Arrow>
         <motion.svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={variants}
            animate={isOpen ? "active" : "static"}
         >
            <path d="M2.05881 9.48302L8.72282 2.7967L8.0811 2.15283H1.31836M9.06836 10.3403V5.46533" stroke="white" strokeWidth="2.5" />
         </motion.svg>
      </Arrow>
   );
};