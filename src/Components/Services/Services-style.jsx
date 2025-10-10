import styled from "styled-components";

export const ServicesTitleBody = styled.div`
  padding-bottom: 80px;

  & > *:nth-child(3) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ServicesTitleSide = styled.div`
  flex: 0 0 25%;
  display: flex;
  gap: 10px;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    justify-content: space-between;
    margin-bottom: 0;
  }
`;
export const ServicesTitle = styled.div`
  padding: 0 40px;
  font-weight: 500;
  font-size: 45px;
  line-height: 87%;
  h2 {
    max-width: 690px;
  }
  @media (min-width: 768px) {
    font-size: 55px;
  }
  @media (min-width: 1100px) {
    font-size: 64px;
  }
`;

export const ServicesBlockBody = styled.article`
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: var(--color-grey-1);
  border-top: 1px dashed #a7a7a7;

  @media (min-width: 768px) {
    position: sticky;
    top: 0;
    left: 0;

    padding-top: 40px;
    padding-bottom: 40px;
    flex-direction: row;
    gap: 0;
  }
`;

export const ServicesBlockContentWrapper = styled.div`
  padding: 0;
  max-width: 720px;

  @media (min-width: 768px) {
    padding: 0 15px;
  }
  @media (min-width: 1100px) {
    padding: 0 30px;
  }

  a,
  button {
    margin-top: 40px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      margin-top: 50px;
    }
  }
`;

export const ServicesBlockNumber = styled.div`
  font-size: 20px;
  line-height: 88%;
  text-transform: uppercase;

  @media (min-width: 768px) {
    flex: 0 0 10%;
  }
  @media (min-width: 1100px) {
    flex: 0 0 25%;
  }
`;

export const ServicesBlockContent = styled.div`
  flex: 1 1 auto;
`;

export const ServicesBlockTitle = styled.h3`
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 30px;
  line-height: 107%;

  @media (min-width: 768px) {
    margin-bottom: 107px;
    font-size: 40px;
  }
`;

export const ServicesBlockText = styled.p`
  font-size: 18px;
  line-height: 120%;
  text-indent: 25%;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ServicesWrapperButton = styled.div`
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;

    button {
      min-width: 260px;
    }
  }
  @media (min-width: 767.98px) {
    button {
      min-width: 480px;
    }
  }
`;
export const ServicesBlockLottie = styled.div`
  flex: 0 0 30%;
  display: flex;
  align-items: center;
  background-image: linear-gradient(180deg, #00ff8a 0%, #eaff00 100%);
  @media (min-width: 768px) {
    flex: 0 0 25%;
  }
`;
export const ServicesImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 140%;
  width: 100%;
  height: 0;
  transform: translateY(50%);
`;
export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
