import React from 'react';
import * as M from '../../Modal.style';
import useCloseModal from '../../../../Hooks/ModalsHooks/useCloseModal';
import ButtonCloseLight from '../../../Buttons/ButtonCloseBlackBig.jsx/ButtonCloseBlackBig';




export default function CoinHeader({ idModal, title }) {
   const closeModal = useCloseModal(idModal)
   return (
      <M.LightHeader>
         <M.LightTitle>{title}</M.LightTitle>
         <ButtonCloseLight action={closeModal} />
      </M.LightHeader>
   );
};