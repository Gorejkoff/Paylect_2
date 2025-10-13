import React from 'react';
import * as S from '../Exchange.style';
import { Container } from '../../Global-Components/Container';
import ExchangeHeader from '../ExchangeHeader';
import CurrencyData from '../Components/CurrencyData/CurrencyData';
import ButtonText from '../../Buttons/ButtonText/Button';
import Message from '../Components/Message/Message';
import InfoCopy from '../Components/InfoCopy/InfoCopy';
import Info from '../Components/Info/Info';

export default function ExchangeInProcessing({ action }) {

   return (
      <Container>
         <S.Title>Send funds to the address below</S.Title>
         <S.ExchangeContainer className="modal-body">
            <S.ExchangeBody>
               <ExchangeHeader iconType='progress' />
               <S.Table>
                  <CurrencyData
                     className='colored'
                     title='You send'
                     // subtitle='146 currencies'
                     format='TRC20'
                     name='BTC'
                     estimatedValue='1'
                     selectionButton={false}
                  />
                  <CurrencyData
                     className='colored'
                     title='You receive'
                     // subtitle='146 currencies'
                     format='TRC20'
                     name='ETH'
                     estimatedValue='≈ 110 192.6061'
                     selectionButton={false}
                  />
               </S.Table>

               <S.InfoTime>
                  <Info
                     title='Payment time expires in'
                     value='17:11:28'
                     message=''
                     className=''
                  />
                  <Info
                     title='Creation Date'
                     value='27.01.2023'
                     message='(17:07:02 UTC)'
                     className=''
                  />
               </S.InfoTime>


               <InfoCopy
                  title='Order ID:'
                  value='nfkzRb4UhY'
                  buttonQr={false}
                  buttonCopy={true}
               />
               <InfoCopy
                  title='Amount'
                  value='1 BTC'
                  message='Exchange fee is already included in the specified amount you will receive'
                  buttonQr={false}
                  buttonCopy={true}
               />
               <InfoCopy
                  title='passimpay address (BTC) bitcoin'
                  value='bc1qjrkwnfv2hr8sdmgrv7qwj0cd70grvd47te0hcm'
                  buttonQr={true}
                  buttonCopy={true}
               />
               <InfoCopy
                  title='Tag'
                  value='2466236531'
                  buttonQr={false}
                  buttonCopy={true}
               />



            </S.ExchangeBody>

            <Message
               text='Please note that you can send funds to the address above only once.'
               color='red'
            />


            <S.ExchangeButton>
               <ButtonText
                  text='Start over'
                  action={action.nextStep}
               />
            </S.ExchangeButton>

         </S.ExchangeContainer>
      </Container >
   );
};