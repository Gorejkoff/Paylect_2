import React from 'react';
import * as S from './TransactionDetails.style';
import { Table } from './TransactionDetails.style';


export default function TransactionDetails({ props }) {

   return (
      <Table>
         {props.map((item, index) =>
            <S.Body key={index}>
               <S.Title>{item.title}</S.Title>
               <S.Data>{item.data}</S.Data>
            </S.Body>
         )}
      </Table>
   )
};