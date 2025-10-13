import React from 'react';
import { Outlet } from 'react-router-dom';
import { FirstScreenWrapper } from '../../Components/First-Screen/First-screen-style.jsx'
import Header from '../../Components/Header/Header.jsx';
import LottieBlock from "../../Components/First-Screen/First-Screen-Lottie";
import FirstScreenTitle from "../../Components/First-Screen/First-Screen-Title";
import Footer from '../../Components/Footer/Footer.jsx';
import Modals from '../AssemblingModules.jsx';

export default function Layoute(props) {

   return (
      <>
         <FirstScreenWrapper>
            <Header scrollAnhor={props.scrollAnhor} />
            <LottieBlock />
            <FirstScreenTitle />
         </FirstScreenWrapper>
         <main>
            <Outlet />
         </main>
         <Footer scrollAnhor={props.scrollAnhor} />
         <Modals />
      </>
   );
};