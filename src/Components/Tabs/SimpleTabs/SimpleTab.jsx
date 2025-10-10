import React from 'react';
import * as S from './SimpleTabs-style';
import Arrow from '../../Buttons/ButtonArrow/ButtonArrow';
import { motion } from 'framer-motion';



export default function SimpleTab({
   id,
   title,
   children,
   activeTab,
   setActiveTab,
   variants
}) {
   const isOpen = activeTab === id;

   return (
      <S.Tab>
         <S.TabHeader
            onClick={() => { setActiveTab(isOpen ? null : id) }}
         >
            <div>{title}</div>
            <Arrow variants={variants.arrow} isOpen={isOpen} />
         </S.TabHeader>
         <motion.div
            style={{ overflow: 'hidden' }}
            variants={variants.content}
            animate={isOpen ? "active" : "static"}
         >
            {children}
         </motion.div>
      </S.Tab>
   );
};