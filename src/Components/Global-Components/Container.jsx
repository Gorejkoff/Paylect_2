import styled from 'styled-components';

export const Container = styled.div`
padding-left: 10px;
padding-right: 10px;

margin-left: auto;
margin-right: auto;

width: 100%;
max-width: 1920px;

@media (min-width:768px) {
   padding-left: 40px;
   padding-right: 40px;
}
@media (min-width:1100px) {
   padding-left: 60px;
   padding-right: 60px;
}

`

export const ContainerLarge = styled.div`
padding-left: 20px;
padding-right: 20px;

margin-left: auto;
margin-right: auto;

width: 100%;
max-width: 1920px;
`
export const ContainerModal = styled.div`
padding: 0;

margin-left: auto;
margin-right: auto;

width: 100%;
max-width: 1600px;
`