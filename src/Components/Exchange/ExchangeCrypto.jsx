import React from 'react';
import * as S from './Exchange.style';
import CurrencyData from './Components/CurrencyData/CurrencyData';



export default function ExchangeCrypto() {

   return (

      <S.Table>

         <CurrencyData
            className="colored"
            title="You send"
            subtitle="146 currencies"
            format="TRC20"
            name="BTC"
            estimatedValue=""
            selectionButton={true}
         />

         <S.ValueBody>
            <S.InDollars>≈ $189 738.93</S.InDollars>
            <S.Value>
               <input type='number' name='value_currency' />
            </S.Value>
         </S.ValueBody>

         <CurrencyData
            className=""
            title="You send"
            // subtitle="146 currencies"
            format="AVALANCHE C-CHAN"
            name="ETH"
            estimatedValue=""
            selectionButton={true}
         />


         <S.ValueBody>
            <S.InDollars>≈ $4 738.93</S.InDollars>
            <S.Value>1241.00720644</S.Value>
         </S.ValueBody>

      </S.Table>

   );
};