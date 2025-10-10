import React from "react";
import BlockTitle from '../Block-Title/Block-Title';
import { Container } from "../Global-Components/Container";
import * as S from './Solution-style';
import List from './Solution-list';
import Table from './Solution-table';
import Button from '../Buttons/ButtonText/Button';
import listData from './Solution-data.json';

export default function Solution() {

   const content = {
      title: "The best solution",
      text: "Paylect offers the ultimate crypto payment platform, combining cutting-edge tools with global accessibility to ensure secure and efficient financial management.",
   }

   return (
      <Container id="anhor2">
         <section>
            <BlockTitle data={content} />
            <S.SolutionBody>
               <Table />
               <S.SolutionList>
                  <S.SolutionListGrid>
                     {listData.map((item, index) => <List item={item} key={index} />)}
                  </S.SolutionListGrid>
               </S.SolutionList>
            </S.SolutionBody>
            <S.SolutionButton>
               <Button text="Start accepting crypto now" action={() => { /* useOpenModal */ }} />
            </S.SolutionButton>
         </section>
      </Container>
   )
}