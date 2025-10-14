import React, { useRef } from 'react';
import * as S from './ExchangeInput.style';
import useControlValueInput from '../../../../Hooks/useControlValueNumberInput';

function setFocusToInput(event) {
   const input = event.target.querySelector('input');
   if (input) { input.focus() }
}



export default function ExchangeInput({ value }) {

   const ref = useRef(null);

   const controlValueInput = useControlValueInput(ref)


   return (
      <S.ValueBody onClick={setFocusToInput}>
         <S.InDollars>{value}</S.InDollars>
         <S.Value>
            <input
               ref={ref}
               type='text'
               name='value_currency'
               onChange={controlValueInput}
            />
         </S.Value>
      </S.ValueBody>
   );
};