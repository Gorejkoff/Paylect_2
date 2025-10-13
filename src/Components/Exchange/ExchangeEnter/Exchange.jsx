import React from 'react';
import * as S from '../Exchange.style';
import { Container } from '../../Global-Components/Container';
import ExchangeHeader from '../ExchangeHeader'
import Message from '../Components/Message/Message';
import TransactionDetails from '../TransactionDetails';
import details from '../../../json/Lists/Transaction_Details.json';
import SimpleTabs from '../../Tabs/SimpleTabs/SimpleTabs';
import ButtonText from '../../Buttons/ButtonText/Button';
import ChangeTabs from '../../Tabs/ChangeTabs/ChangeTabs';
import ExchangeCrypto from '../ExchangeCrypto';
import ExchangeCryptoForm from '../ExchangeCryptoForm';



const tabsList = [
   {
      id: 1,
      title: "Transaction details",
      component: TransactionDetails,
      props: details
   }
]

const changeTabsProps = [
   {
      id: 1,
      text: "CRYPTO",
      disabled: false,
      component: ExchangeCrypto
   },
   {
      id: 2,
      text: "FIAT",
      disabled: true,
      component: null
   },
   {
      id: 3,
      text: "DEFI",
      disabled: true,
      component: null
   }
];

export default function Exchange({ action }) {

   return (
      <>
         <S.Title>Exchange</S.Title>
         <S.ExchangeContainer className="modal-body">
            <S.ExchangeBody>

               <ExchangeHeader iconType='notifications' />

               <ChangeTabs props={changeTabsProps} />

            </S.ExchangeBody>

            <ExchangeCryptoForm />


            <Message
               color="red"
               text="Don't forget to include the XRP Destination Tag from your wallet. If it's required but is missing, your Ripples won't be delivered."
            />
            <Message
               color="green"
               text="The floating rate can change at any point due to market conditions, so you might receive more or less crypto than expected."
            />

            <div style={{ marginTop: '40px' }}>
               <SimpleTabs listTabs={tabsList} />
            </div>

            <S.ExchangeButton>
               <ButtonText
                  text="Next step"
                  action={action.nextStep}
                  nameClass='large'
               />
            </S.ExchangeButton>

         </S.ExchangeContainer>
      </>
   );
};