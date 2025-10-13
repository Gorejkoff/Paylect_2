import styled from "styled-components"

export const Shell = styled.div`
position: relative;
z-index: 100;
`
export const Background = styled.div`
position: fixed;
top:0;
left: 0;
z-index: -1;
width: 100%;
height: 100%;
background-color: var(--color-white-solid);
opacity: .33;
`