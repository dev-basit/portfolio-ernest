import React from "react";
import { CommonStyles } from "@/styles/common";
import { NavbarStyles } from "@/components/navbar/styles";
import { config } from "@/config";

function Navbar() {
  return (
    <NavbarStyles.NavbarContainer>
      <NavbarStyles.NavbarLogo>
        <CommonStyles.Anchor href="featured">{config.name}.</CommonStyles.Anchor>
      </NavbarStyles.NavbarLogo>
      <NavbarStyles.NavbarListContainer>
        <NavbarStyles.NavbarList>
          <NavbarStyles.NavbarListItem>about</NavbarStyles.NavbarListItem>
          <NavbarStyles.NavbarListItem>experience</NavbarStyles.NavbarListItem>
          <NavbarStyles.NavbarListItem>projects</NavbarStyles.NavbarListItem>
        </NavbarStyles.NavbarList>
        <NavbarStyles.NavbarChatButton>let's chat</NavbarStyles.NavbarChatButton>
      </NavbarStyles.NavbarListContainer>
    </NavbarStyles.NavbarContainer>
  );
}

export default Navbar;
