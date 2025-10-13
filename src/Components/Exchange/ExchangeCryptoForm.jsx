import React from 'react';
import Input from '../FormsElements/Input/Input';
import { InputGroup } from '../FormsElements/Input/Input-style';
export default function ExchangeCryptoForm() {

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
               regexp='.{1,}'
            />
            <Input
               className="input-tag"
               type="text"
               key="2"
               name="tag"
               id="tag"
               placeholder="Enter tag *"
               required
               regexp=".{1,}"
            />
         </InputGroup>
         <Input
            type="text"
            key="3"
            name="invoice"
            id="invoice"
            placeholder="Email for invoice * *"
            required
            regexp='.{1,}'
         />
      </form>

   );
};