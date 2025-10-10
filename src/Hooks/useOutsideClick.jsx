import { useEffect, useRef } from 'react';

/* отслеживание клика вне объекта */
/* fn - переданная функция collback, изменяет состояние компонента  */
export default function useOutsideClick(fn) {
   const refClick = useRef(null);

   const eventClick = (e) => {
      if (!refClick.current.contains(e.target)) { fn(false) }
   };

   useEffect(() => {
      document.addEventListener("click", eventClick);
      return () => {
         document.removeEventListener("click", eventClick);
      };
   });

   return { refClick };
};