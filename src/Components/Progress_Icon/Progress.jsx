import React from 'react';
import * as S from './Progress.style';
import { motion } from 'framer-motion';

const variant = {
   start: {
      left: 0,
   },
   finish: {
      left: 'calc(100% - 15px)',
   }
}

const animation = {
   left: [0, '20px'],
   width: ['10px', '20px', '10px'],
   transition: {
      left: {
         duration: 1,
         ease: [0.4, 0, 0.9, 1],
         repeat: Infinity,
         repeatType: "reverse"
      },
      width: {
         duration: 1,
         ease: 'linear',
         repeat: Infinity,
         repeatType: "reverse",
      }
   }
}

export default function Progress({ text }) {

   return (

      <S.Body>
         {text}
         <S.Icon>
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect y="0.459961" width="6" height="6" fill="white" />
               <rect x="9" y="0.459961" width="6" height="6" fill="white" />
               <rect x="18" y="0.459961" width="6" height="6" fill="white" />
               <rect y="9.45996" width="6" height="6" fill="white" />
               <rect x="9" y="9.45996" width="6" height="6" fill="white" />
               <rect x="18" y="9.45996" width="6" height="6" fill="white" />
            </svg>
            <motion.span
               variants={variant}
               // initial='start'
               // animate='finish'
               animate={animation}
            />
         </S.Icon>

      </S.Body>
   );
};