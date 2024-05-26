import React from "react";
import Image from "next/image";
import { FooterStyles } from "@/components/footer/styles";
import { CommonStyles } from "@/styles/common";
import { config } from "@/config";

function Footer() {
  return (
    <FooterStyles.FooterContainer>
      <FooterStyles.FooterContactContainer>
        <CommonStyles.ContainerHeading>LET&apos;S CHAT&#33;</CommonStyles.ContainerHeading>
        <FooterStyles.FooterContactContent>
          <FooterStyles.FooterImage>
            <Image src="/assets/linkedin.png" width={300} height={200} alt="linkedin" layout="responsive" />
            <CommonStyles.Text>{config.name}</CommonStyles.Text>
          </FooterStyles.FooterImage>
          <FooterStyles.FooterSection>
            <CommonStyles.Text>|</CommonStyles.Text>
            <CommonStyles.Text>Or</CommonStyles.Text>
            <CommonStyles.Text>|</CommonStyles.Text>
          </FooterStyles.FooterSection>
          <FooterStyles.FooterSection>
            <CommonStyles.ContainerHeadingMD>Contact Details</CommonStyles.ContainerHeadingMD>
            <CommonStyles.Text>{config.email}</CommonStyles.Text>
            <CommonStyles.Text>{config.phone}</CommonStyles.Text>
          </FooterStyles.FooterSection>
        </FooterStyles.FooterContactContent>
      </FooterStyles.FooterContactContainer>
      <FooterStyles.FooterCopyright>
        <CommonStyles.ContainerHeadingSM>
          Designed & developed by {config.developedBy}
        </CommonStyles.ContainerHeadingSM>
        <CommonStyles.List>
          <CommonStyles.Button>{new Date().getFullYear()}</CommonStyles.Button>
          <CommonStyles.Button>{config.techStack}</CommonStyles.Button>
        </CommonStyles.List>
      </FooterStyles.FooterCopyright>
    </FooterStyles.FooterContainer>
  );
}

export default Footer;
