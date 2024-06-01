import React from "react";
import { ExperienceStyles } from "@/components/experience/styles";
import { CommonStyles } from "@/styles/common";
import Stepper from "@/components/experience/stepper";
import { config, fonts } from "@/config";

function Experience() {
  return (
    <ExperienceStyles.ExperienceContainer data-aos="zoom-in-up" id="experience">
      <CommonStyles.ContainerHeading color="black">EXPERIENCE</CommonStyles.ContainerHeading>
      <ExperienceStyles.ExperienceStepperContainer data-aos="fade-up">
        <ExperienceStyles.ExperienceSteps>
          {Array.from({ length: 4 }).map((item, index) => (
            <Stepper key={index} lastStep={index === 3} data-aos="fade-up" />
          ))}
        </ExperienceStyles.ExperienceSteps>
        <ExperienceStyles.ExperienceCompaniesContainer data-aos="fade-up">
          {config.experience.map((company, index) => (
            <ExperienceStyles.ExperienceCompany key={index} data-aos="fade-up">
              <ExperienceStyles.ExperienceCompanyName>
                {company.compantName}
              </ExperienceStyles.ExperienceCompanyName>
              <ExperienceStyles.ExperienceJob>
                <ExperienceStyles.ExperienceJobPosition>
                  {company.jobPosition}
                </ExperienceStyles.ExperienceJobPosition>
                <CommonStyles.Text fonts={fonts}>{company.jobDuration}</CommonStyles.Text>
              </ExperienceStyles.ExperienceJob>
              <CommonStyles.Text fonts={fonts}>{company.jobDescription} </CommonStyles.Text>
            </ExperienceStyles.ExperienceCompany>
          ))}
        </ExperienceStyles.ExperienceCompaniesContainer>
      </ExperienceStyles.ExperienceStepperContainer>
    </ExperienceStyles.ExperienceContainer>
  );
}

export default Experience;
