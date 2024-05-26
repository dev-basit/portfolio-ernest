import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--navbar-height);
  padding: 0 3rem;
  position: fixed;
  background-color: var(--primary);
  width: 100%;
  z-index: 2;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const NavbarLogo = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  padding-left: 1.5rem;
  padding: 0 1rem;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-light);
  }
`;

const NavbarListContainer = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  padding: 0 3rem;
  column-gap: 2rem;

  @media screen and (max-width: 768px) {
    column-gap: 1rem;
  }
`;

const NavbarListItem = styled.li`
  padding: 1rem 1.5rem;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  transition: background-color 0.3s ease, font-weight 0.3s ease;

  &:hover {
    background-color: var(--primary-light);
    font-weight: 600;
  }
`;

const NavbarChatButton = styled.button`
  width: 11rem;
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

export const NavbarStyles = {
  NavbarContainer,
  NavbarLogo,
  NavbarListContainer,
  NavbarList,
  NavbarListItem,
  NavbarChatButton,
};
