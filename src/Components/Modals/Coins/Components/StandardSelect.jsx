import React from 'react';
import * as M from '../Coins.style';
import useCloseModal from '../../../../Hooks/ModalsHooks/useCloseModal';


export default function StandardkSelect({ name }) {

   const closeBlockchain = useCloseModal('blockchain');
   const closeStandard = useCloseModal('standard');


   return (
      <M.Select
         onClick={() => {
            closeStandard()
            setTimeout(closeBlockchain, 300)
         }}
      >
         <M.SelectName>{name}</M.SelectName>
         <M.SelectCheck>
            <input type="radio" name="blockchain" />
            <span></span>
         </M.SelectCheck>
      </M.Select>
   );
};