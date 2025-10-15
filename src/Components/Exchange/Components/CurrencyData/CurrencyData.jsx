import React from 'react';
import * as S from './CurrencyData.style';
import useOpenModal from '../../../../Hooks/ModalsHooks/useOpenModal';
import useGetSVGCode from '../../../../Hooks/useGetSVGCode';


export default function CurrencyData({ title, subtitle, format, name, estimatedValue, typeButton, pathSVG }) {
   const openModal = useOpenModal('blockchain');
   const iconSVG = useGetSVGCode(pathSVG);

   const propsButton = typeButton ? {
      type: 'button',
      onClick: () => openModal()
   } : {}

   return (
      <S.Block
         as={typeButton ? 'button' : 'div'}
         {...propsButton}
      >
         <S.Header>
            <span>
               <S.SendTitle >{title}</S.SendTitle>
               <S.Quantity>{subtitle}</S.Quantity>
            </span>
            <S.Format>
               <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5.5" cy="5.5" r="5" stroke="#141414" strokeWidth="0.5" />
                  <path d="M 5.5,3.5 a 2,2 0 1,0 0,4 a 2,2 0 1,0 0,-4" fill="#141414" />
               </svg>
               {format}
            </S.Format>
         </S.Header>
         <span>
            <S.EstimatedValue>{estimatedValue}</S.EstimatedValue>
            <S.Footer>
               <S.Name>{name}</S.Name>
               {pathSVG && <S.NameIcon dangerouslySetInnerHTML={{ __html: iconSVG.icon }} />}
               {typeButton ?
                  <S.ChangeBody>
                     <S.Change>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5.25 0.959961L5.25 9.73972H5.6875L9.1875 6.40639M1.375 6.10877L3.09375 7.74568" stroke="#141414" strokeWidth="2.5" />
                        </svg>
                     </S.Change>
                  </S.ChangeBody> :
                  null}
            </S.Footer>
         </span>
      </S.Block>
   );
};