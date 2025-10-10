import React from "react";
import { Container } from "../Global-Components/Container";
import * as C from './First-screen-style';

export default function FirstScreenTitle() {

   return (
      <section>
         <Container>
            <C.Title>Your gateway to seamless crypto payments for business.</C.Title>
            <C.Subtitle>Discover the future of payments with our cutting-edge cryptocurrency payment solution.</C.Subtitle>
            <C.Line />
            <C.FirstScreenHeader>
               <span>©2024:V.1.0</span>
               <C.Scroll>
                  Scroll
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M9.5 0.459961L9.5 18.0195H10.375L17.375 11.3528M1.75 10.7576L5.1875 14.0314" stroke="#F4F6F6" strokeWidth="5" />
                  </svg>
               </C.Scroll>
            </C.FirstScreenHeader>
         </Container>
      </section>

   )
}



