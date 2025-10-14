import { useEffect } from "react";

export default function useControlValueInput(ref) {
   let fontSizeCache;
   let fontSizeCurent;
   let widthNumber;

   const span = document.createElement('span');
   span.display = 'none';
   span.innerHTML = 0;

   useEffect(() => {
      fontSizeCache = parseInt(getComputedStyle(ref.current).fontSize);
      document.body.append(span);
      fontSizeCurent = fontSizeCache;
      span.style.fontSize = fontSizeCache + 'px';
      widthNumber = span.offsetWidth;
      return () => span.remove();
   })

   function setSize() {
      ref.current.style.fontSize = fontSizeCurent + 'px';
      span.style.fontSize = fontSizeCurent + 'px';
      span.innerHTML = ref.current.value;
   }

   function calcSize() {
      if (ref.current.offsetWidth < span.offsetWidth && fontSizeCurent > 10) {
         --fontSizeCurent;
         setSize();
      } else if (ref.current.offsetWidth - widthNumber * 1.1 >= span.offsetWidth && fontSizeCurent < fontSizeCache) {
         ++fontSizeCurent;
         setSize();
      } else {
         return;
      }
      calcSize();
   }

   function valueInput(event) {
      let value = event.target.value;
      value = value.replace(/[,.]/, '*');
      value = value.replace(/[,.]/g, '');
      value = value.replace(/[*]/, '.');
      value = value.replace(/[^\d.]/g, '');

      event.target.value = value;
      span.innerHTML = value;

      calcSize()
   }

   return valueInput;
}