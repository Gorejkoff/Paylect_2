import styled from "styled-components";

export const TermsScroll = styled.div`
  padding: 0;
  @media (min-width: 1100px) {
    padding: 150px 0;
  }
`;

export const TermsBody = styled.div`
  padding: 30px;
  background-color: var(--color-almost-black);
*{
  font-family: var(--second-family);
  line-height: 150%;
}
  @media (min-width: 768px) {
    padding: 70px;
  }
  @media (min-width: 1100px) {
    padding: 100px;
  }
`;

export const TermsHeader = styled.div`
  padding-top: 50px;
  margin-bottom: 100px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  width: calc(100% - 150px);

  @media (max-width: 768px) {
       width: calc(100% - 50px);
  }
`;

export const TermsTitle = styled.div`
  position: relative;
  z-index: 5;
  font-weight: 600;
  font-size: 8.5vw;
  text-transform: uppercase;
  line-height: 120%;

  @media (min-width: 1200px) {
    font-size: 128px;
  }
`;

export const TermsUpdated = styled.div`
  padding-bottom: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.11em;

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1100px) {
    font-size: 40px;
  }
`;

export const TermsText = styled.div`
  margin-bottom: 100px;
  font-size: 20px;
  line-height: 200%;
  letter-spacing: -0.05em;
  color: var(--color-grey-76);
p,b{
  line-height: 200%;
  font-weight: 350;
}
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1100px) {
    font-size: 32px;
  }
`;

export const TermsList = styled.ol`
  counter-reset: item;
`;
export const TermsListItem = styled.li`
  margin-bottom: 80px;
  margin-left: 1em;
  font-size: 25px;
  line-height: 200%;
  list-style: decimal;

  @media (min-width: 768px) {
    font-size: 60px;
  }
  @media (min-width: 1100px) {
    font-size: 96px;
  }

  & > * > * {
    font-size: 16px;
    font-weight: 400;
    line-height: 200%;
    letter-spacing: -0.08em;
    color: var(--color-grey-76);

    @media (min-width: 768px) {
      font-size: 18px;
    }
    @media (min-width: 1100px) {
      font-size: 20px;
    }
  }
`;
export const TermsListTitle = styled.div`
  margin-bottom: 20px;
  font-weight: 500;
`;

export const TermsListOffset = styled.div`
  margin-top: 20px;
  margin-left: -1em;

  & > p,b {
    font-weight: 350;
  }
`;

export const TermsListSubtitle = styled.div`
  margin-top: 50px;
  padding-bottom: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: -0.08em;
  color: var(--color-white-solid);

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1100px) {
    font-size: 32px;
  }
`;
export const TermsListSubtext = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.08em;
`;
export const TermsSubList = styled.ul`
  padding-left: 1.7em;
  font-weight: 350;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.08em;
line-height: 150%;

  li {
    list-style: disc;
  }
`;

export const HideButton = styled.div`
  opacity: 0;
  pointer-events: none;
`;

export const BodyFixedButton = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  width: 100%;
`;
export const BodyFixedBackground = styled.div`
  padding-top: 50px;
  padding-bottom: 10px;
  background-color: var(--color-almost-black);
  position: absolute;
  top: 0;
  right: 0;

  width: calc(100% + 10px);

  display: flex;
  justify-content: flex-end;

  button {
  }
`;

export const SentButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;
