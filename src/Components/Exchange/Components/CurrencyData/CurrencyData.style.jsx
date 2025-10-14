import styled, { css } from 'styled-components';

export const Header = styled.span`
display: flex;
justify-content: space-between;
align-items: flex-start;
`

export const SendTitle = styled.span`
display: block;
font-family: Stratos;
font-size: 20px;
line-height: 120%;
text-transform: uppercase;
color:#141414;
transition: color 0.5s;
`
export const Quantity = styled.span`
display: block;
font-family: Stratos;
font-size: 12px;
line-height: 120%;
color:#141414;
transition: color 0.5s;
`
export const Format = styled.span`
font-family: Stratos;
display: flex;
align-items: center;
gap: 4px;
color:#141414;
transition: color 0.5s;
 svg{
  circle{

    transition: stroke 0.5s;
  }
  path {

    transition: fill 0.5s;
  }
}
`
export const EstimatedValue = styled.span`
font-weight: 400;
font-size: 20px;
line-height: 120%;
color: #141414;
`
export const Footer = styled.span`
display: flex;
align-items: flex-end;
justify-content: space-between;
`
export const Name = styled.span`
font-weight: 600;
font-size: 40px;
color: #141414;
transition: color 0.5s;
@media (min-width:768px) {
   font-size: 64px;
}
`
export const NameIcon = styled.span`
&:nth-last-child(2){
  align-self: flex-start;
}
svg path{
  transition: fill 0.5s;
}
`
export const ChangeBody = styled.span`
flex: 1 1 auto;
display: flex;
justify-content: flex-end;
`
export const Change = styled.span`
padding: 12px;
svg path{
  transition: stroke 0.5s;
};
`

const BlockDark = css`
  background-color: #141414;
  border-color: rgba(255, 255, 255, 0.12);
  ${Quantity},
  ${SendTitle}{
    color: #848484;
  }
  ${Format}{
    color: #F4F6F6;
    svg{
      circle{
        stroke: #57FFAF;
      }
      path {
        fill: #57FFAF;
      }
    }
  }
  ${EstimatedValue}{
    color: #ffffff;
  }
  ${Name}{
    color: #ffffff;
  }
  ${Change}{
    svg path{
      stroke:#ffffff;
    }
  }
  ${NameIcon}{
    path{
      fill: #ffffff;
    }
  }
`



export const Block = styled.div`
min-height: 160px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #57FFAF;
border: 1px solid #57FFAF;
transition: background-color 0.5s, border-color 0.5s;

@media (min-width:1024px) {
  &[type='button']:not(:hover){
    cursor: pointer;
    ${BlockDark}
  }
}
`