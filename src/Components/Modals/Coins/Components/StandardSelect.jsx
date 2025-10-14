import React from 'react';
import * as M from '../Coins.style';
import useOpenModal from '../../../../Hooks/ModalsHooks/useOpenModal';


export default function StandardkSelect({ name }) {

   const openModal = useOpenModal('blockchain');


   return (
      <M.Select
         onClick={openModal}
      >
         <M.SelectName>{name}</M.SelectName>
         <M.SelectCheck>
            <input type="radio" name="blockchain" />
            <span></span>
         </M.SelectCheck>
      </M.Select>
   );
};