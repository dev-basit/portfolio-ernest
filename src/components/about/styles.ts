import styled from "styled-components";

const AboutContainer = styled.main`
  height: 100vh;
  padding: 5rem 0;
  overflow: hidden;
`;

const AboutHeading = styled.h2`
  text-align: center;
`;

const AbouContentContainer = styled.section`
  display: flex;
  height: 100%;
`;

const AboutLeftContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const AboutRightContainer = styled.section`
  width: 50%;
  padding: 12rem;
`;

export const AboutStyles = {
  AboutContainer,
  AboutHeading,
  AbouContentContainer,
  AboutLeftContainer,
  AboutRightContainer,
};
