import styled, { css } from 'styled-components';

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
transition: color 0.5s;
`
export const Quantity = styled.div`
font-family: Stratos;
font-size: 12px;
line-height: 120%;
color: #848484;
transition: color 0.5s;
`
export const Format = styled.div`
font-family: Stratos;
display: flex;
align-items: center;
gap: 4px;
color: #F4F6F6;
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
color: #ffffff;
transition: color 0.5s;
@media (min-width:768px) {
   font-size: 64px;
}
`
export const NameIcon = styled.div`
&:nth-last-child(2){
  align-self: flex-start;
}
svg path{
  transition: fill 0.5s;
}
`
export const ChangeBody = styled.div`
flex: 1 1 auto;
display: flex;
justify-content: flex-end;
`
export const Change = styled.button`
padding: 12px;
svg path{
  transition: stroke 0.5s;
};
`

const BlockStyle = css`
background-color: #57FFAF;
  border-color: #57FFAF;
  ${Quantity},
  ${SendTitle}{
    color:#141414;
  }
  ${Format}{
    color:#141414;
    svg{
      circle{
        stroke: #141414;
      }
      path {
        fill: #141414;
      }
    }
  }
  ${Name}{
    color: #141414;
  }
  ${Change}{
    svg path{
      stroke:#141414;
    }
  }
  ${NameIcon}{
    path{
      fill: #141414;
    }
  }
`

export const Block = styled.div`
cursor: pointer;
min-height: 160px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #141414;
border: 1px solid rgba(255, 255, 255, 0.12);
transition: background-color 0.5s, border-color 0.5s;

&:hover{
  ${BlockStyle}
}
@media (max-width:1023.98px){  
  ${BlockStyle}
}
`