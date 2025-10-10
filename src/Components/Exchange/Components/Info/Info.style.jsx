import styled from 'styled-components';

export const Info = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
gap: 10px;
background-color: #141414;
&:not(:last-child){
  margin-bottom: 4px;
}
`
export const InfoTitle = styled.div`
font-family: Stratos;
font-size: 16px;
line-height: 120%;
text-transform: uppercase;
color: #C1C1C1;
@media (min-width:1024px) {
   font-size: 20px;
}
`
export const InfoValue = styled.div`
font-size: 12px;
color: #F4F6F6;
text-overflow: ellipsis;
overflow: hidden;

&.large{
  text-transform: uppercase;
  font-size: 16px;
  @media (min-width:1024px) {
   font-size: 20px;
}
}


`
export const InfoMessage = styled.div`
font-family: Stratos;
font-size: 12px;
line-height: 120%;
color: #C1C1C1;
`