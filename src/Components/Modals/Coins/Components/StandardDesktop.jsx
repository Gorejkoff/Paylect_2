import React from 'react';
import useMediaQuery from '../../../../Hooks/useMediaQuery';
import { useSelector } from 'react-redux';
import Standard from './Standard';

const idStandard = 'standard';

export default function StandardDesktop() {

   const MIN1024 = useMediaQuery('(min-width: 1024px)')
   const isOpenStandard = useSelector(state => state.modals[idStandard].isOpen);

   if (!MIN1024) return;

   return (
      <div style={{
         width: isOpenStandard ? 'min(720px, 50%)' : 0,
         transition: 'width 0.3s'
      }} >
         <Standard />
      </div>
   );
};