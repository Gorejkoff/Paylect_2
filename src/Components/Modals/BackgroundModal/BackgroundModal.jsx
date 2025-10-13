import React from 'react';
import * as S from './BackgroundModal.style';

const animationBackground = {
   visible: {
      top: 0,
      transition: "top 1s cubic-bezier(.77,0,.175,1)",
   },
   hidden: {
      top: "-120vh",
      transition: "top 1s 0.1s cubic-bezier(.77,0,.175,1)",
   },
};

export default function BackgroundModal({ children, isOpen }) {

   return (

      <S.Shell>
         <S.Background
            style={isOpen ? animationBackground.visible : animationBackground.hidden}
         />
         {children}
      </S.Shell>

   );
};