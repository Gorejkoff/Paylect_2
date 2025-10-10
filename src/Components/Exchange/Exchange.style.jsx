import styled from 'styled-components';


export const Title = styled.h1`
margin-bottom: 20px; 
font-weight: 500;
font-size: 40px;
line-height: 120%;
text-align: center;
@media (min-width:992px) {
   font-size: 64px;
}
`

export const ExchangeContainer = styled.div`
max-width: 720px;
margin: 0 auto;
`

export const ExchangeBody = styled.div`
margin-bottom: 40px;
padding: 10px 10px;
background-color:#1d1d1d;
`
export const ExchangeHeader = styled.div`
margin-bottom: 20px;
display: flex;
justify-content: space-between;

button{
   align-self: flex-start;
}
`

export const Table = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 10px;
min-width: 0;
&>*{
padding: 10px;
}
@media (min-width:992px) {
   grid-template-columns: 1fr 1fr;
}
`

export const ValueBody = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
background-color: #141414;
min-width: 0;
min-height: 160px;
`
export const InDollars = styled.div`
font-size: 20px;
line-height: 120%;
color: #C1C1C1;
`
export const Value = styled.div`
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
max-width: 100%;
font-weight: 500;
font-size: 24px;
color: #C1C1C1;
input{
width: 100%;
color: inherit;
font-size: inherit;
text-align: right;
@media (min-width:992px) {
   font-size: 40px;
}
}
`

export const ExchangeButton = styled.div`
margin-top: 40px;
display: flex;
justify-content: center;
`
export const InfoTime = styled.div`
margin-top: 4px;
margin-bottom:4px;
display: grid;
grid-template-columns: 1fr 1fr;
`
export const NotPaid = styled.div`
padding: 5px 8px;
font-family: Stratos;
font-size: 16px;
line-height: 120%;
text-transform: uppercase;
color:#FF6338;
border: 2px solid #101010;
background-color: #373737;
`