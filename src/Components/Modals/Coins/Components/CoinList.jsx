import React, { useState } from 'react';
import * as M from '../../Modal.style';
import * as S from '../Coins.style';
import coinSelect from '../../../../json/Lists/Coin_Select.json';
import TabButtons from '../../../Tabs/TabsButtons/TabButtons';
import Search from '../../../FormsElements/Search/Search';
import CoinSelect from './CoinSelect';
import CoinHeader from './CoinHeader';
import changeTabsProps from '../../../../json/Lists/Coin_Buttons_List.json';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const variant = {
   visible: {
      width: '100%',
   },
   hidden: {
      width: '0px',
   }
}

const id = 'coin_list'


function Content() {
   const [isActive, setIsActive] = useState(changeTabsProps[0].id);

   return (

      <M.LightPadding>
         <CoinHeader
            title='Select a coin'
            idModal={id}
         />

         <TabButtons
            listButtons={changeTabsProps}
            setClass='light'
            isActive={isActive}
            setIsActive={setIsActive}
         />

         <Search />

         <S.SelectScroll>
            {coinSelect.map((item, index) => <CoinSelect {...item} key={index} />)}
         </S.SelectScroll>

      </M.LightPadding>

   )
}


export default function CoinList() {

   const Body = motion.create(M.LightBody);
   const isOpen = useSelector(state => state.modals[id].isOpen);
   return (
      <Body
         className='modal-body coin-list'
         variants={variant}
         initial='hidden'
         animate={isOpen ? 'visible' : 'hidden'}
      >
         <Content />
      </Body>
   );
};