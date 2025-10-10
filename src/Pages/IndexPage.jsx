import React from "react";
import "../index.css";

import Carousel from "../Components/Carousel-1/Carousel";
import Advantages from "../Components/Advantages/Advantages";
import Solution from "../Components/Solution/Solution";
import Services from "../Components/Services/Services";
import Quote from "../Components/Quote/Quote";
import Questions from "../Components/Questions/Questions";
import LogoFooter from "../Components/Logo/Logo-footer";
import Carousel2 from "../Components/Carousel-2/Carousel";


export default function App() {

   return (
      <>
         <Carousel />

         <Advantages />

         <Solution />

         <Services />

         <Quote />

         <Questions />

         <LogoFooter />

         <Carousel2 />
      </>
   );
}
