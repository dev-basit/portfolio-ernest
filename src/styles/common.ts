import styled from "styled-components";
import { IFonts } from "@/interfaces";

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

const ContainerHeadingMD = styled.h2`
  color: ${({ color }) => color || "white"};
  font-size: 2.5rem;

  @media screen and (max-width: 576px) {
    font-size: 2rem;
  }
`;

const ContainerHeadingSM = styled.h3`
  color: ${({ color }) => color || "white"};
`;

const Text = styled.p<{ fonts: IFonts }>`
  font-size: ${({ fonts }) => fonts.lg || "2.5rem"};

  @media screen and (max-width: 1280px) {
    font-size: ${({ fonts }) => fonts.md || "2rem"};
  }

  @media screen and (max-width: 576px) {
    font-size: ${({ fonts }) => fonts.sm || "1.5rem"};
  }
`;

const HorizontalBreak = styled.br``;

const Section = styled.section``;

const List = styled.ul`
  display: flex;
  padding: 0 3rem;
  column-gap: 2rem;

  @media screen and (max-width: 768px) {
    column-gap: 1rem;
  }
`;

const Button = styled.button`
  padding: 1rem;
  margin-right: 4rem;
  border-radius: 2.5rem;
  color: var(--white);
  border: 1px solid var(--white);
  background: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease, font-weight 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: var(--primary-light);
    font-weight: 600;
    border: none;
  }

  @media screen and (max-width: 768px) {
    margin-right: 2rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  row-gap: 2rem;
  flex-wrap: wrap;
`;

const RowCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
`;

const ColumnStart = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const CommonStyles = {
  Anchor,
  ContainerHeading,
  ContainerHeadingMD,
  ContainerHeadingSM,
  Text,
  HorizontalBreak,
  Section,
  List,
  Button,
  Row,
  RowCenter,
  ColumnStart,
};
