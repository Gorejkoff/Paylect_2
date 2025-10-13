import React from 'react';
import animationModal from '../AnimationModal';
import BackgroundModal from '../BackgroundModal/BackgroundModal';
import useCloseModal from '../../../Hooks/ModalsHooks/useCloseModal';
import useOpenModal from '../../../Hooks/ModalsHooks/useOpenModal';
import { useSelector } from 'react-redux';
import * as M from '../Modal.style';
import * as S from './Coins.style';
import CoinNetwork from './Components/CoinNetwork';
import CoinList from './Components/CoinList';
import useMediaQuery from '../../../Hooks/useMediaQuery';


const id = 'coin_network';
const idCoinList = 'coin_list';
export default function Coins() {

   const MIN1024 = useMediaQuery('(min-width: 1024px)');
   const closeModal = useCloseModal(id);
   const closeCoinList = useCloseModal(idCoinList);
   const isOpen = useSelector(state => state.modals[id].isOpen);
   const isOpenCoinList = useSelector(state => state.modals[idCoinList].isOpen);


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
                     <CoinNetwork />
                     {MIN1024 ?
                        <div style={{
                           width: isOpenCoinList ? '50%' : 0,
                           transition: 'width 0.3s'
                        }} >
                           <CoinList />
                        </div>
                        : null}
                  </S.Shell>
               </M.ModalContainer>
            </M.ModalScroll>
         </M.ModalWrapper>
      </BackgroundModal>
   );
};