import styled from 'styled-components';

export const FirstScreenWrapper = styled.div`
min-height: 100dvh;
display: flex;
flex-direction: column;
padding-bottom: 70px;
`
export const Title = styled.h1`
font-weight: 500;
font-size: 50px;
line-height: 120%;
letter-spacing: -0.04em;

@media (min-width:768px) {
  font-size: 65px;
}
@media (min-width:1100px) {
   font-size: min(80px, 8vh);
}
`
export const Subtitle = styled.p`
font-family: var(--second-family);
font-size: 20px;
line-height: 208%;
letter-spacing: -0.05em;
@media (min-width:768px) {
   font-size: 24px;
}
@media (min-width:1100px) {
   font-size: 32px;
}
`

export const Line = styled.div`
margin-top: 40px;
margin-bottom: 40px;
width: 100%;
border-top: 1px solid var(--color-white-solid);
`


export const FirstScreenHeader = styled.div`
display: flex;
justify-content: space-between;
font-size: 24px;
line-height: 120%;
span{
   font-family: var(--second-family);
   font-weight: 350;
}
`
export const Scroll = styled.span`
display: flex;
align-items: center;
gap: 4px;
`

export const LottieBody = styled.div`
flex: 1 1 auto;
display: flex;
align-items: center;
`

export const LottieScreen = styled.div`
margin-left: auto;
margin-right: auto;
max-width: min(1144px , 90vh);

`