import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Lenis from "lenis";
import Layoute from './Pages/Layoutes/Layoute.jsx';
import LayouteIndex from './Pages/Layoutes/Layoute_Index.jsx';
import IndexPage from './Pages/IndexPage.jsx';
import ExchangePage from "./Pages/ExchangePage.jsx";
import ExchangeOrderProcessingPage from "./Pages/ExchangeOrderProcessingPage.jsx";
import ExchangeInProcessingPage from "./Pages/ExchangeInProcessingPage.jsx";
import ExchangeCompletedPage from "./Pages/ExchangeCompletedPage.jsx";
import ExchangeNotPaidPage from "./Pages/ExchangeNotPaid.jsx";


export default function App() {

   /* плавная прокрутка Lenis */
   let documentHeight = document.body.scrollHeight;
   const lenis = new Lenis({
      duration: 1.9,
      autoResize: true,
   });
   function raf(time) {
      lenis.raf(time);
      if (documentHeight !== document.body.scrollHeight) {
         documentHeight = document.body.scrollHeight;
         lenis.resize();
      }
      requestAnimationFrame(raf);
   }
   useEffect(() => {
      requestAnimationFrame(raf);
   });

   /* функция прокрутки по якорям */
   const scrollAnhor = (n) => {
      lenis.scrollTo(n);
   };


   return (
      <Routes>
         <Route path="/" element={<LayouteIndex scrollAnhor={scrollAnhor} />}>
            <Route index element={<IndexPage />} />
         </Route>
         <Route path="/exchange" element={<Layoute scrollAnhor={scrollAnhor} />}>
            <Route index element={<ExchangePage />} />
            <Route path="processing" element={<ExchangeOrderProcessingPage />} />
            <Route path="info" element={<ExchangeInProcessingPage />} />
            <Route path="completed" element={<ExchangeCompletedPage />} />
            <Route path="notpaid" element={<ExchangeNotPaidPage />} />
         </Route>
         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
   )

}