import { useRef } from "react"

export default function useHoverLottie(lottieRef) {

   const mouseEnter = useRef(false);

   return {
      stop: () => {
         mouseEnter.current = false
      },
      play: () => {
         lottieRef.current.play();
         mouseEnter.current = true;
      },
      check: () => {
         if (mouseEnter.current) {
            lottieRef.current.stop();
            lottieRef.current.play();
         } else {
            lottieRef.current.stop();
         }
      },
   }
}