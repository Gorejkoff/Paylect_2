import React, { useState } from 'react';
import * as M from '../../Modal.style';
import * as S from '../Coins.style';
import coinSelect from '../../../../json/Lists/Coin_Select.json';
import TabButtons from '../../../Tabs/TabsButtons/TabButtons';
import Search from '../../../FormsElements/Search/Search';
import CoinSelect from './CoinSelect';
import CoinHeader from './CoinHeader';
import changeTabsProps from '../../../../json/Lists/Coin_Buttons_List.json';
import { motion } from 'framer-motion';

const idModal = 'blockchain'

function Content() {
   const [isActive, setIsActive] = useState(changeTabsProps[0].id);

   return (
      <M.LightPadding style={{ maxHeight: 'calc(100vh - 2 * var(--padding, 50px))' }}>

         <CoinHeader
            idModal={idModal}
            title='Select a coin'
         />

         <TabButtons
            listButtons={changeTabsProps}
            setClass='light'
            isActive={isActive}
            setIsActive={setIsActive}
         />

         <Search />

         <S.SelectScroll
            method="post"
            name="blockchain_select"
            id="blockchain_select"
         >
            {coinSelect.map((item, index) => <CoinSelect {...item} key={index} />)}
         </S.SelectScroll>

      </M.LightPadding>
   )
}

export default function Blockchain() {

   const Body = motion.create(M.LightBody);

   return (
      <Body
         className='modal-body coin-list'
      >
         <Content />
      </Body>
   );
};