import styled from "styled-components";

export const Button = styled.button`

svg{
   circle{
      fill: transparent;
      transition: fill 0.2s;
   }
   path{
       transition: fill 0.2s;
   }
} 

&:hover svg{
   circle{
      fill: #ffffff;
      
   }
   path{
      fill: #1E1E1E;
   }
} 
`