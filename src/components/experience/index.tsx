import React from "react";
import { ExperienceStyles } from "@/components/experience/styles";
import { CommonStyles } from "@/styles/common";
import Stepper from "@/components/experience/stepper";
import { config, fonts } from "@/config";

function Experience() {
  return (
    <ExperienceStyles.ExperienceContainer>
      <CommonStyles.ContainerHeading color="black">EXPERIENCE</CommonStyles.ContainerHeading>
      <ExperienceStyles.ExperienceStepperContainer>
        <ExperienceStyles.ExperienceSteps>
          {Array.from({ length: 4 }).map((item, index) => (
            <Stepper key={index} lastStep={index === 3} />
          ))}
        </ExperienceStyles.ExperienceSteps>
        <ExperienceStyles.ExperienceCompaniesContainer>
          {config.experience.map((company, index) => (
            <ExperienceStyles.ExperienceCompany key={index}>
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
