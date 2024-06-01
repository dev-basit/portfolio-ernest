import React from "react";
import { ExperienceStyles } from "@/components/experience/styles";

function Stepper(props: { lastStep: boolean }) {
  return (
    <ExperienceStyles.ExperienceStep>
      <ExperienceStyles.ExperienceStepCircle />
      {!props.lastStep && <ExperienceStyles.ExperienceStepLine data-aos="zoom-down" />}
    </ExperienceStyles.ExperienceStep>
  );
}

export default Stepper;
