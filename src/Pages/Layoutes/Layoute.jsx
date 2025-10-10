import React from 'react';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import Modals from '../AssemblingModules.jsx';
import QRCodeModal from '../../Components/Modals/QRCode/QRCode';
import Contact from '../../Components/Modals/Contact/Contact.jsx';

export default function Layoute(props) {

   const location = useLocation();
   const isProcessingInfo = location.pathname === '/exchange/processing/info';
   const isIndex = location.pathname === '/';

   return (
      <>
         <Header scrollAnhor={props.scrollAnhor} />
         <main>
            <Outlet />
         </main>
         <Footer scrollAnhor={props.scrollAnhor} />
         <Modals />
         {isProcessingInfo && <QRCodeModal />}
         {isIndex && <Contact />}
      </>
   );
};