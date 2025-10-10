import React from "react";
import * as S from './Services-style';

export default function ServicesTitle() {
   return (
      <S.ServicesTitleBody>
         <S.ServicesTitleSide>
            <span>/</span>
            <span>Services</span>
            <span></span>
         </S.ServicesTitleSide>
         <S.ServicesTitle >
            <h2>Tech stacks for a rapidly evolving world:</h2>
         </S.ServicesTitle>
         <S.ServicesTitleSide></S.ServicesTitleSide>
      </S.ServicesTitleBody>
   )
}  