import styled from "styled-components";


export const ButtonBody = styled.div`
display: flex;
flex-wrap: wrap;
border:1px solid #373737;
border-radius: 24px;
padding: 3px;
`
export const ButtonItem = styled.button`
padding: 10px 16px;
display: flex;
align-items: center;
justify-content: center;
min-height: 40px;
font-family: Stratos;
font-size: 15px;
text-transform: uppercase;
color: #848484;
transition: all 0.3s;
&:disabled{
pointer-events: none;
}
&.active{
background-color: #141414;
border-radius: 60px;
color: #F4F6F6;
}
@media (min-width:1024px) {
   &:not(.active):hover{
      color: #141414;
   }
}
`
export const ButtonShell = styled.div`
margin-top: 20px;
margin-bottom: 10px;
display: flex;
justify-content: center;
&.light{
   & ${ButtonBody}{
      width: 100%;
   }
   & ${ButtonItem}{
      flex: 1 1 1%;
   }
   
}
`