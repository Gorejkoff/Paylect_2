import React, { useState } from 'react';
import SimpleTab from './SimpleTab';


export default function SimpleTabs({ listTabs }) {

   const [activeTab, setActiveTab] = useState(null);

   const variants = {
      parent: {
         active: {},
         static: {},
      },
      arrow: {
         active: { rotate: 45 },
         static: { rotate: 0 },
      },
      content: {
         active: { height: "auto" },
         static: { height: 0 },
      }
   }

   return (
      <>
         {listTabs.map((item, index) => (
            <SimpleTab
               id={item.id}
               key={item.id}
               title={item.title}
               activeTab={activeTab}
               setActiveTab={setActiveTab}
               variants={variants}
            >
               <item.component props={item.props} />
            </SimpleTab>
         ))}
      </>
   );
};