import React from "react";
import * as C from '../Header-style';
import AnhorText from './Anhor-text';
import AnhorList from '../../../json/Lists/Anhor_List.json';

export default function Anhor({ scrollAnhor }) {

   return (
      <C.AnhorBody>
         <C.AnhorList>
            {AnhorList.map((item, index) =>
               <li key={index}>
                  <AnhorText item={item} scrollAnhor={scrollAnhor} />
               </li>
            )}
         </C.AnhorList>
      </C.AnhorBody >
   )
}