import React from "react";
import * as S from './Solution-style';


export default function SolutionList({ item }) {

   return (
      <>
         <S.SolutionListNumber>00{item.id}.</S.SolutionListNumber>
         <S.SolutionListTitle>{item.title}</S.SolutionListTitle>
         <div></div>
         <S.SolutionListText>{item.text}</S.SolutionListText>
      </>
   )
}