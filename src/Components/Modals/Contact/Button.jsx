import React from "react";
import * as S from '../Button-Started/Button-style';

export default function Button({ type }) {


   return (

      <S.Button >
         <button type={type}>
            <S.ButtonTextWrapper>
               <S.ButtonText>
                  Send
               </S.ButtonText>
            </S.ButtonTextWrapper>
            s
            <S.ButtonArrowWrapper>
               <S.ButtonArrow>
                  <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0.659668 9.74023L9.15967 1.24023M9.15967 1.24023H1.15967M9.15967 1.24023V9.74023" stroke="white" strokeWidth="1.5" />
                  </svg>
               </S.ButtonArrow>
            </S.ButtonArrowWrapper>
         </button>
      </S.Button>


   )
}