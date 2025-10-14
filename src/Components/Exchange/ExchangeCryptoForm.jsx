import React from 'react';
import Input from '../FormsElements/Input/Input';
import { InputGroup } from '../FormsElements/Input/Input-style';
import useInputOnlyNumbers from '../../Hooks/useInputOnlyNumbers';
import useInputNotCyrillic from '../../Hooks/useInputNotCyrillic';


export default function ExchangeCryptoForm() {


   const inputOnlyNumbers = useInputOnlyNumbers();
   const inputNotCyrillic = useInputNotCyrillic();


   return (
      <form action="#" method="post" name="" id="" >
         <InputGroup>
            <Input
               type="text"
               key="1"
               name="wallet_address"
               id="wallet_address"
               placeholder="Enter Wallet address *"
               required
               regexp='.{2,}'
               action={inputNotCyrillic}
            />
            <Input
               className="input-tag"
               type="text"
               key="2"
               name="tag"
               id="tag"
               placeholder="Enter tag *"
               required
               regexp=".{2,}"
               action={inputOnlyNumbers}
            />
         </InputGroup>
         <Input
            type="text"
            key="3"
            name="invoice"
            id="invoice"
            placeholder="Email for invoice * *"
            required
            regexp='.{2,}'
         />
      </form>

   );
};