import React from "react";
import { CommonStyles } from "@/styles/common";
import { NavbarStyles } from "@/components/navbar/styles";
import { config } from "@/config";

function Navbar() {
  const handleScroll = (height: number) => {
    window.scrollTo({ top: height, behavior: "smooth" });
  };

  return (
    <NavbarStyles.NavbarContainer>
      <NavbarStyles.NavbarLogo>
        <CommonStyles.Anchor href="#featured">{config.name}.</CommonStyles.Anchor>
      </NavbarStyles.NavbarLogo>
      <NavbarStyles.NavbarListContainer>
        <NavbarStyles.NavbarList>
          <NavbarStyles.NavbarListItem onClick={() => handleScroll(580)}>about</NavbarStyles.NavbarListItem>
          <NavbarStyles.NavbarListItem onClick={() => handleScroll(1250)}>
            experience
          </NavbarStyles.NavbarListItem>
          <NavbarStyles.NavbarListItem onClick={() => handleScroll(2060)}>
            testimonial
          </NavbarStyles.NavbarListItem>
        </NavbarStyles.NavbarList>
        <NavbarStyles.NavbarChatButton>
          <CommonStyles.Anchor href="#chat">let&apos;s chat</CommonStyles.Anchor>
        </NavbarStyles.NavbarChatButton>
      </NavbarStyles.NavbarListContainer>
    </NavbarStyles.NavbarContainer>
  );
}

export default Navbar;
