import React from 'react';
import * as S from '../Exchange.style';
import { Container } from '../../Global-Components/Container';
import ExchangeHeader from '../ExchangeHeader';
import CurrencyData from '../Components/CurrencyData/CurrencyData';
import Info from '../Components/Info/Info';
import ButtonText from '../../Buttons/ButtonText/Button';



export default function ExchangeProcessing({ action }) {



   return (
      <Container>
         <S.Title>Order processing</S.Title>
         <S.ExchangeContainer className="modal-body">
            <S.ExchangeBody>
               <ExchangeHeader
                  iconType='back'
                  action={action.prevtStep} />
               <S.Table>
                  <CurrencyData
                     className="colored"
                     title="You send"
                     // subtitle="146 currencies"
                     format="TRC20"
                     name="BTC"
                     estimatedValue="1"
                     selectionButton={false}
                  />

                  <CurrencyData
                     className="colored"
                     title="You receive"
                     // subtitle="146 currencies"
                     format="TRC20"
                     name="ETH"
                     estimatedValue="≈ 110 192.6061"
                     selectionButton={false}
                  />

               </S.Table>

               <Info
                  title="Exchange fee"
                  value="1 332.3228 USDT ≈ $1 332.49"
                  message="Exchange fee is already included in the specified amount you will receive"
                  className="large"
               />
               <Info
                  title="Network fee"
                  value="1 USDT ≈ $1"
                  message="Network fee is already included in the specified amount you will receive"
                  className="large"
               />
               <Info
                  title="Recipient address"
                  value="TPAgKfYzRdK83Qocc4gXvEVu4jPKfeuer5"
                  message=""
               />
               <Info
                  title="Email for invoice"
                  value="passimpay@gmai.com"
                  message=""
               />
               <Info
                  title="Exchange rate"
                  value="1 BTC ≈ 111 175.45 USDT"
                  message=""
                  className="large"
               />

            </S.ExchangeBody>



            <S.ExchangeButton>
               <ButtonText
                  text="Exchange"
                  action={action.nextStep}
               />
            </S.ExchangeButton>

         </S.ExchangeContainer>
      </Container >
   );
};