import React from 'react';
import * as S from '../Coins.style';
import useOpenModal from '../../../../Hooks/ModalsHooks/useOpenModal';


export default function CoinSelect({ text, img, alt }) {
   const openModal = useOpenModal('standard');

   return (
      <S.SelectCoin>
         <input
            type="radio"
            name="coin_select"
            onChange={openModal}
         />
         <S.SelectImg src="./svg/arrow-color.svg" alt="selected" />
         {text}
         <S.CoinIcon src={img} alt={alt} />
      </S.SelectCoin>
   );
};