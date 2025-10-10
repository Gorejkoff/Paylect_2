import React from 'react';
import * as M from '../Coins.style';
import useOpenModal from '../../../../Hooks/ModalsHooks/useOpenModal';


export default function NetworkSelect({ name }) {

   const openModal = useOpenModal('coin_list');


   return (
      <M.Select
         onClick={openModal}
      >
         <M.SelectName>{name}</M.SelectName>
         <M.SelectCheck>
            <input type="radio" name="coin" />
            <span></span>
         </M.SelectCheck>
      </M.Select>
   );
};