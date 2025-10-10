import styled from "styled-components";


export const PrivacyScroll = styled.div`
  padding: 0;
  @media (min-width: 1100px) {
    padding: 150px 0;
  }
`;

export const PrivacyBody = styled.div`
  padding: 30px;
  background-color: var(--color-almost-black);

  @media (min-width: 768px) {
    padding: 70px;
  }
  @media (min-width: 1100px) {
    padding: 100px;
  }
`;

export const PrivacyHeader = styled.div`
  position: sticky;
  top: 20px;
  padding-bottom: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  width: calc(100% - 150px);

  @media (max-width: 768px) {
    top: 25px;
    width: calc(100% - 50px);
  }
`;

export const PrivacyTitle = styled.div`
  position: relative;
  z-index: 5;
  font-weight: 600;
  font-size: 8vw;
  line-height: 120%;

  @media (min-width: 1200px) {
    font-size: 120px;
  }
`;

export const PrivacyUpdated = styled.div`
  padding-bottom: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.11em;

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1100px) {
    font-size: 36px;
  }
`;

export const PrivacyText = styled.div`
  margin-bottom: 100px;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.05em;
  color: var(--color-grey-76);

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1100px) {
    font-size: 32px;
  }
`;

export const PrivacyList = styled.ol`
  counter-reset: item;
`;
export const PrivacyListItem = styled.li`
  margin-bottom: 80px;
  margin-left: 1em;

  font-weight: 600;
  font-size: 25px;
  line-height: 120%;

  list-style: decimal;

  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 1100px) {
    font-size: 50px;
  }

  & > * > * {
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
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
export const PrivacyListTitle = styled.div`
  margin-bottom: 20px;
`;

export const PrivacyListOffset = styled.div`
  margin-left: -1em;

  & > p {
    margin-bottom: 30px;
  }
`;

export const PrivacyListSubtitle = styled.div`
  padding-bottom: 15px;
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
export const PrivacyListSubtext = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.08em;
`;
export const PrivacySubList = styled.ul`
  padding-left: 1.7em;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.08em;
  margin-bottom: 30px;

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
  padding-top: 30px;
  padding-bottom: 10px;
  background-color: var(--color-almost-black);
  position: absolute;
  top: 0;
  right: 0;

  width: calc(100% + 10px);

  display: flex;
  justify-content: flex-end;

  @media (min-width: 1100px) {
    padding-top: 50px;
  }

  button {
  }
`;

export const SentButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;
