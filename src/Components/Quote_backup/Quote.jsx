import { React, useRef } from "react";
import { ContainerLarge } from "../Global-Components/Container";
import { QuoteBody, QuoteWord, QuoteText, QuoteLetter } from "./Quote-style";
import { motion, useScroll } from "framer-motion"


const text = "I was highly impressed by their adaptability, expertise, and commitment in handling the workload. Their dedication to the project, along with their professional demeanor, really caught my attention."

const divided_words = text.split(" ");

let counter = 0;
let procent = 100 / text.length;

function Words(wordsItem) {

   const word = wordsItem.props.split("");

   return (
      <QuoteWord  >{word.map((item) => <Letter props={item} />)} </QuoteWord>
   )
}



function Letter(letter) {


   counter++;

   const namber = counter * procent / 100;

   return (
      <span
         style={{ "--p": namber, "--d": counter }}
      >
         {letter.props}
      </span>
   )
}



export default function Quote() {

   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0.4 0.8", "0.8 0.4"]
   });
   return (
      <div>
         <QuoteBody>
            <ContainerLarge>
               <motion.div
                  ref={ref}
                  style={{ "--k": scrollYProgress }}
               >
                  <QuoteText>
                     {divided_words.map((item) => <Words props={item} />)}
                  </QuoteText>
               </motion.div>
            </ContainerLarge>
         </QuoteBody>
      </div>
   )
}


