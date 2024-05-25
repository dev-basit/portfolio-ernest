import React from "react";
import { AboutStyles } from "@/components/about/styles";
import { CommonStyles } from "@/styles/common";
import { config } from "@/config";
import Image from "next/image";

function About() {
  return (
    <AboutStyles.AboutContainer>
      <AboutStyles.AboutHeading>ABOUT ME</AboutStyles.AboutHeading>
      <AboutStyles.AbouContentContainer>
        <AboutStyles.AboutLeftContainer>
          <Image
            src="/assets/about.jpg"
            width={600}
            height={500}
            alt="about me"
            style={{ borderRadius: "1rem" }}
          />
        </AboutStyles.AboutLeftContainer>
        <AboutStyles.AboutRightContainer>
          <CommonStyles.Text>{config.aboutText}</CommonStyles.Text>
          <br />
          <CommonStyles.Text>{config.aboutText2}</CommonStyles.Text>
        </AboutStyles.AboutRightContainer>
      </AboutStyles.AbouContentContainer>
    </AboutStyles.AboutContainer>
  );
}

export default About;
