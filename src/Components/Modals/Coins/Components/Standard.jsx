import React from 'react';
import * as M from '../../Modal.style';
import CoinHeader from './CoinHeader';
import StandardGrid from './StandardGrid';
import standardList from '../../../../json/Lists/Standard_List.json';

export default function Standard() {

   return (
      <M.LightBody className='modal-body network-list'>
         <M.LightPadding>
            <CoinHeader
               title='Select network'
               idModal='standard'
            />
            <StandardGrid props={standardList} />
         </M.LightPadding>
      </M.LightBody>
   );
};