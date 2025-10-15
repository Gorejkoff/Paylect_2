import React from 'react';
import animationModal from '../AnimationModal';
import BackgroundModal from '../BackgroundModal/BackgroundModal';
import useCloseModal from '../../../Hooks/ModalsHooks/useCloseModal';
import { useSelector } from 'react-redux';
import * as M from '../Modal.style';
import * as S from './Coins.style';
import Standard from './Components/Standard';
import useMediaQuery from '../../../Hooks/useMediaQuery';


const idStandard = 'standard';

export default function StandardCoins() {
   const MIN1024 = useMediaQuery('(min-width: 1024px)');
   const closeStandard = useCloseModal(idStandard);
   const isOpenStandard = useSelector(state => state.modals[idStandard].isOpen);

   if (MIN1024) return;

   return (

      <BackgroundModal isOpen={isOpenStandard}>
         <M.ModalWrapper
            data-lenis-prevent
            style={animationModal(isOpenStandard)}
            onClick={(event) => { if (!event.target.closest('.modal-body')) closeStandard() }}
         >
            <M.ModalScroll>
               <M.ModalContainer>
                  <S.Shell>
                     <Standard />
                  </S.Shell>
               </M.ModalContainer>
            </M.ModalScroll>
         </M.ModalWrapper>
      </BackgroundModal>
   );
};