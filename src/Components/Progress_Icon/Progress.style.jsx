import styled from "styled-components";

export const Body = styled.div`
display: flex;
align-items: center;
gap: 16px;
`


export const Icon = styled.span`
position: relative;
padding: 3px;
display: inline-flex;
align-items: center;
width: 30px;
span {
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   height: 100%;
   width: 50%;
   background-color: rgba(255, 255, 255, 0.2);
   backdrop-filter: blur(1.5px);
}
`