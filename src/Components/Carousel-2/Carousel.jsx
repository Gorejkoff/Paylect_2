import React from "react";
import * as C from './Carousel-style';
import { motion } from "framer-motion";
import useCarousel from "../../Hooks/useCarousel";


export default function Carousel() {

   const content = useCarousel("PAYLECT", "#ffffff");

   return (
      <C.CarouselBody>
         <C.CarouselText>
            <motion.div
               animate={{ x: ["-50%", "0%"] }}
               transition={{
                  repeat: Infinity,
                  duration: 100,
                  ease: "linear"
               }}
            >

               {[0, 1].map((i) => <C.CarouselStripe key={i}>{content}</C.CarouselStripe>)}

            </motion.div>
         </C.CarouselText>
      </C.CarouselBody >
   )
}


