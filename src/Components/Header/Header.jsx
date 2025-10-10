import React from "react";
import { Container } from '../Global-Components/Container';
import * as H from './Header-style';
import Logo from './Header-components/Logo';
import Anhor from './Header-components/Anhor';
import Button from '../Buttons/ButtonText/Button';
import useOpenModal from "../../Hooks/ModalsHooks/useOpenModal";


export default function Header({ scrollAnhor }) {

   const openModal = useOpenModal("contacts");

   return (
      <header>
         <Container>
            <H.HeaderBody>
               <Logo />
               <H.Menu>
                  <Anhor scrollAnhor={scrollAnhor} />
                  <Button
                     action={openModal}
                     text="let’s get started"
                     nameClass="header-button"
                  />
               </H.Menu>
            </H.HeaderBody>
         </Container>
      </header>
   )
}

