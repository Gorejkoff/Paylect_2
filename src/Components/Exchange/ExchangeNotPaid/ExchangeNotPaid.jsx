import React from 'react';
import { Container } from '../../Global-Components/Container';
import * as S from '../Exchange.style'
import ExchangeHeader from '../ExchangeHeader';
import { CompletedBody } from '../ExchangeCompleted/ExchangeCompleted.style';
import Message from '../Components/Message/Message';
import ButtonText from '../../Buttons/ButtonText/Button';
import Info from '../Components/Info/Info';


export default function ExchangeNotRaid() {

   return (
      <Container>
         <S.Title>Send funds to the address below</S.Title>
         <S.ExchangeContainer>
            <S.ExchangeBody>
               <ExchangeHeader iconType='not_paid' />

               <CompletedBody>
                  <Info
                     title="Order ID:"
                     value="nfkzRb4UhY"
                  />
                  <Info
                     title="Amount"
                     value="1 BTC"
                  />
                  <Info
                     title="Recipient address"
                     value="bc1qjrkwnfv2hr8sdmgrv7qwj0cd70grvd47te0hcm"
                  />
               </CompletedBody>
            </S.ExchangeBody>
            <Message
               text={"The funds were not received within 3 hours. Please check the rates and create a new transaction."}
               color="red"
            />
            <S.ExchangeButton>
               <ButtonText
                  text="Start over"
                  href="/exchange"
               />
            </S.ExchangeButton>

         </S.ExchangeContainer>
      </Container >
   );
};