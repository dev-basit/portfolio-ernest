import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  height: calc(100vh - var(--navbar-height));

  @media screen and (max-width: 576px) {
    width: 95%;
  }
`;

const FooterContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
  margin: 4rem 0;
  border: 0.4rem solid var(--white);
  border-radius: 0.8rem;
`;

const FooterContactContent = styled.section`
  display: flex;
  justify-content: space-around;
`;

const FooterImage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 10rem;
`;

const FooterCopyright = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.section`
  text-align: center;
`;

export const FooterStyles = {
  FooterContainer,
  FooterContactContainer,
  FooterContactContent,
  FooterImage,
  FooterCopyright,
  FooterSection,
};
