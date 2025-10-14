import React from 'react';
import * as M from '../Coins.style';
import StandardSelect from './StandardSelect';

export default function CoinGrid({ props }) {

   return (
      <M.Grid>
         {props.map((item, index) => <StandardSelect key={index} name={item.name} />)}
      </M.Grid>
   );
};