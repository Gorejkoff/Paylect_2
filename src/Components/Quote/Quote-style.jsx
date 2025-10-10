import styled from 'styled-components';


export const QuoteBody = styled.div`
position: relative;
min-height: 63.8vw;
background-image: url("${require("../../image/jpg/image-background.jpg")}");
background-size: cover;
`


export const QuoteText = styled.div`
padding-top: 75px;
padding-bottom: 75px;

width: 1375px;
max-width: calc(100vw - 40px);

display: flex;
flex-wrap: wrap;

font-size: 0;

&::before {
   content: '“';
   padding-right: 20%;
}



`


export const QuoteWord = styled.span`
 white-space: nowrap;

   line-height: 100%;
   font-weight: 500;
   letter-spacing: -0.02em;
   font-size: 30px;

@media (min-width:768px) {
   font-size: 60px;
}
@media (min-width:1100px) {
   font-size: 100px;
}

 span{

   white-space: pre-wrap;

   transition: opacity 0.2s 0.2s;
   opacity: max(0.2, calc((var(--k) - var(--p)) * 10000000));
}
`