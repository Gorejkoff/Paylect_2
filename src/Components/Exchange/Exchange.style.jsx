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
export const Group = styled.div`
display: flex;
align-items: center;
gap: 8px;
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
&.green{
   color:#00FF8A;
}
`