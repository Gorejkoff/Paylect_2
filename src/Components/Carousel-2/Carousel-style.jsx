import styled from 'styled-components';


export const CarouselBody = styled.div`
font-size: 150px;
height: 0.71em;
overflow: hidden;
border-bottom: 1px solid var(--color-white-solid);

@media (min-width:768px) {
   font-size: 200px;
}
@media (min-width:1100px) {
   font-size: 272px;
}
svg{
   height: 1em;
   }
`
export const CarouselText = styled.div`
font-weight: 500;
line-height: 108%;
color: var(--color-white-solid);
&>div{
width: max-content;
display: flex;


}
`
export const CarouselStripe = styled.div`
padding-right: 20px;
display: flex;
gap:20px;
`


