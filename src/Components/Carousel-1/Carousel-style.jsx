import styled from 'styled-components';


export const CarouselBody = styled.div`
padding-top: 0.25735em;
padding-bottom: 0.25735em;
font-size: 100px;
background-color: var(--color-spring-green-73);
overflow: hidden;

@media (min-width:768px) {
   font-size: 200px;
}
@media (min-width:1100px) {
   font-size: 272px;
}
svg{
height: 1em;
transform: translateY(0.0735em)
}
`
export const CarouselText = styled.div`
font-weight: 500;
line-height: 108%;
color: var(--color-grey-1);
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


