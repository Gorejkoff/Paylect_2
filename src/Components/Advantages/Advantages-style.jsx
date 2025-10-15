import styled from "styled-components";

export const CardGrid = styled.div`
  padding-top: 60px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;
  color: var(--color-grey-1);

  @media (min-width: 1100px) {
    grid-template-columns:  1fr 1fr;
  }
  @media (min-width: 1250px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const CardBody = styled.section`
  padding: 16px 26px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white-solid);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-spring-green-73);
  }
`;

export const CardHeader = styled.div`
  margin-bottom: 42px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 96%;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 110px) {
    font-size: 16px;
  }
  @media (min-width: 1400px) {
    font-size: 20px;
  }
  h2 {
    text-align: right;
    @media (max-width: 767.98px) {
    }
  }
`;

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
`;

export const CardTitle = styled.h3`
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 30px;
  line-height: 107%;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const CardLine = styled.div`
  margin: 28px auto 20px;
  width: 100%;
  max-width: 180px;
  border-top: 1px solid var(--color-grey-1);
`;

export const CardText = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 370px;
  flex: 1 1 auto;
  padding-bottom: 60px;
  font-size: 18px;
  line-height: 120%;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
export const CardNumber = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 96%;
  text-transform: uppercase;
`;
