import styled from "styled-components";

const Anchor = styled.a``;

const ContainerHeading = styled.h1`
  text-align: center;
  margin: 3rem 0;
  color: ${({ color }) => color || "white"};
  letter-spacing: 0.5rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Text = styled.p`
  font-size: ${(fonts) => fonts.lg || "2.5rem"};

  @media screen and (max-width: 1280px) {
    font-size: ${(fonts) => fonts.md || "2rem"};
  }

  @media screen and (max-width: 576px) {
    font-size: ${(fonts) => fonts.sm || "1.5rem"};
  }
`;

const HorizontalBreak = styled.br``;

export const CommonStyles = { Anchor, ContainerHeading, Text, HorizontalBreak };
