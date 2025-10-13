import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Lenis from "lenis";
import LayouteIndex from './Pages/Layoutes/Layoute_Index.jsx';
import IndexPage from './Pages/IndexPage.jsx';


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
         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
   )

}