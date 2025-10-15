import styled from 'styled-components';

export const Button = styled.div`
--size: 76px;
--padding: 20px;
font-size: 20px;
max-width: 100%;
&.decreases{
   --size:36px;
   font-size: 12px;

   @media (min-width:768px) {
      --size: 48px;
      font-size: 16px;
   }

   @media (min-width:1024px) {
      --size: 76px;
      font-size: 20px;
   }
}
&>*{
   position: relative;
   display: flex;
   align-items: center;
   height: var(--size);
   color: var(--color-white-solid);
}
`
export const ButtonTextWrapper = styled.span`
position: relative;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;
line-height: 92%;
text-transform: uppercase;
height: 100%;
max-width: 100%;
`

export const ButtonText = styled.span`
padding-left: var(--padding);
padding-right: calc(var(--padding) + var(--size));
margin-right: calc(var(--size) * -1);
position: relative;
z-index: 2;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: calc(100% + var(--size));
opacity: 0;
pointer-events: none;
`

export const ButtonArrowWrapper = styled.span`
position: relative;
min-width: var(--size);
width: var(--size);
height: 100%;
`
export const ButtonArrow = styled.span`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
z-index: 2;
`

