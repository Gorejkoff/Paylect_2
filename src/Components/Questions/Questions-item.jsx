import { React } from "react";
import * as S from "./Questions-style";
import { motion, AnimatePresence } from "framer-motion";



export default function QuestionsItem({ i, expanded, setExpanded, data }) {

   const isOpen = i === expanded;


   const variantsParent = {
      active: {},
      static: {},
   }
   const variantsChildren = {
      active: { rotate: 45 },
      static: { rotate: 0 },
   }
   const variantsCircle = {
      active: {
         backgroundColor: "var(--color-spring-green-73)",
         borderColor: "var(--color-spring-green-73)"
      },
      static: { backgroundColor: "#59ffac00" },
   }
   const line = {
      visible: { opacity: 1 },
      trnsparent: { opacity: .12 },
   }

   return (
      <motion.div
         style={{ overflow: "hidden" }}
         initial="static"
         whileHover="active"
         variants={variantsParent}
      >


         <S.QuestionsBlockHeader
            onClick={() => setExpanded(isOpen ? false : i)}
         >
            <S.QuestionsNumber>
               <span>Q/0{data.id}</span>
               <S.QuestionsCircle>
                  <motion.div
                     variants={variantsCircle}
                  />
               </S.QuestionsCircle>
            </S.QuestionsNumber>
            <S.QuestionsTextBody>
               <S.QuestionsText>{data.question}</S.QuestionsText>
               <S.QuestionsButton>
                  <motion.svg
                     width="11"
                     height="11"
                     viewBox="0 0 11 11"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     variants={variantsChildren}
                  >
                     <path d="M2.05881 9.48302L8.72282 2.7967L8.0811 2.15283H1.31836M9.06836 10.3403V5.46533" stroke="white" strokeWidth="2.5" />
                  </motion.svg>
               </S.QuestionsButton>
            </S.QuestionsTextBody>
         </S.QuestionsBlockHeader>


         <AnimatePresence initial={false}>

            {isOpen && (
               <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                     open: { height: "auto" },
                     collapsed: { height: 0 }
                  }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
               >

                  <S.QuestionsAnswer>
                     <div></div>
                     <div>
                        <S.QuestionsAnswerText>{data.answer}</S.QuestionsAnswerText>
                     </div>
                  </S.QuestionsAnswer>
                  <S.QuestionsBorder>
                     <div></div>
                     <div></div>
                  </S.QuestionsBorder>

               </motion.div>
            )}
         </AnimatePresence>

         <motion.div
            animate={isOpen ? "visible" : "trnsparent"}
            variants={line}
            transition={{ duration: 0.8, }}
         >
            <S.QuestionsBorderBottom></S.QuestionsBorderBottom>
         </motion.div>

      </motion.div>
   )
}