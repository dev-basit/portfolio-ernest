import styled from "styled-components";

const AboutContainer = styled.main`
  min-height: 100vh;
  padding: 5rem 3rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    max-height: 200vh;
  }
`;

const AboutHeading = styled.h1`
  text-align: center;
  margin: 3rem 0;
  color: ${({ color }) => color || "white"};
  letter-spacing: 0.5rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const AbouContentContainer = styled.section`
  display: flex;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 5rem;
  }
`;

const AboutLeftContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0 5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 2rem;
  }
`;

const AboutRightContainer = styled.section`
  position: relative;
  width: 50%;
  padding: 0 5rem;

  @media screen and (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    flex: 1;
  }
`;

export const AboutStyles = {
  AboutContainer,
  AboutHeading,
  AbouContentContainer,
  AboutLeftContainer,
  AboutRightContainer,
};
