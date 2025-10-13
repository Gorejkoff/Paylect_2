import styled from "styled-components";

export const HeaderBody = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 156px;
  padding-bottom: 31px;
  padding-top: 31px;
`;

export const Logo = styled.header`
max-width: max(25vw, 250px);
width: 360px;

a{
display:block;
}
svg{
width: 100%
max-width: 100%;
}
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: min(55px, 2.75vw);
`;

export const AnhorBody = styled.nav`
  display: none;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1100px) {
    display: flex;
  }
`;
export const AnhorList = styled.ol`
display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: min(25px, 2vw);
  `;

const StyleLink = styled.div`
  position: relative;
  display: block;
  padding: 6px;
  font-size: 20px;
  line-height: 120%;
  color: var(--color-white-solid);
  `;

export const AnhorLink = styled(StyleLink).attrs({ as: 'a' })``;
export const AnhorButton = styled(StyleLink).attrs({ as: 'button' })``;

export const AnhorLinkText = styled.span`
  opacity: 0;
  white-space: nowrap;
`;
export const AnhorLinkMask = styled.span`
  padding: 6px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`;
