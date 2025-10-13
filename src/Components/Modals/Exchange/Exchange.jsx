import React, { useState } from "react";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import * as M from '../Modal.style';
import { useSelector } from "react-redux";
import animationModal from "../AnimationModal";
import useCloseModal from "../../../Hooks/ModalsHooks/useCloseModal";
import Exchange from "../../Exchange/ExchangeEnter/Exchange";
import ExchangeProcessing from "../../Exchange/ExchangeOrderProcessing/ExchangeOrderProcessing";
import ExchangeInProcessing from "../../Exchange/ExchangeInProcessing/ExchangeInProcessing";
import ExchangeCompleted from "../../Exchange/ExchangeCompleted/ExchangeCompleted";
import ExchangeNotPaid from "../../Exchange/ExchangeNotPaid/ExchangeNotPaid";






const id = "exchange";

export default function Contact() {

   const [step, setStep] = useState(1)

   const closeModal = useCloseModal(id);
   const isOpen = useSelector(state => state.modals[id].isOpen);

   const stepMethods = {
      nextStep: () => setStep(s => s + 1),
      prevtStep: () => setStep(s => s > 1 && s - 1),
      resetStep: () => setStep(s => s = 1),

   }

   return (
      <>
         <BackgroundModal isOpen={isOpen} />

         <M.ModalWrapper
            className="dark"
            id={id}
            data-lenis-prevent
            style={animationModal(isOpen)}
            onClick={(event) => { if (!event.target.closest(".modal-body")) closeModal() }}
         >
            <M.ModalScroll>
               <M.ModalContainer>
                  <div>
                     {step === 1 &&
                        <Exchange
                           action={stepMethods}
                        />}
                     {step === 2 &&
                        <ExchangeProcessing
                           action={stepMethods}
                        />}
                     {step === 3 &&
                        <ExchangeInProcessing
                           action={stepMethods}
                        />}
                     {step === 4 &&
                        <ExchangeCompleted
                           action={stepMethods}
                        />}
                     {step === 4 &&
                        <ExchangeNotPaid
                           action={stepMethods}
                        />}
                  </div>
               </M.ModalContainer>
            </M.ModalScroll>
         </M.ModalWrapper >
      </>
   );
}
