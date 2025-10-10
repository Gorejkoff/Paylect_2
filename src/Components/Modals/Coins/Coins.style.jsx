import styled from "styled-components";

export const Shell = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
gap: 10px;
width: 100%;

@media (min-width:1024px) {
   flex-direction: row;
   align-items: flex-start;
}
`
export const Grid = styled.div`
display: grid;
grid-template-columns:  1fr;
gap: 10px;
width: 100%;
@media (min-width:768px) {
grid-template-columns: 1fr 1fr;
}
`
export const SelectScroll = styled.div`
overflow-y: auto;
overflow-x: hidden;
max-height: 720px;
&::-webkit-scrollbar {
   display: none;
}	
`
export const Select = styled.label`
cursor: pointer;
padding: 20px 16px;
display: flex;
gap:10px;
justify-content: space-between;
background-color: #373737;

@media (min-width:1024px) {
   padding: 28px 20px;
}
`
export const SelectName = styled.span`
font-family: Stratos;
font-size: 20px;
line-height: 120%;
text-transform: uppercase;
color:#ffffff;

@media (min-width:1150px) {
font-size: 32px;
}
`
export const SelectCheck = styled.span`
display: flex;
align-items: center;
input{
display:none;
}
input:checked+span{
background-color: #ffffff;
border-color: @ffffff;
}

span{
   display: inline-block;
   width: 20px;
   min-width: 20px;
   height: 20px;
   border: 1px solid #848484 ;
}
`
export const InputWrapper = styled.div`

`
export const CoinIcon = styled.img`
height: 24px;
@media (min-width:768px) {
   height: 50px;
}
`
export const SelectImg = styled.img`
display:none;
height: 32px;
@media (min-width:768px) {
   height: 60px;
}
@media (min-width:1024px) {
   height: 80px;
}
`
export const SelectCoin = styled.label`
cursor: pointer;
margin-bottom: 20px;
display: flex;
align-items: center;
gap: 20px;
font-family: Stratos;
font-weight: 500;
font-size: 32px;
line-height: 120%;
color: #141414;
input{
   display:none;
}
input:checked+${SelectImg}{
display:block;
}

@media (min-width:768px) {
font-size: 52px;
}
@media (min-width:1250px) {
font-size: 96px;
}
`






