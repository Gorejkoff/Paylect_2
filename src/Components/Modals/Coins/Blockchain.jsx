import React from 'react';
import animationModal from '../AnimationModal';
import BackgroundModal from '../BackgroundModal/BackgroundModal';
import useCloseModal from '../../../Hooks/ModalsHooks/useCloseModal';
import { useSelector } from 'react-redux';
import * as M from '../Modal.style';
import * as S from './Coins.style';
import Blockchain from './Components/Blockchain';
import useMediaQuery from '../../../Hooks/useMediaQuery';


const id = 'blockchain';

export default function BlockchainCoins() {

   const MIN1024 = useMediaQuery('(min-width: 1024px)')

   const closeModal = useCloseModal(id);
   const isOpen = useSelector(state => state.modals[id].isOpen);

   if (MIN1024) return;

   return (
      <BackgroundModal isOpen={isOpen}>
         <M.ModalWrapper
            id={id}
            data-lenis-prevent
            style={animationModal(isOpen)}
            onClick={(event) => { if (!event.target.closest('.modal-body')) closeModal() }}
         >
            <M.ModalScroll>
               <M.ModalContainer>
                  <S.Shell>
                     <Blockchain />
                  </S.Shell>
               </M.ModalContainer>
            </M.ModalScroll>
         </M.ModalWrapper>
      </BackgroundModal>
   );
};