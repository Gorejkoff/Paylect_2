import { React, useRef, useState } from "react";
import * as S from './Contact-style';
import { motion, useInView } from "framer-motion";
import useValidateTest from '../../../Hooks/useValidateTest';


const BottomLine = {
   position: "absolute",
   bottom: 0,
   left: "50%",
   transform: "translateX(-50%)",
   width: "100%",
   height: "1px"
}
const SideLine = {
   position: "absolute",
   bottom: 0,
   transform: "rotate(180deg)",
   width: "1px",
   height: "100%"
}

const variantsH = {
   hide: {
      width: 0,
      transition: {
         duration: 0.5,
         delay: 0.5
      }
   },
   show: {
      width: "100%",
      transition: {
         duration: 0.5
      }
   }
}
const variantsV = {
   hide: {
      height: 0,
      transition: {
         duration: 0.5

      }
   },
   show: {
      height: "100%",
      transition: {
         duration: 0.5,
         delay: 0.5
      }
   }
}


export default function InputMail({ type, id, name, placeholder, required, disabled, statePhoneInput }) {
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


   const media768 = window.matchMedia('(min-width: 768px)');
   const trigger = useRef(null);
   const isInView = useInView(trigger, { amount: 1, once: !media768.matches });

   const inputItem = useRef(null);
   const validateTest = useValidateTest();
   const [valid, setValid] = useState(true);
   function validateEmail() {
      statePhoneInput(validateTest(inputItem.current.value, emailRegex));
      setValid(validateTest(inputItem.current.value, emailRegex));
   }

   return (
      <S.InputBody
         ref={trigger}
         className={valid ? "" : "not-valid"}
      >
         <input
            ref={inputItem}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            required={required}
            disabled={disabled}

            onChange={() => validateEmail()}
         />

         <S.InputLine>
            <motion.div
               className="line"
               style={BottomLine}
               variants={variantsH}
               initial="hid"
               animate={isInView ? "show" : "hide"}
            />
            <motion.div
               className="line"
               style={{ ...SideLine, right: 0 }}
               variants={variantsV}
               initial="hid"
               animate={isInView ? "show" : "hide"}
            />
            <motion.div
               className="line"
               style={{ ...SideLine, left: 0 }}
               variants={variantsV}
               initial="hid"
               animate={isInView ? "show" : "hide"}
            />
         </S.InputLine>

      </S.InputBody>
   )

}