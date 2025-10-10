import React from 'react';
import * as S from './InfoCopy.style';
import ButtonCopy from '../../../Buttons/ButtonCopy/ButtonCopy';
import ButtonQRCode from '../../../Buttons/ButtonQRCode/ButtonQRCode';
import useCopyToClipboardText from '../../../../Hooks/useCopyToClipboardText';


export default function InfoCopy({ title, value, message, buttonQr, buttonCopy }) {

   const copyToClipboardText = useCopyToClipboardText(value);


   return (
      <S.Body>

         <S.Content>
            <S.Title>{title}</S.Title>
            <button
               type='button'
               aria-label='copy'
               onClick={copyToClipboardText}
            >
               <S.Value>{value}</S.Value>
            </button>
            {message && <S.Message>{message}</S.Message>}
         </S.Content>

         <S.Buttons>
            {buttonCopy && <ButtonCopy text={value} />}
            {buttonQr && <ButtonQRCode />}
         </S.Buttons>

      </S.Body>
   );
};

