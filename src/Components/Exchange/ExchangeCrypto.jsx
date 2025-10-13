import React from 'react';
import * as S from './Exchange.style';
import CurrencyData from './Components/CurrencyData/CurrencyData';
import ExchangeInput from './Components/ExchangeInput/ExchangeInput';


export default function ExchangeCrypto() {

   return (

      <S.Table>

         <CurrencyData
            title='You send'
            subtitle='146 currencies'
            format='TRC20'
            name='BTC'
            estimatedValue=''
            pathSVG={'/icon_currency/Bitcoin.svg'}
            selectionButton={true}
         />

         <ExchangeInput value='≈ $189 738.93' />

         <CurrencyData
            title='You get'
            // subtitle='146 currencies'
            format='AVALANCHE C-CHAN'
            name='ETH'
            estimatedValue=''
            pathSVG={'/icon_currency/Ether.svg'}
            selectionButton={true}
         />

         <ExchangeInput value='≈ $4 738.93' />

      </S.Table >

   );
};