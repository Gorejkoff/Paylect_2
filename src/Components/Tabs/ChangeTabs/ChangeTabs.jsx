import React, { useState } from 'react';
import TabsButtons from '../TabsButtons/TabButtons';

export default function ChangeTabs({ props }) {

   const [isActive, setIsActive] = useState(props[0].id);


   return (
      <div>
         {props.map((item, index) =>
            <div
               key={index}
               style={{ display: item.id === isActive ? "block" : "none" }}
            >
               {item.component ? <item.component /> : ""}
            </div>
         )}

         <TabsButtons
            listButtons={props}
            isActive={isActive}
            setIsActive={setIsActive}
         />
      </div>
   );
};