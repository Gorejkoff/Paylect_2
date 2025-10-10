import React from "react";
import * as S from './Solution-style';
import listData from './Solution-data.json';
import List from './Solution-table-list';

export default function SolutionTable() {

   const list = [...listData];

   return (
      <S.SolutionTable>
         <S.SolutionTableGrid>

            <S.SolutionTableCell key="0">
               <svg width="100%" height="100%" viewBox="0 0 185 75" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M182.691 0.874023H184.372V73.4547H182.691V0.874023Z" fill="white" />
                  <path d="M169.247 0.874023H170.927V73.4547H169.247V0.874023Z" fill="white" />
                  <path d="M155.803 0.874023H159.164V73.4547H155.803V0.874023Z" fill="white" />
                  <path d="M145.721 0.874023H149.082V73.4547H145.721V0.874023Z" fill="white" />
                  <path d="M133.958 0.874023H137.319V73.4547H133.958V0.874023Z" fill="white" />
                  <path d="M123.875 0.874023H127.236V73.4547H123.875V0.874023Z" fill="white" />
                  <path d="M113.792 0.874023H117.153V73.4547H113.792V0.874023Z" fill="white" />
                  <path d="M105.39 0.874023H108.751V73.4547H105.39V0.874023Z" fill="white" />
                  <path d="M98.6684 0.874023H102.029V73.4547H98.6684V0.874023Z" fill="white" />
                  <path d="M90.266 0.874023H93.627V73.4547H90.266V0.874023Z" fill="white" />
                  <path d="M83.5444 0.874023H86.9053V73.4547H83.5444V0.874023Z" fill="white" />
                  <path d="M76.8227 0.874023H80.1836V73.4547H76.8227V0.874023Z" fill="white" />
                  <path d="M70.1005 0.874023H73.4614V73.4547H70.1005V0.874023Z" fill="white" />
                  <path d="M63.3788 0.874023H66.7397V73.4547H63.3788V0.874023Z" fill="white" />
                  <path d="M58.3373 0.874023H61.6982V73.4547H58.3373V0.874023Z" fill="white" />
                  <path d="M53.2963 0.874023H56.6572V73.4547H53.2963V0.874023Z" fill="white" />
                  <path d="M48.2548 0.874023H51.6157V73.4547H48.2548V0.874023Z" fill="white" />
                  <path d="M43.2133 0.874023H46.5742V73.4547H43.2133V0.874023Z" fill="white" />
                  <path d="M38.1723 0.874023H41.5332V73.4547H38.1723V0.874023Z" fill="white" />
                  <path d="M33.1308 0.874023H36.4917V73.4547H33.1308V0.874023Z" fill="white" />
                  <path d="M28.0893 0.874023H31.4502V73.4547H28.0893V0.874023Z" fill="white" />
                  <path d="M23.0478 0.874023H26.4087V73.4547H23.0478V0.874023Z" fill="white" />
                  <path d="M-10.5609 0.874023H21.3677V73.4547H-10.5609V0.874023Z" fill="white" />
               </svg>
            </S.SolutionTableCell>
            <S.SolutionTableCell>open-source</S.SolutionTableCell>
            <S.SolutionTableCell>closed-source</S.SolutionTableCell>
            <S.SolutionTableCell>Decideai</S.SolutionTableCell>

            {list.reverse().map((item, index) => <List item={item} key={index} />)}

         </S.SolutionTableGrid>
      </S.SolutionTable>
   )
}