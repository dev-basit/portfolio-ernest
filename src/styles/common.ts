import styled from "styled-components";

const Anchor = styled.a``;

const Text = styled.p`
  font-size: 2.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const HorizontalBreak = styled.br``;

export const CommonStyles = { Anchor, Text, HorizontalBreak };
