import React from 'react';
import * as S from './ExchangeInput.style';

function setFocusToInput(event) {
   const input = event.target.querySelector('input');
   if (input) { input.focus() }
}

export default function ExchangeInput({ value }) {

   return (
      <S.ValueBody onClick={setFocusToInput}>
         <S.InDollars>value</S.InDollars>
         <S.Value>
            <input type='number' name='value_currency' />
         </S.Value>
      </S.ValueBody>
   );
};