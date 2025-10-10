import styled from 'styled-components';

export const Button = styled.div`

&>*{
   position: relative;
   display: flex;
   align-items: center;
   height: 30px;
   width: max-content;
   color: var(--color-white-solid);

   @media (min-width:768px) {
      height: 76px;
   }
}
&.header-button>*{

   @media (min-width:768px) {
      height: 60px;
   }
   @media (min-width:1400px) {
      height: 76px;
   }
}
`
export const ButtonTextWrapper = styled.span`
position: relative;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;
font-size: 10px;
line-height: 92%;
text-transform: uppercase;
height: 100%;

@media (min-width:768px) {
      font-size: 20px;
}

.header-button &{
   @media (min-width:768px) {
      font-size: 16px;
   }
   @media (min-width:1400px) {
         font-size: 20px;
   }
}
`

export const ButtonText = styled.span`
padding-left: 20px;
padding-right: 50px;
margin-right: -30px;
position: relative;
z-index: 2;
display: flex;
align-items: center;
justify-content: center;
min-width: max-content;
height: 100%;
opacity: 0;
pointer-events: none;

@media (min-width:768px) {
   padding-right: 96px;
   margin-right: -76px;
 }

.header-button &{
   @media (min-width:768px) {
      padding-right: 60px;
      margin-right: -60px;
      width: 246px;
   }
   @media (min-width:1400px) {
      padding-right: 76px;
margin-right: -56px;
      width: 326px;
   }
}
`

export const ButtonArrowWrapper = styled.span`
position: relative;
width: 30px;
height: 100%;

@media (min-width:768px) {
   width: 76px;
}

.header-button &{
   @media (min-width:768px) {
      width: 60px;
   }
   @media (min-width:1400px) {
      width: 76px;
   }
}
`
export const ButtonArrow = styled.span`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
z-index: 2;
`

