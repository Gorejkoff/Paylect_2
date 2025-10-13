import React from 'react';
import animationModal from '../AnimationModal';
import BackgroundModal from '../BackgroundModal/BackgroundModal';
import useCloseModal from '../../../Hooks/ModalsHooks/useCloseModal';
import { useSelector } from 'react-redux';
import * as M from '../Modal.style';
import * as S from './Coins.style';
import CoinList from './Components/CoinList';
import useMediaQuery from '../../../Hooks/useMediaQuery';


const id = 'coin_list';

export default function Coins() {

   const MIN1024 = useMediaQuery('(min-width: 1024px)')

   const closeModal = useCloseModal(id);
   const isOpen = useSelector(state => state.modals[id].isOpen);
   console.log(MIN1024);
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
                     <CoinList />
                  </S.Shell>
               </M.ModalContainer>
            </M.ModalScroll>
         </M.ModalWrapper>
      </BackgroundModal>
   );
};