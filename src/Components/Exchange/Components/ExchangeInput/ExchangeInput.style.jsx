import styled from 'styled-components';


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
width: 100%;
font-weight: 500;
font-size: 24px;
color: #C1C1C1;
input{
width: 100%;
color: inherit;
font-size: inherit;
text-align: right;
input{
width: 100%;
}
@media (min-width:992px) {
   font-size: 40px;
}
}
`