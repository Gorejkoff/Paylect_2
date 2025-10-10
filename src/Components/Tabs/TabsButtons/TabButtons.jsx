import React from 'react';
import *as S from './TabButtons-style';

export default function TabButtons({ listButtons, isActive, setIsActive, setClass }) {

   return (
      <S.ButtonShell className={setClass}>
         <S.ButtonBody>
            {listButtons.map((item, index) => <S.ButtonItem
               key={item.id}
               type="button"
               className={isActive === item.id ? 'active' : ''}
               disabled={item.disabled || false}
               onClick={() => setIsActive(item.id)}
            >
               {item.text}
            </S.ButtonItem>)}
         </S.ButtonBody>
      </S.ButtonShell>
   );
}; 