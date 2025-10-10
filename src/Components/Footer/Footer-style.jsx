import styled from "styled-components";

export const Footer = styled.footer`
  padding: 100px 0 40px;
  @media (min-width: 768px) {
    padding: 180px 0 50px;
  }
  @media (min-width: 1100px) {
    padding: 245px 0 73px;
  }
`;

export const FooterBody = styled.div`
  & > * {
    margin-bottom: 40px;
    flex: 0 0 50%;
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 30px;
    & > * {
      margin-bottom: 0;
    }
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    flex: 0 0 50%;
  }

  @media (min-width: 1100px) {
    align-items: flex-start;
  }
`;
export const FooterInfo = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1100px) {
    font-size: 32px;
  }
`;
export const FooterLink = styled.a`
  display: block;

  font-size: 18px;
  line-height: 171%;
  text-decoration: underline;

  text-decoration-color: #59ffac !important;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 5px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1100px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterBottomText = styled.div`
  font-size: 20px;
  line-height: 120%;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }
`;

export const FooterBottom = styled.div`
  * {
    font-size: 20px;
    line-height: 120%;
  }
`;

export const FooterAnhorBlock = styled.div`
  padding-bottom: 19px;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  div {
    text-align: center;
    position: relative;
  }
  button,
  a {
    position: relative;
    display: block;
    text-align: center;
  }
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
`;

export const FooterPrivacy = styled.div`
  display: none;
  button {
    width: 100%;
  }
  @media (min-width: 1200px) {
    display: block;
  }
`;
export const FooterAnhorText = styled.div`
  opacity: 0;
  white-space: nowrap;
`;

export const FooterTerms = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  gap: 30px;

  button {
    font-size: inherit;
  }
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
  @media (min-width: 1100px) {
    padding-bottom: 123px;
    padding-top: 0;
  }
`;

export const FooterCopyright = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;
export const FooterButton = styled.a`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
`;
export const Slash = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
`;
