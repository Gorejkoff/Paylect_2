import styled from "styled-components";

export const Arrow = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  min-height: 40px;
  width: 40px;
  min-width: 40px;

  border: 1px solid var(--color-white-solid);

  @media (min-width: 768px) {
    height: 58px;
    min-height: 58px;
    width: 58px;
    min-width: 58px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -2px;
    transform: translateY(-50%);
    width: calc(100% + 5px);
    height: 24px;
    background-color: var(--paylect-black);

    @media (min-width: 768px) {
      height: 36px;
    }
  }
  svg {
    position: relative;
    z-index: 1;
  }
`;
