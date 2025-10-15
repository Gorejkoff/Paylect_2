import styled from "styled-components";

export const SolutionBody = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1200px) {
    padding-bottom: 30px;
    flex-direction: row;
  }
  @media (min-width: 1100px) {
    padding-bottom: 80px;
  }
`;
export const SolutionTable = styled.div`
  flex: 0 0 50%;
`;
export const SolutionList = styled.div`
  flex: 0 0 50%;
`;

export const SolutionListGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const SolutionListNumber = styled.div`
  padding-bottom: 22px;
  padding-right: 5vw;
  display: flex;
  align-items: flex-end;
  font-size: 20px;
  line-height: 106%;
  border-bottom: 1px solid var(--color-white-solid-opacity-35);
  @media (min-width: 1400px) {
    padding-right: 121px;
  }
`;
export const SolutionListTitle = styled.div`
  padding-bottom: 22px;
  font-weight: 500;
  font-size: 24px;
  line-height: 133%;
  border-bottom: 1px solid var(--color-white-solid-opacity-35);

  @media (min-width: 768px) {
    font-size: 34px;
  }
  @media (min-width: 1400px) {
    font-size: 40px;
  }
`;

export const SolutionListText = styled.div`
  padding-top: 26px;
  padding-bottom: 40px;
  font-size: 18px;
  line-height: 120%;

  @media (min-width: 768px) {
    padding-bottom: 50px;
    font-size: 20px;
  }
  @media (min-width: 1400px) {
    padding-bottom: 63px;
    font-size: 24px;
  }
`;

export const SolutionTableGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 740px;
  @media (min-width: 1100px) {
    grid-template-columns: min(184px, auto) min(184px, 25%) min(184px, 25%) min(184px, 25%);
  }
`;

export const SolutionTableCell = styled.div`
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--color-white-solid);
  border-left: 1px solid var(--color-white-solid);

  text-align: center;
  font-size: 10px;
  line-height: 105%;
  text-transform: uppercase;

  &:nth-child(n + 5) {
    min-height: 100px;
  }

  &:nth-child(-n + 4) {
    padding-top: 28px;
    padding-bottom: 28px;
  }

  &:nth-child(4n) {
    border-right: 1px solid var(--color-white-solid);
  }

  &:nth-last-child(-n + 4) {
    border-bottom: 1px solid var(--color-white-solid);
  }
  &:nth-child(1) {
    padding: 0;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    min-height: 140px;
  }
  @media (min-width: 1100px) {
    font-size: 16px;
    min-height: 184px;
  }
`;

export const SolutionButton = styled.div`
  padding-bottom: 80px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    button {
      min-width: 240px;
    }
  }
  @media (min-width: 768px) {
    padding-bottom: 120px;

    button {
      min-width: 450px;
    }
  }
  @media (min-width: 1100px) {
    padding-bottom: 160px;
  }
`;
