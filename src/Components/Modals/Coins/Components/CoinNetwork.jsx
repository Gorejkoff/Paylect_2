import React from 'react';
import * as M from '../../Modal.style';
import CoinHeader from './CoinHeader';
import CoinGrid from './CoinGrid';
import coinList from '../../../../json/Lists/Coin_List.json';

export default function CoinNetwork() {

   return (
      <M.LightBody className='modal-body network-list'>
         <M.LightPadding>
            <CoinHeader
               title='Select network'
               idModal='coin_network'
            />
            <CoinGrid props={coinList} />
         </M.LightPadding>
      </M.LightBody>
   );
};