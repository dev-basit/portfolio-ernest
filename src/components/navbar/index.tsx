import React from "react";
import { CommonStyles } from "@/styles/common";
import { NavbarStyles } from "@/components/navbar/styles";
import { config } from "@/config";

function Navbar() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id)?.getBoundingClientRect();
    if (el) window.scrollTo({ top: el.top - el.x, behavior: "smooth" });
  };

  return (
    <NavbarStyles.NavbarContainer>
      <NavbarStyles.NavbarLogo>
        <CommonStyles.Anchor href="#featured">{config.name}.</CommonStyles.Anchor>
      </NavbarStyles.NavbarLogo>
      <NavbarStyles.NavbarListContainer>
        <NavbarStyles.NavbarList>
          <NavbarStyles.NavbarListItem onClick={() => handleScroll("about")}>
            <CommonStyles.Anchor href="#">about</CommonStyles.Anchor>
          </NavbarStyles.NavbarListItem>
          <NavbarStyles.NavbarListItem onClick={() => handleScroll("experience")}>
            <CommonStyles.Anchor href="#">experience</CommonStyles.Anchor>
          </NavbarStyles.NavbarListItem>
          <NavbarStyles.NavbarListItem onClick={() => handleScroll("testimonial")}>
            <CommonStyles.Anchor href="#">testimonial</CommonStyles.Anchor>
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
