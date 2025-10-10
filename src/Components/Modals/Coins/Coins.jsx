import React from 'react';
import animationModal from '../AnimationModal';
import BackgroundModal from '../BackgroundModal/BackgroundModal';
import useCloseModal from '../../../Hooks/ModalsHooks/useCloseModal';
import { useSelector } from 'react-redux';
import * as M from '../Modal.style';
import * as S from './Coins.style';
import CoinList from './Components/CoinList';
import CoinNetwork from './Components/CoinNetwork';


const id = 'select_network';

export default function Coins() {

   const closeModal = useCloseModal(id);
   const isOpen = useSelector(state => state.modals[id].isOpen);


   return (
      <>
         <BackgroundModal isOpen={isOpen} />

         <M.ModalWrapper
            id={id}
            data-lenis-prevent
            style={animationModal(isOpen)}
            onClick={(event) => { if (!event.target.closest('.modal-body')) closeModal() }}
         >
            <M.ModalScroll>
               <M.ModalContainer>

                  <S.Shell>

                     <CoinNetwork />

                     <CoinList />

                  </S.Shell>


               </M.ModalContainer>
            </M.ModalScroll>

         </M.ModalWrapper>
      </>
   );
};