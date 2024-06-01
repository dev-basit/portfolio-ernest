import React from "react";
import { CommonStyles } from "@/styles/common";
import { NavbarStyles } from "@/components/navbar/styles";
import { config } from "@/config";

function Navbar() {
  return (
    <NavbarStyles.NavbarContainer>
      <NavbarStyles.NavbarLogo>
        <CommonStyles.Anchor href="#featured">{config.name}.</CommonStyles.Anchor>
      </NavbarStyles.NavbarLogo>
      <NavbarStyles.NavbarListContainer>
        <NavbarStyles.NavbarList>
          <NavbarStyles.NavbarListItem>
            <CommonStyles.Anchor href="#about">about</CommonStyles.Anchor>
          </NavbarStyles.NavbarListItem>
          <NavbarStyles.NavbarListItem>
            <CommonStyles.Anchor href="#experience">experience</CommonStyles.Anchor>
          </NavbarStyles.NavbarListItem>
          <NavbarStyles.NavbarListItem>
            <CommonStyles.Anchor href="#testimonial">testimonial</CommonStyles.Anchor>
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
