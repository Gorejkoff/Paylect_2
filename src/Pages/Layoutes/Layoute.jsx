import React from 'react';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import Modals from '../AssemblingModules.jsx';

export default function Layoute(props) {

   return (
      <>
         <Header scrollAnhor={props.scrollAnhor} />
         <main>
            <Outlet />
         </main>
         <Footer scrollAnhor={props.scrollAnhor} />
         <Modals />
      </>
   );
};