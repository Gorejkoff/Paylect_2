import React from 'react';
import { Background } from './BackgroundModal.style';

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

export default function BackgroundModal({ isOpen }) {

   return (
      <Background
         style={isOpen ? animationBackground.visible : animationBackground.hidden}
      />
   );
};