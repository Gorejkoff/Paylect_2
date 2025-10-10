import React from 'react';
import * as S from './CurrencyData.style';
import useOpenModal from '../../../../Hooks/ModalsHooks/useOpenModal';


export default function CurrencyData({ className = "", title, subtitle, format, name, estimatedValue, selectionButton }) {
   const openModal = useOpenModal("select_network");
   return (
      <S.Block className={className}>
         <S.Header>
            <div>
               <S.SendTitle >{title}</S.SendTitle>
               <S.Quantity>{subtitle}</S.Quantity>
            </div>
            <S.Format>
               <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5.5" cy="5.5" r="5" stroke="#141414" strokeWidth="0.5" />
                  <path d="M 5.5,3.5 a 2,2 0 1,0 0,4 a 2,2 0 1,0 0,-4" fill="#141414" />
               </svg>
               {format}
            </S.Format>
         </S.Header>
         <div>
            <S.EstimatedValue>{estimatedValue}</S.EstimatedValue>
            <S.Footer>
               <S.Name>{name}</S.Name>
               <S.NameIcon>
                  <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18.1901 27.6598V24.4146C20.7976 24.1429 22.6913 21.8088 22.4196 19.2013C22.2865 17.923 21.6408 16.7535 20.6301 15.9598C21.7712 15.0607 22.4394 13.6898 22.4446 12.237C22.437 9.80696 20.6057 7.7701 18.1901 7.50492V4.25977H16.0628V7.45068H13.9355V4.25977H11.8083V7.45068H7.55371V24.4689H11.8083V27.6598H13.9355V24.4689H16.0628V27.6598H18.1901ZM9.68098 9.57795H17.6583C19.1268 9.57795 20.3173 10.7685 20.3173 12.237C20.3173 13.7056 19.1268 14.8961 17.6583 14.8961H9.68098V9.57795ZM9.68098 22.3416V17.0234H17.6583C19.1268 17.0234 20.3173 18.2139 20.3173 19.6825C20.3173 21.151 19.1268 22.3416 17.6583 22.3416H9.68098Z" fill="#141414" />
                  </svg>
               </S.NameIcon>
               {selectionButton ?
                  <S.ChangeBody>
                     <S.Change
                        type="button"
                        aria-label='currency change'
                        onClick={openModal}
                     >
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5.25 0.959961L5.25 9.73972H5.6875L9.1875 6.40639M1.375 6.10877L3.09375 7.74568" stroke="#ffffff" strokeWidth="2.5" />
                        </svg>
                     </S.Change>
                  </S.ChangeBody> :
                  null}
            </S.Footer>
         </div>
      </S.Block>
   );
};