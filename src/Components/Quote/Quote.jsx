import { React, useRef } from "react";
import { ContainerLarge } from "../Global-Components/Container";
import { QuoteBody, QuoteWord, QuoteText } from "./Quote-style";
import { motion, useScroll } from "framer-motion"


const text = "I was highly impressed by their adaptability, expertise, and commitment in handling the workload. Their dedication to the project, along with their professional demeanor, really caught my attention."

const words = text.split(" ");

const divided_words = words.map((e) => e + " ")


export default function Quote() {

   let counter = 0;
   let procent = 100 / text.length;

   function Words(wordsItem) {
      const word = wordsItem.props.split("");
      return (
         <>
            <QuoteWord>
               {word.map((item, index) => <Letter props={item} key={index} />)}
            </QuoteWord>
            &thinsp;
         </>
      )
   }

   function Letter(letter) {
      counter++;
      const namber = counter * procent / 100;
      return (
         <motion.span style={{ "--p": namber, "--d": counter }}>
            {letter.props}
         </motion.span>
      )
   }

   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0.4 0.8", "0.8 0.4"]
   });

   return (
      <div id="anhor4">
         <QuoteBody>
            <ContainerLarge>
               <motion.div ref={ref} style={{ "--k": scrollYProgress }}>
                  <QuoteText>
                     {divided_words.map((item, index) => <Words props={item} key={index} />)}
                  </QuoteText>
               </motion.div>
            </ContainerLarge>
         </QuoteBody>
      </div>
   )
}


