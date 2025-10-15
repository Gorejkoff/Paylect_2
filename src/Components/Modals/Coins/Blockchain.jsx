import React from 'react';
import animationModal from '../AnimationModal';
import BackgroundModal from '../BackgroundModal/BackgroundModal';
import useCloseModal from '../../../Hooks/ModalsHooks/useCloseModal';
import { useSelector } from 'react-redux';
import * as M from '../Modal.style';
import * as S from './Coins.style';
import Blockchain from './Components/Blockchain';
import StandardDesktop from './Components/StandardDesktop';




const idBlockchain = 'blockchain';

export default function BlockchainCoins() {


   const closeModal = useCloseModal(idBlockchain);
   const isOpenBlockchain = useSelector(state => state.modals[idBlockchain].isOpen);

   return (
      <BackgroundModal isOpen={isOpenBlockchain}>
         <M.ModalWrapper
            data-lenis-prevent
            style={animationModal(isOpenBlockchain)}
            onClick={(event) => { if (!event.target.closest('.modal-body')) closeModal() }}
         >
            <M.ModalScroll>
               <M.ModalContainer>
                  <S.Shell>
                     <StandardDesktop />
                     <Blockchain />
                  </S.Shell>
               </M.ModalContainer>
            </M.ModalScroll>
         </M.ModalWrapper>
      </BackgroundModal>
   );
};