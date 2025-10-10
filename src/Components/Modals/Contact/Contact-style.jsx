import styled from "styled-components";

export const ContactWrapper = styled.div`
  --index: 50;
  position: fixed;
  top: -120%;
  left: 0;
  z-index: var(--index);
  width: 100vw;
  height: 100vh;
  background-color: var(--color-grey-1, #030303);
  overflow-y: auto;
  overflow-x: hidden;

  @supports (height: 100dvh;) {
    height: 100dvh;
  }
`;

export const ContactBody = styled.div`
  padding: 95px 0;
  display: flex;
  gap: 50px;
  flex-direction: column;
  min-height: 100vh;

  & > :first-child {
    flex: 0 0 50%;
  }

  & > :last-child {
    flex: 1 1 auto;
  }

  @supports (min-height: 100dvh) {
    min-height: 100dvh;
  }

  @media (min-width: 768px) {
    gap: 0;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
  }
  @media (max-width: 767.98px) {
    button[type="submit"] {
      width: 100%;

      & > span:first-child {
        width: 100%;
        span {
          width: calc(100% + 76px);
        }
      }
    }
  }
`;

export const ContactShell = styled.div`
  @media (min-width: 1100px) {
    padding-right: 30px;
  }
`;

export const Indent = styled.div`
  display: none;
  @media (min-width: 1100px) {
    display: block;
  }
`;
export const ContactTitle = styled.div`
  margin-bottom: 30px;
  font-size: 12vw;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  span {
    text-align: right;
    max-width: min-content;
  }

  @media (min-width: 992px) {
    margin-bottom: min(145px, 7.5vw);
    font-size: 120px;
  }

  @media (min-width: 1100px) {
    font-size: 6.25vw;
  }

  @media (min-width: 1920px) {
    font-size: 120px;
  }

  button {
    transform: translateY(-50%);
  }
`;

export const ContactText = styled.div`
  font-size: 16px;
  line-height: 120%;
  opacity: 0.33;
  @media (min-width: 1100px) {
    font-size: 20px;
  }
`;

export const ContactTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  & > * {
    padding-right: 20px;
    flex: 0 0 50%;
    span {
      display: inline-block;
      max-width: 285px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const ContactTextForm = styled.div`
  margin: 15px 0 45px;
  @media (min-width: 768px) {
    margin: 60px 0;
  }
`;

export const ContactButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 767.98px) {
    & > * {
      width: 100%;
    }

    button {
      min-width: 200px;
    }
  }
  @media (min-width: 767.98px) {
    button {
      min-width: 185px;
    }
  }
  @media (min-width: 1100px) {
    display: block;
  }
`;
export const InputBody = styled.div`
  position: relative;
  padding-bottom: 30px;
  select,
  textarea,
  input {
    width: 100%;
    font-size: 15px;
    color: var(--color-white-solid);
    background-color: transparent;
    appearance: none;
    -webkit-appearance: none;
    &::placeholder {
      text-transform: uppercase;
      color: var(--color-white-solid);
      opacity: 0.33;
      transition: opacity 0.2s;
    }

    &:focus::placeholder {
      opacity: 1;
    }
  }
  &.not-valid textarea::placeholder,
  &.not-valid input::placeholder {
    color: var(--paylect-outrageous-orange);
  }
  &.not-valid textarea,
  &.not-valid input {
    color: var(--paylect-outrageous-orange);
  }

  input {
    padding-bottom: 45px;
  }

  textarea {
    height: 200px;
    resize: none;
  }

  option {
    cursor: pointer;
    color: var(--paylect-black);

    &:disabled {
      opacity: 0 !important;
      visibility: hidden !important;
      display: none !important;
    }
  }
`;

export const InputLink = styled.div`
  position: relative;

  .not-valid & .line {
    background-color: var(--paylect-outrageous-orange) !important;
  }
`;
export const InputLine = styled.div`
  margin-top: -16px;
  position: relative;
  height: 16px;
  pointer-events: none;
  .line {
    background-color: var(--color-white-solid);
  }

  .not-valid & .line {
    background-color: var(--paylect-outrageous-orange) !important;
  }
`;

export const InputMediaBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  input::placeholder {
    text-transform: none;
  }

  & > div {
    flex: 0 0 50%;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    gap: 0;
  }
`;

export const InputMediaWrapper = styled.div`
  position: relative;

  &::after {
    pointer-events: none;
    content: url("data:image/svg+xml,<svg width='18' height='22' viewBox='0 0 18 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path  d='M9.16962 21.6901L0.344238 12.9994L1.49646 11.8648L8.35488 18.6185V0.830078L9.98436 0.830078V18.6185L16.8427 11.8648L17.995 12.9994L9.16962 21.6901Z' fill='white'/></svg>");
    position: absolute;
    bottom: 50%;
    right: 20px;
    width: 16px;
  }

  select {
    height: 64px;
    display: flex;
    align-items: flex-start;
    text-transform: uppercase;
    cursor: pointer;

    opacity: 0.33;
    &:focus {
      opacity: 1;
    }
  }
  .input-line-mobile {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
