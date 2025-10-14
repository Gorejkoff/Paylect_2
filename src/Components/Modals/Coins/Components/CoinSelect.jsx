import React from 'react';
import * as S from '../Coins.style';


export default function CoinSelect({ text, img, alt, active }) {

   return (
      <S.SelectCoin>
         <input type="radio" name="coin_select" />
         <S.SelectImg src="./svg/arrow-color.svg" alt="selected" />
         {text}
         <S.CoinIcon src={img} alt={alt} />
      </S.SelectCoin>
   );
};