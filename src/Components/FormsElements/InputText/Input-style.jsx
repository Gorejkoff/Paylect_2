import styled from "styled-components";

export const InputGroup = styled.div`
@media (min-width:992px) {
display: flex;
gap: 10px;
  &>*{
   flex: 1 1 auto;
  }
}

`

export const InputBody = styled.div`
  position: relative;
  padding-bottom: 40px;
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
  &.input-tag{
     @media (min-width:768px) {
      max-width: 124px;
    }
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
