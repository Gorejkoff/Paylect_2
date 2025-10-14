import React from 'react';
import * as S from './Message.style';


export default function Message({ text, color }) {
   function setColor() {
      if (color === "green") return { color: '#00FF8A' };
      if (color === "red") return { color: '#FF6338' };
      return { color: '#F4F6F6' }
   }

   const successStyle = setColor();

   return (
      <S.Message
         style={{ ...successStyle }}
      >
         {Array.isArray(text) ? text.map((e, i) => <React.Fragment key={i}>{e}</React.Fragment>) : text}
      </S.Message >
   );
};