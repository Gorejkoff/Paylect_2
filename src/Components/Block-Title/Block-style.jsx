import styled from 'styled-components';


export const BlockHeader = styled.div`
padding-top: 80px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 30px;

@media (min-width:1100px) {
   padding-top: 160px;
   flex-direction: row;
}
`

export const H2 = styled.h2`
flex: 0 0 45%;
font-weight: 500;
font-size: 45px;
line-height: 112%;


@media (min-width:768px) {
   font-size: 55px;
}
@media (min-width:1100px) {
   font-size: 64px;
}
`

export const P = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 120%;
text-indent: 25%;
@media (min-width:768px) {
   font-size: 20px;
}
@media (min-width:1100px) {
   font-size: 24px;
}
`
export const Line = styled.div`
margin-top: 40px;
margin-bottom: 15px;
width: 100%;
border-top: 1px solid var(--color-white-solid)
`
export const Icons = styled.div`
display: flex;
justify-content: space-between;
`