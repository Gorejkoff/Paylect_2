import styled from "styled-components";

export const Border = styled.div`
position: relative;
margin: 24px 0;
padding: 16px 12px;
display: flex;
align-items: center;
gap: 12px;
border: 1px solid #373737;

@media (min-width:1024px) {
    margin: 40px 0;
    padding: 28px 20px;
}

input{
   flex: 1 1 auto;
   min-width: 0;
   font-weight: 300;
   font-family: Stratos;
   font-size: 24px;
   line-height: 120%;
   color: #848484;

   @media (min-width:1024px) {
    font-size: 36px;
   }
}


input:-webkit-autofill {
    -webkit-text-fill-color: #848484 !important;
}

a,
button{
    width: 32px;
    @media (min-width:768px) {
        width: 40px;
    }
    svg{
        width: 100%;
    }
}
`

export const Button = styled.button`
svg {
    transition: transform 0.3s;
  }
&:hover{
  svg{
    transform: rotate(180deg);
   }
} 
`



