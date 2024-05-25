import styled from "styled-components";

const Anchor = styled.a``;

const Text = styled.p`
  font-size: 2rem;

  @media screen and (max-width: 576px) {
    font-size: 1rem;
  }
`;

const HorizontalBreak = styled.br``;

export const CommonStyles = { Anchor, Text, HorizontalBreak };
