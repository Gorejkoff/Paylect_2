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
@media (min-width:1024px) {
   &:hover svg{
      circle{
         fill: #ffffff;

      }
      path{
         fill: #1E1E1E;
      }
   } 
}
`
export const ButtonRotate = styled.button`
svg {
  transition: transform 0.3s;
  path{
    transition: stroke 0.3s;
  }
}
@media (min-width:1024px) {
   &:hover{
      svg{
         transform: rotate(180deg);
         path{
            stroke:  #57FFAF;
         }
    }
  }
}
`
export const ButtonHoverGreen = styled.button`
svg {
  path{
       transition: stroke 0.3s;
  }
}
@media (min-width:1024px) {
   &:hover{
     svg{
        path{
         stroke: #57FFAF;
       }
     }
   }
}
`