import styled from 'styled-components';


export const QuoteBody = styled.div`
position: relative;
height: 63.8vw;
background-image: url("${require("../../image/jpg/image-background.jpg")}");
background-size: cover;
`


export const QuoteText = styled.div`
padding-top: 75px;

max-width: 1360px;

font-weight: 500;
font-size: 100px;
line-height: 100%;
letter-spacing: -0.02em;


&::before {
   content: '“';
   padding-right: 20%;
`


export const QuoteWord = styled.span`
span{
transition: opacity 0.2s;
opacity: max(0.2, calc((var(--k) - var(--p)) * 10000000));
}
`
/* white-space: nowrap; */

export const QuoteLetter = styled.span`

`
/* transition: opacity 0.5s;
opacity: max(0.2, calc((var(--k) - var(--p)) * 10000000)); */