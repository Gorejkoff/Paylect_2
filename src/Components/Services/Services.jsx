import React from "react";
import { ContainerLarge } from "../Global-Components/Container";
import ServicesTitle from "./Services-title";
import ServicesBlock from "./Services-block";
import list from './Services-list.json';

export default function Services() {
   return (
      <section id="anhor3">
         <ContainerLarge>
            <ServicesTitle />
            <div>
               {list.map((item, index) => <ServicesBlock data={item} key={item.id} />)}
            </div>
         </ContainerLarge>
      </section>
   )
}