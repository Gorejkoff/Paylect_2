import styled from 'styled-components';

export const Body = styled.div`
padding: 20px;
background-color: #141414;
display: flex;
justify-content: space-between;
gap: 10px;
&:not(:last-child){
margin-bottom: 4px;
}
`
export const Title = styled.div`
font-family: Stratos;
font-size: 16px;
line-height: 120%;
text-transform: uppercase;
color: #C1C1C1;
@media (min-width:1024px) {
   font-size: 20px;
}
`
export const Value = styled.div`
font-size: 16px;
line-height: 120%;
color: #00FF8A;
text-overflow: ellipsis;
overflow: hidden;
overflow-wrap: break-word;
word-break: break-all;
&.large{
   text-transform: uppercase;
   font-size: 20px;
}
`
export const Message = styled.div`
font-family: Stratos;
font-size: 12px;
line-height: 120%;
color: #C1C1C1;
`
export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
a,
button{
   text-align: left;
}
`

export const Limiter = styled.div`



`


export const Buttons = styled.div`

display: inline-flex;
align-items: center;
gap: 10px;

`