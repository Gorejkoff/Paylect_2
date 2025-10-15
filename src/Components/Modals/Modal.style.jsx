import styled from "styled-components";

export const ModalWrapper = styled.div`
position: fixed;
z-index: 10;
top: -120%;
left: 0;
width: 100vw;
height: 100vh;
background-color: var(--color-modal-background);
overflow-y: auto;
overflow-x: hidden;
&.dark{
  background-color: var(--paylect-black);
}

@supports (height: 100dvh;) {
  height: 100dvh;
}
`
export const ModalScroll = styled.div`
padding: 0;
min-height: 100%;
width: 100%;
margin-left: auto;
margin-right: auto;
`
export const ModalContainer = styled.div`
--padding: 12px;
  padding: var(--padding);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1100px) {
    --padding: 20px;
  }
`
export const LightBody = styled.div`
width: 100%;
overflow: hidden;
background-color: #C1C1C1;
&.network-list{
  max-width: 720px;
}
&.coin-list{
  max-width: 900px;
}
&.qr-code{
  max-width: 340px;
}
`

export const LightPadding = styled.div`
padding: 12px;
display: flex;
flex-direction: column;
width: 100vw;
max-width: 100%;
@media (min-width:1024px) {
  padding: 20px;
}
`
export const LightHeader = styled.div`
padding-bottom: 20px;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #848484;
`
export const LightTitle = styled.div`
font-family: Stratos;
font-size: 20px;
line-height: 120%;
text-transform: uppercase;
color: #141414;
`




