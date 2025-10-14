import React from 'react';
import * as S from '../Coins.style';
import useCloseModal from '../../../../Hooks/ModalsHooks/useCloseModal';
import useMediaQuery from '../../../../Hooks/useMediaQuery';


export default function CoinSelect({ text, img, alt }) {
   const MIN1024 = useMediaQuery('(min-width: 1024px)');
   const closeBlockchain = useCloseModal('blockchain');
   const closeStandard = useCloseModal('standard');

   return (
      <S.SelectCoin>
         <input
            type="radio"
            name="coin_select"
            onChange={() => {
               setTimeout(closeBlockchain, MIN1024 ? 0 : 500);
               setTimeout(closeStandard, MIN1024 ? 300 : 700);
            }}
         />
         <S.SelectImg src="./svg/arrow-color.svg" alt="selected" />
         {text}
         <S.CoinIcon src={img} alt={alt} />
      </S.SelectCoin>
   );
};