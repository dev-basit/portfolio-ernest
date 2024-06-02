import styled from "styled-components";

const TestimonialContainer = styled.footer`
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

const TestimonialHeadingContainer = styled.div`
  text-align: center;
`;

const TestimonialContentContainer = styled.section`
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

  @media screen and (max-width: 576px) {
    margin: 1rem 0;
    padding-left: 0;
  }
`;

const Testimonial = styled.div`
  display: flex;
  min-width: 70rem;
  column-gap: 2rem;
  margin: 0rem 4rem;
  padding: 4rem 8rem 4rem 3rem;
  background-color: black;
  border-radius: 1rem;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    min-width: 70vw;
    padding: 2rem 1rem;
    margin: 0rem 1rem;
  }
`;

const TestimonialDescription = styled.p`
  margin-bottom: 1rem;
  color: var(--primary-light2);
`;

export const TestimonialStyles = {
  TestimonialContainer,
  TestimonialHeadingContainer,
  TestimonialContentContainer,
  Testimonial,
  TestimonialDescription,
};
