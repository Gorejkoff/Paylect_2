import { React, useRef, useState } from "react";
import * as S from './Contact-style';
import { motion, useInView } from "framer-motion";
import useValidateTest from '../../../Hooks/useValidateTest';


import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import parsePhoneNumber from 'libphonenumber-js'


const BottomLine = {
   position: "absolute",
   bottom: 0,
   left: "50%",
   transform: "translateX(-50%)",
   width: "100%",
   height: "1px",
   backgroundColor: "var(--color-white-solid)",
}
const SideLine = {
   position: "absolute",
   bottom: 0,
   transform: "rotate(180deg)",
   width: "1px",
   height: "100%",
   backgroundColor: "var(--color-white-solid)",
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
      height: "16px",
      transition: {
         duration: 0.5,
         delay: 0.5
      }
   }
}


export default function InputMedia({ statePhoneInput }) {

   const media768 = window.matchMedia('(min-width: 768px)');
   const validateTest = useValidateTest();
   const [valid, setValid] = useState(true);
   const selectItem = useRef(null);
   const inputItem = useRef(null);
   const trigger = useRef(null);
   const telegramm = useRef(false);
   const phoneInput = useRef(null);
   const isInView = useInView(trigger, { amount: 1, once: !media768.matches });

   function changeSelect() {

      if (selectItem.current[selectItem.current.selectedIndex].dataset.phone) {
         inputItem.current.disabled = true;
         inputItem.current.style.display = "none";
         phoneInput.current.closest('.PhoneInput').style.display = "flex";
         phoneInput.current.closest('.PhoneInput').querySelector('select').disabled = false;
         phoneInput.current.disabled = false;
         return
      }
      phoneInput.current.closest('.PhoneInput').style.display = "none";
      phoneInput.current.disabled = true;
      selectItem.current[selectItem.current.selectedIndex].dataset.telegramm ?
         telegramm.current = true :
         telegramm.current = false;
      const mask = selectItem.current[selectItem.current.selectedIndex].dataset.mask;
      const reg = selectItem.current[selectItem.current.selectedIndex].dataset.reg;
      inputItem.current.placeholder = mask;
      inputItem.current.pattern = reg;
      inputItem.current.value = "";
      inputItem.current.disabled = false;
      inputItem.current.style.display = "block";
      inputItem.current.focus();
      setValid(validateTest(inputItem.current.value, new RegExp(inputItem.current.pattern)));
   }

   function entering() {
      if (telegramm.current) {
         enteringTelegrammName();
      }

      validate()
   }

   function validate() {
      statePhoneInput(validateTest(inputItem.current.value, new RegExp(inputItem.current.pattern)));
      setValid(validateTest(inputItem.current.value, new RegExp(inputItem.current.pattern)))
   }

   function enteringTelegrammName() {
      if (inputItem.current.value[0] !== "@") {
         inputItem.current.value = "@" + inputItem.current.value;
      }
      if (inputItem.current.value[1] === "@") {
         inputItem.current.value = inputItem.current.value.substring(1);
      }
   }

   function enteringNumber() {
      if (parsePhoneNumber(phoneInput.current.value)) {
         statePhoneInput(parsePhoneNumber(phoneInput.current.value).isValid());
         setValid(parsePhoneNumber(phoneInput.current.value).isValid());
         return;
      }
      statePhoneInput(false);
   }

   return (
      <S.InputBody
         ref={trigger}
         className={valid ? "" : "not-valid"}
      >

         <S.InputMediaBlock>

            <S.InputMediaWrapper >
               <select
                  ref={selectItem}
                  name="media"
                  id="media"
                  defaultValue="Enter Social media *"
                  onChange={() => changeSelect()}
               >
                  <option disabled value="Enter Social media *">Enter Social media *</option>
                  <option
                     value="Telegramm *"
                     data-reg="^@[a-zA-Z0-9._%+-]"
                     data-mask="@nickName"
                     data-telegramm="true"
                  >
                     Telegramm
                  </option>

                  <option
                     value="Twitter *"
                     data-reg="^[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$"
                     data-mask="Example:site.com"
                  >
                     Twitter
                  </option>

                  <option
                     value="Facebook *"
                     data-reg="^[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$"
                     data-mask="Example:site.com"
                  >
                     Facebook
                  </option>

                  <option
                     value="LinkedIn *"
                     data-reg="^[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$"
                     data-mask="Example:site.com"
                  >
                     LinkedIn
                  </option>

                  <option
                     value="WhatsApp *"
                     data-reg=".*?"
                     data-mask=""
                     data-phone="true"
                  >
                     WhatsApp
                  </option>

               </select>


               <S.InputLine className="input-line-mobile">
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


            </S.InputMediaWrapper>

            <S.InputLink>
               <input
                  ref={inputItem}
                  type="text"
                  name="link"
                  id="link"
                  required
                  onChange={() => entering()}
               />

               <PhoneInput
                  ref={phoneInput}
                  international
                  defaultCountry="RU"
                  flags={flags}
                  placeholder="Enter phone number"
                  onChange={() => enteringNumber()}
                  required
                  disabled
                  autoComplete="tel"
               />


               <motion.div
                  className="line"
                  style={{ ...SideLine, left: 0 }}
                  variants={variantsV}
                  initial="hid"
                  animate={isInView ? "show" : "hide"}
               />

            </S.InputLink>

         </S.InputMediaBlock >

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

      </S.InputBody >
   )

}