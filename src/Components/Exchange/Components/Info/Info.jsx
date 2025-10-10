import React from 'react';
import * as S from './Info.style';

export default function Info({ title, value, message, className }) {

   return (
      <S.Info>
         {title && <S.InfoTitle>{title}</S.InfoTitle>}
         {value && <S.InfoValue className={className}>{value}</S.InfoValue>}
         {message && <S.InfoMessage>{message}</S.InfoMessage>}
      </S.Info>
   );
};