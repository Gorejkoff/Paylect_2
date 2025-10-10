import styled from "styled-components";

export const Message = styled.div`
font-family: Stratos;
font-size: 16px;
line-height: 120%;
text-align: center;
&:hot(:last-child){
   margin-bottom: 20px;
}
&>*{
   color: #00FF8A;
}

@media (min-width:768px) {
   font-size: 20px;
}
`