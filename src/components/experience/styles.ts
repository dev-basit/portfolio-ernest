import styled from "styled-components";

const ExperienceContainer = styled.main`
  min-height: 100vh;
  background-color: var(--white);
  color: black;
  padding: 1rem 0;
`;

const ExperienceContentContainer = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 5rem;
  }
`;

const ExperienceStepperContainer = styled.section`
  display: flex;
`;

const ExperienceSteps = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 11rem;
  margin-left: 10rem;

  @media screen and (max-width: 1280px) {
    row-gap: 10rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
    row-gap: 15rem;
  }
`;

const ExperienceStep = styled.section``;

const ExperienceStepCircle = styled.section`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 2.5rem;
  background-color: black;
`;

const ExperienceStepLine = styled.section`
  position: absolute;
  width: 0.7rem;
  height: 14rem;
  background-color: var(--primary-light2);
  left: 12rem;

  @media screen and (max-width: 768px) {
    left: 4rem;
    height: 15rem;
  }
`;

const ExperienceCompaniesContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  margin-top: -1rem;
  margin-right: 4rem;
  margin-bottom: 6rem;

  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    margin-left: 2rem;
  }
`;

const ExperienceCompany = styled.section`
  margin-bottom: 1rem;
`;

const ExperienceCompanyName = styled.h1`
  font-size: 3rem;
  color: black;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ExperienceJobPosition = styled.h2`
  display: flex;
  font-size: 2rem;
  color: black;
  align-items: center;
  margin-top: 0.3rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ExperienceJob = styled.section`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ExperienceStyles = {
  ExperienceContainer,
  ExperienceContentContainer,
  ExperienceStepperContainer,
  ExperienceSteps,
  ExperienceStep,
  ExperienceStepCircle,
  ExperienceStepLine,
  ExperienceCompaniesContainer,
  ExperienceCompany,
  ExperienceCompanyName,
  ExperienceJobPosition,
  ExperienceJob,
};
