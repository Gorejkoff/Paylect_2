import styled from "styled-components";

export const Button = styled.button`
svg {
   transition: transform 0.3s;
   path{
     transition: stroke 0.3s;
   }
 }
 &:hover{
   svg{
     transform: rotate(180deg);
     path{
       stroke:  #57FFAF;
     }
   }
 }
`