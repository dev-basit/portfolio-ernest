import React from "react";
import { FeaturedStyles } from "@/components/featured/styles";
import { config } from "@/config";

function Featured() {
  return (
    <FeaturedStyles.FeaturedContainer>
      <FeaturedStyles.FeaturedHeading>Bonjour!</FeaturedStyles.FeaturedHeading>
      <FeaturedStyles.FeaturedNameTagline>{config.nameTagLine}</FeaturedStyles.FeaturedNameTagline>
      <FeaturedStyles.FeaturedRuler></FeaturedStyles.FeaturedRuler>
      <FeaturedStyles.FeaturedDesc>{config.descriptionTagLine} </FeaturedStyles.FeaturedDesc>
    </FeaturedStyles.FeaturedContainer>
  );
}

export default Featured;
