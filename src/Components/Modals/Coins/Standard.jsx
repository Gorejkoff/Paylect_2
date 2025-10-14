import React from 'react';
import animationModal from '../AnimationModal';
import BackgroundModal from '../BackgroundModal/BackgroundModal';
import useCloseModal from '../../../Hooks/ModalsHooks/useCloseModal';
import { useSelector } from 'react-redux';
import * as M from '../Modal.style';
import * as S from './Coins.style';
import Blockchain from './Components//Blockchain';
import Standard from './Components/Standard';
import useMediaQuery from '../../../Hooks/useMediaQuery';


const idBlockchain = 'blockchain';
const idStandard = 'standard';
export default function StandardCoins() {

   const MIN1024 = useMediaQuery('(min-width: 1024px)');
   const closeBlockchain = useCloseModal(idBlockchain);
   const closeStandard = useCloseModal(idStandard);
   const isOpenBlockchain = useSelector(state => state.modals[idBlockchain].isOpen);
   const isOpenStandard = useSelector(state => state.modals[idStandard].isOpen);


   return (

      <BackgroundModal isOpen={isOpenStandard}>
         <M.ModalWrapper
            id={idBlockchain}
            data-lenis-prevent
            style={animationModal(isOpenStandard)}
            onClick={(event) => { if (!event.target.closest('.modal-body')) closeStandard() }}
         >
            <M.ModalScroll>
               <M.ModalContainer>
                  <S.Shell>
                     <Standard />
                     {MIN1024 ?
                        <div style={{
                           width: isOpenBlockchain ? '50%' : 0,
                           transition: 'width 0.3s'
                        }} >
                           <Blockchain />
                        </div>
                        : null}
                  </S.Shell>
               </M.ModalContainer>
            </M.ModalScroll>
         </M.ModalWrapper>
      </BackgroundModal>
   );
};