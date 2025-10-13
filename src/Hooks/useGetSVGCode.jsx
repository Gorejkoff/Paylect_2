import { useState, useEffect } from 'react';

function useGetSVGCode(path) {
   const [icon, setIcon] = useState('');

   useEffect(() => {
      async function fetchIcon() {
         try {
            const getIcon = await fetch(path);
            const text = await getIcon.text();
            setIcon(text);
         } catch (err) {
            console.error('download error SVG');
         }
      }
      fetchIcon();
   }, [path]);

   return { icon };
}

export default useGetSVGCode;