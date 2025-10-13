import { React } from "react";
import { ContainerModal } from "../../Global-Components/Container";
import * as T from '../Terms/Terms-style';
import * as M from '../Modal.style';
import ButtonClose from "../../Buttons/ButtonClose/ButtonClose";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import * as S from './Sent-style';
import useCloseModal from "../../../Hooks/ModalsHooks/useCloseModal";
import { useSelector } from "react-redux";
import animationModal from "../AnimationModal";


const id = "sent";

export default function Terms() {
   const closeModal = useCloseModal(id);
   const isOpen = useSelector(state => state.modals[id].isOpen);

   // if (!isOpen) return null;

   return (

      <BackgroundModal isOpen={isOpen}>
         <M.ModalWrapper
            id={id}
            data-lenis-prevent
            style={animationModal(isOpen)}
            onClick={(event) => { if (!event.target.closest('.modal-body')) closeModal() }}
         >

            <S.SentScroll>

               <ContainerModal>

                  <T.TermsBody className="modal-body">
                     <T.SentButtonClose>
                        <ButtonClose action={closeModal} />
                     </T.SentButtonClose>
                     <T.TermsHeader>
                        <T.TermsTitle>Сontact form</T.TermsTitle>
                        <T.HideButton>
                           <ButtonClose />
                        </T.HideButton>
                     </T.TermsHeader>
                     <S.SentText>YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY!</S.SentText>

                  </T.TermsBody>

               </ContainerModal>

            </S.SentScroll>

         </M.ModalWrapper>
      </BackgroundModal>


   )
}


/* 













 */


