import styled from "styled-components";

const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: auto;
  padding: 0 3rem;
  padding-bottom: 10rem;
  height: calc(100vh - var(--navbar-height));

  @media screen and (max-width: 576px) {
    width: 95%;
  }
`;

const FeaturedHeading = styled.h1`
  font-size: 20rem;
  font-weight: 800;

  @media (max-width: 1280px) {
    font-size: 10rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 7rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 5rem;
  }
`;

const FeaturedNameTagline = styled.p`
  font-size: 4rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 2rem;
  }
`;

const FeaturedRuler = styled.hr`
  font-size: 4rem;
  margin: 2rem 0;
`;

const FeaturedDesc = styled.p`
  font-size: 2.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

export const FeaturedStyles = {
  FeaturedContainer,
  FeaturedHeading,
  FeaturedNameTagline,
  FeaturedRuler,
  FeaturedDesc,
};
