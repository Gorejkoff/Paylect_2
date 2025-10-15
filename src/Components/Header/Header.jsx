import React from "react";
import { Container } from '../Global-Components/Container';
import * as H from './Header-style';
import Logo from './Header-components/Logo';
import Anhor from './Header-components/Anhor';
import Button from '../Buttons/ButtonText/Button';
import useOpenModal from "../../Hooks/ModalsHooks/useOpenModal";
import useMediaQuery from "../../Hooks/useMediaQuery";



export default function Header({ scrollAnhor }) {
   const MIN1024 = useMediaQuery('(min-width: 1024px)');
   const openModalContact = useOpenModal("contacts");
   const openModalBlockchain = useOpenModal("blockchain");

   return (
      <header>
         <Container>
            <H.HeaderBody>
               <Logo />
               <H.Menu>
                  <Anhor scrollAnhor={scrollAnhor} />
                  <Button
                     action={MIN1024 ? openModalContact : openModalBlockchain}
                     text={MIN1024 ? 'let’s get started' : 'exchange'}
                     nameClass='decreases'
                  />
               </H.Menu>
            </H.HeaderBody>
         </Container>
      </header>
   )
}

