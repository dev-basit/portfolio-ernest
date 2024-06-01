import styled from "styled-components";

const ProjectsContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 1rem;
  width: 90%;
  margin: auto;

  @media screen and (max-width: 576px) {
    width: 95%;
  }
`;

const ProjectsHeadingContainer = styled.div`
  text-align: center;
`;

const ProjectsContentContainer = styled.section`
  display: flex;
  margin: 5rem 0;
  padding-left: 30%;
  height: 100%;
  row-gap: 1rem;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProjectsLeftContainer = styled.section`
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

const Project = styled.div`
  margin: 0rem 4rem;
`;

const ProjectDescription = styled.p`
  margin: 2rem 0;
  text-align: center;
  color: var(--primary-light2);
`;

export const ProjectsStyles = {
  ProjectsContainer,
  ProjectsHeadingContainer,
  ProjectsContentContainer,
  ProjectsLeftContainer,
  Project,
  ProjectDescription,
};
