import React from 'react';
import * as M from '../../Modal.style';
import useCloseModal from '../../../../Hooks/ModalsHooks/useCloseModal';




export default function CoinHeader({ idModal, title }) {
   const closeModal = useCloseModal(idModal)
   return (
      <M.LightHeader>
         <M.LightTitle>{title}</M.LightTitle>
         <button
            type='button'
            onClick={closeModal}
         >
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="25" cy="25" r="25" fill="#141414" />
               <path d="M20.2439 20L30 30M20 30L29.7561 20" stroke="white" />
            </svg>
         </button>
      </M.LightHeader>
   );
};