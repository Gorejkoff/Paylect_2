import styled from 'styled-components';



export const Block = styled.div`
min-height: 160px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #141414};
.colored &{
  background-color: #57FFAF;
}
`
export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
`
export const SendTitle = styled.div`
 font-family: Stratos;
font-size: 20px;
line-height: 120%;
text-transform: uppercase;
color: #848484;
.colored &{
  color:#141414;
}
`
export const Quantity = styled.div`
font-family: Stratos;
font-size: 12px;
line-height: 120%;
color:  #141414;
`
export const Format = styled.div`
font-family: Stratos;
display: flex;
align-items: center;
gap: 4px;
color: #F4F6F6;
svg {
  circle {
    stroke: #57FFAF;
  }
  path {
    fill: #57FFAF;
  }
}
.colored & svg{
  circle{
    stroke: #141414;
  }
  path {
    fill: #141414;
  }
}
.colored &{
  color:#141414;
}
`
export const EstimatedValue = styled.div`
font-weight: 400;
font-size: 20px;
line-height: 120%;
color: #141414;
`
export const Footer = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
`
export const Name = styled.div`
font-weight: 600;
font-size: 40px;
// line-height: 120%;
color: #ffffff;
.colored & {
  color: #141414;
}
@media (min-width:7682px) {
   font-size: 64px;
}
`
export const NameIcon = styled.div`
&:nth-last-child(2){
  align-self: flex-start;
}
`
export const ChangeBody = styled.div`
flex: 1 1 auto;
display: flex;
justify-content: flex-end;
`
export const Change = styled.button`
padding: 12px;
svg path{stroke:#ffffff};
.colored & svg path{
  stroke:#141414;
}
`