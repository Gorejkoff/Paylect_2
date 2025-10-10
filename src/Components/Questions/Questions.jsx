import { React, useState } from "react";
import { ContainerLarge } from "../Global-Components/Container";
import { QuestionsTitle, QuestionsBody } from "./Questions-style";
import QuestionsItem from "./Questions-item";
import List from './Questions-list.json';




export default function Questions() {

   const [expanded, setExpanded] = useState(0);

   return (
      <ContainerLarge id="anhor5">
         <QuestionsBody>
            <QuestionsTitle>frequently <br /> asked questions</QuestionsTitle>
            {List.map((item) => <QuestionsItem data={item} key={item.id} i={item} expanded={expanded} setExpanded={setExpanded} />)}
         </QuestionsBody>
      </ContainerLarge>
   )
}  