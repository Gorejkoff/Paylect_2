import { useEffect, useRef } from "react";

export default function useControlValueInput(ref) {

   const data = useRef({
      fontSizeCache: 0,
      fontSizeCurent: 0,
      widthSimbol: 0,
      direction: 'neutral',
      element: null
   })

   useEffect(() => {
      data.current.element = document.createElement('span');
      data.current.element.style.position = 'absolute';
      data.current.element.style.opacity = 0;
      data.current.element.style.pointerEvents = 'none';
      data.current.element.innerHTML = 0;
      data.current.fontSizeCache = parseInt(getComputedStyle(ref.current).fontSize);
      document.body.append(data.current.element);
      data.current.fontSizeCurent = data.current.fontSizeCache;
      data.current.element.style.fontSize = data.current.fontSizeCache + 'px';
      data.current.widthSimbol = data.current.element.offsetWidth;
      // eslint-disable-next-line
      return () => data.current.element.remove();
   })

   function setSize() {
      ref.current.style.fontSize = data.current.fontSizeCurent + 'px';
      data.current.element.style.fontSize = data.current.fontSizeCurent + 'px';
      data.current.element.innerHTML = 0;
      data.current.widthSimbol = data.current.element.offsetWidth;
      data.current.element.innerHTML = ref.current.value;
   }

   function calcSize() {
      if (
         ref.current.offsetWidth < data.current.element.offsetWidth &&
         ['neutral', 'decrement'].includes(data.current.direction)
      ) {
         --data.current.fontSizeCurent;
         data.current.direction = 'decrement';
         setSize();
      } else if (
         ref.current.offsetWidth - data.current.widthSimbol * 1.5 >= data.current.element.offsetWidth &&
         data.current.fontSizeCurent < data.current.fontSizeCache &&
         ['neutral', 'increment'].includes(data.current.direction)
      ) {
         ++data.current.fontSizeCurent;
         data.current.direction = 'increment';
         setSize();
      } else {
         data.current.direction = 'neutral';
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
      data.current.element.innerHTML = value;

      calcSize()
   }

   return valueInput;
}