import React from 'react';
import * as M from '../Coins.style';
import NetworkSelect from './NetworkSelect';

export default function CoinGrid({ props }) {

   return (
      <M.Grid>
         {props.map((item, index) => <NetworkSelect key={index} name={item.name} />)}
      </M.Grid>
   );
};