import styled from "styled-components";

export const QuestionsBody = styled.section`
  padding-top: 80px;
  @media (min-width: 768px) {
    padding-top: 120px;
  }
  @media (min-width: 1100px) {
    padding-top: 160px;
  }
`;

export const QuestionsTitle = styled.h2`
  font-family: var(--font-family);
  font-size: 10vw;
  line-height: 97%;
  letter-spacing: -0.07em;
  text-transform: uppercase;

  @media (min-width: 1100px) {
    font-size: 100px;
  }
  @media (min-width: 1920px) {
    font-size: 128px;
  }
`;

export const QuestionsBlockHeader = styled.div`
  padding: 30px 0;

  display: flex;
  align-items: center;

  cursor: pointer;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
  @media (min-width: 1100px) {
    padding: 64px 0;
  }
`;

export const QuestionsNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 23px;
  line-height: 130%;
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding-right: 15px;
    flex: 0 0 20%;
  }
  @media (min-width: 1100px) {
    flex: 0 0 50%;
  }
`;
export const QuestionsTextBody = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
`;

export const QuestionsCircle = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }

  div {
    width: 30px;
    min-width: 30px;
    height: 30px;
    border: 1px solid var(--color-white-solid);
    border-radius: 50%;
  }
`;

export const QuestionsText = styled.div`
  flex: 1 1 auto;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 18px;
  line-height: 120%;
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding-right: 40px;
    font-size: 24px;
  }
  @media (min-width: 1100px) {
    padding-right: 60px;
    font-size: 32px;
  }
`;

export const QuestionsButton = styled.div`
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

export const QuestionsAnswer = styled.div`
  padding-bottom: 50px;
  display: flex;
  font-size: 16px;
  line-height: 120%;
  opacity: 0.33;

  @media (min-width: 768px) {
    padding-bottom: 80px;
    font-size: 18px;
  }
  @media (min-width: 1100px) {
    padding-bottom: 105px;
    font-size: 20px;
  }

  & > div {
    &:first-child {
      flex: 0 0 20%;
    }
    &:last-child {
      flex: 1 1 auto;
    }

    @media (min-width: 1100px) {
      &:first-child {
        flex: 0 0 50%;
      }
      &:last-child {
        flex: 0 0 50%;
      }
    }
  }
`;
export const QuestionsAnswerText = styled.div`
  max-width: 660px;
`;
export const QuestionsBorder = styled.div`
  display: flex;
  border-right: 1px solid var(--color-white-solid);

  & > div {
    height: 42px;
    border-left: 1px solid var(--color-white-solid);

    &:first-child {
      flex: 0 0 20%;
    }
    &:last-child {
      flex: 1 1 auto;
    }

    @media (min-width: 1100px) {
      &:first-child {
        flex: 0 0 50%;
      }
      &:last-child {
        flex: 0 0 50%;
      }
    }
  }
`;
export const QuestionsBorderBottom = styled.div`
border-bottom: 1px solid var(--color-white-solid);
}
`;
