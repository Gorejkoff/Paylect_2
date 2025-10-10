import React from 'react';
import * as S from '../Exchange.style'
import { Container } from '../../Global-Components/Container';
import ExchangeHeader from '../ExchangeHeader';
import InfoCopy from '../Components/InfoCopy/InfoCopy';
import Message from '../Components/Message/Message';
import ButtonText from '../../Buttons/ButtonText/Button';
import Info from '../Components/Info/Info';
import { CompletedBody } from './ExchangeCompleted.style';

export default function ExchangeCompleted() {

   return (
      <Container>
         <S.Title>Exchange</S.Title>
         <S.ExchangeContainer>
            <S.ExchangeBody>
               <ExchangeHeader />

               <CompletedBody>
                  <Message
                     text={[
                        "Your order has been successfully executed! We have sent ",
                        <span>0.04773986&nbsp;BTC </span>,
                        "to the following address: "
                     ]}
                     color=""
                  />
                  <Info
                     title="passimpay address (BTC) bitcoin"
                     value="bc1qjrkwnfv2hr8sdmgrv7qwj0cd70grvd47te0hcm"
                  />
                  <InfoCopy
                     title="Tag"
                     value="2466236531"
                     buttonQr={false}
                     buttonCopy={true}
                  />
                  <Message
                     text={[
                        "If you have any questions or feedback, we would be happy to hear from you! ",
                        <a href="#0">Support Team </a>
                     ]}
                     color=""
                  />
               </CompletedBody>
            </S.ExchangeBody>

            <S.ExchangeButton>
               <ButtonText
                  text="Return to Exchange"
                  href="/exchange"
               />
            </S.ExchangeButton>

         </S.ExchangeContainer>
      </Container >
   );
};